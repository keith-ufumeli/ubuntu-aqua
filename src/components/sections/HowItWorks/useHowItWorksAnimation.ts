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

      // Left column bars for visual anchor
      const bars = barsRef.current.filter(Boolean);

      // Set initial states for bars
      gsap.set(bars, { 
        height: 0,
        transformOrigin: 'top',
        opacity: 1,
        scale: 0.95
      });

      // Phase 1: Bars establish visual anchor (0-1.2s)
      tl.to(bars, {
        height: '100%',
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out'
      });

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
