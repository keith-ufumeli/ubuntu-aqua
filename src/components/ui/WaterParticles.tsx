"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface WaterParticlesProps {
  particleCount?: number;
  colors?: string[];
  mouseInfluence?: number;
  speed?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function WaterParticles({
  particleCount = 100,
  colors = ['#E49B0F', '#FF9FFC', '#B19EEF'],
  mouseInfluence = 0.2,
  speed = 0.5,
  size = 2,
  className = '',
  style = {}
}: WaterParticlesProps): React.ReactElement {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animationIdRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const lastMouseTimeRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors_array = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create more distributed particle positions
      const radius = Math.random() * 5 + 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Slower, more gentle velocities
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;

      // Random colors from the provided palette
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = new THREE.Color(colors[colorIndex]);
      colors_array[i3] = color.r;
      colors_array[i3 + 1] = color.g;
      colors_array[i3 + 2] = color.b;

      // More varied particle sizes for visual interest
      sizes[i] = Math.random() * size + 1.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors_array, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material for particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        mouseInfluence: { value: mouseInfluence }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        uniform float time;
        uniform vec2 mouse;
        uniform float mouseInfluence;
        varying vec3 vColor;
        varying float vAlpha;
        varying float vDistance;
        
        void main() {
          vColor = color;
          
          // Create gentle floating motion
          vec3 pos = position;
          pos.y += sin(time * 0.3 + position.x * 0.05) * 0.3;
          pos.x += cos(time * 0.2 + position.z * 0.05) * 0.2;
          pos.z += sin(time * 0.1 + position.y * 0.03) * 0.1;
          
          // Enhanced mouse influence with distance-based effect
          vec2 mouseEffect = (mouse - pos.xy * 0.05) * mouseInfluence;
          float mouseDistance = length(mouse - pos.xy * 0.05);
          float mouseStrength = 1.0 - smoothstep(0.0, 3.0, mouseDistance);
          pos.xy += mouseEffect * mouseStrength;
          
          // Distance-based alpha with smoother falloff
          float dist = length(pos);
          vDistance = dist;
          vAlpha = 1.0 - smoothstep(6.0, 12.0, dist);
          
          // Add subtle pulsing effect
          vAlpha *= 0.7 + 0.3 * sin(time * 2.0 + position.x + position.y);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (250.0 / -mvPosition.z) * (0.8 + 0.2 * vAlpha);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        varying float vDistance;
        
        void main() {
          // Create soft circular particles with gradient
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Create soft edge with multiple falloff zones
          float alpha = 1.0 - smoothstep(0.0, 0.5, distance);
          alpha *= vAlpha;
          
          // Add subtle color variation based on distance
          vec3 finalColor = vColor;
          finalColor *= 0.8 + 0.2 * (1.0 - distance);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Enhanced mouse interaction with smooth interpolation
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.targetY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      lastMouseTimeRef.current = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop with smooth mouse interpolation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001 * speed;
      
      // Smooth mouse interpolation
      const lerpFactor = 0.1;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * lerpFactor;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * lerpFactor;
      
      // Calculate mouse influence based on time since last movement
      const timeSinceMouse = Date.now() - lastMouseTimeRef.current;
      const mouseInfluenceMultiplier = Math.max(0, 1 - timeSinceMouse / 2000); // Fade out over 2 seconds
      
      if (material.uniforms) {
        material.uniforms.time.value = time;
        material.uniforms.mouse.value.set(
          mouseRef.current.x * 8 * mouseInfluenceMultiplier, 
          mouseRef.current.y * 8 * mouseInfluenceMultiplier
        );
        material.uniforms.mouseInfluence.value = mouseInfluence * mouseInfluenceMultiplier;
      }

      // Update particle positions
      const positions = geometry.attributes.position.array as Float32Array;
      const velocities_array = velocities;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Apply velocities
        positions[i3] += velocities_array[i3];
        positions[i3 + 1] += velocities_array[i3 + 1];
        positions[i3 + 2] += velocities_array[i3 + 2];

        // Boundary check and reset
        const distance = Math.sqrt(
          positions[i3] ** 2 + 
          positions[i3 + 1] ** 2 + 
          positions[i3 + 2] ** 2
        );

        if (distance > 15) {
          // Reset particle to center with random direction
          const radius = Math.random() * 4 + 1;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          
          positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i3 + 2] = radius * Math.cos(phi);
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotate the entire particle system
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    resizeObserverRef.current = resizeObserver;

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      if (geometry) {
        geometry.dispose();
      }
      
      if (material) {
        material.dispose();
      }
    };
  }, [particleCount, colors, mouseInfluence, speed, size]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full ${className}`}
      style={style}
    />
  );
}
