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

  // Optimized animation setup with performance considerations
  const setupAnimations = useCallback(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline with optimized settings for bars and text only
      // Steps are now handled by Framer Motion for better micro-interactions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          pin: false,
          scrub: 0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate bars growing from top with enhanced easing
      const bars = barsRef.current.filter(Boolean);
      const textElements = [headingRef.current, subtextRef.current].filter(Boolean);

      // Set initial states - bars maintain full opacity
      gsap.set(bars, { 
        height: 0,
        transformOrigin: 'top',
        opacity: 1  // Keep bars at full opacity
      });
      gsap.set(textElements, { 
        opacity: 0, 
        y: 20,
        scale: 0.98
      });

      // Enhanced bar animation with better timing - no opacity changes
      tl.to(bars, {
        height: '100%',
        duration: 1.5,
        stagger: 0.15,
        ease: 'power2.out'
      })
      .to(textElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, 0.4);

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
