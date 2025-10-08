import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useHowItWorksAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const rightStepsRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  // Enhanced animation setup with clear visual hierarchy
  const setupAnimations = useCallback(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline with clear left-to-right flow
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          pin: false,
          scrub: 0.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Left column elements for primary focus
      const bars = barsRef.current.filter(Boolean);
      const textElements = [headingRef.current, subtextRef.current].filter(Boolean);
      const rightColumn = rightStepsRef.current;

      // Set initial states with enhanced visual emphasis
      gsap.set(bars, { 
        height: 0,
        transformOrigin: 'top',
        opacity: 1,
        scale: 0.95
      });
      gsap.set(textElements, { 
        opacity: 0, 
        y: 30,
        scale: 0.9,
        filter: 'blur(2px)'
      });
      gsap.set(rightColumn, {
        opacity: 0,
        x: 50,
        scale: 0.95,
        filter: 'blur(1px)'
      });

      // Phase 1: Left column establishes context (0-1.2s)
      // Bars grow with enhanced emphasis
      tl.to(bars, {
        height: '100%',
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out'
      })
      // Heading appears with strong emphasis
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out'
      }, 0.3)
      // Subtext follows with subtle delay
      .to(subtextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power2.out'
      }, 0.6)
      
      // Phase 2: Right column introduction with delayed entry (1.0-2.0s)
      .to(rightColumn, {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.0,
        ease: 'power2.out'
      }, 1.0);

    }, sectionRef);

    return ctx;
  }, []);

  useEffect(() => {
    const ctx = setupAnimations();
    return () => ctx?.revert();
  }, [setupAnimations]);

  // Performance optimization: memoize refs
  const refs = {
    sectionRef,
    leftVisualRef,
    rightStepsRef,
    barsRef,
    stepsRef,
    headingRef,
    subtextRef
  };

  return refs;
};
