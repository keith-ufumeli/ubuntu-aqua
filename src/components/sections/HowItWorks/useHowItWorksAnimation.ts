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
  const rightBentoRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  // Optimized animation setup with performance considerations
  const setupAnimations = useCallback(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create main timeline with optimized settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          pin: false,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Simple entrance animations
      const bars = barsRef.current.filter(Boolean);
      const textElements = [headingRef.current, subtextRef.current].filter(Boolean);
      const cards = cardsRef.current.filter(Boolean);

      // Set initial states
      gsap.set([...bars, ...textElements, ...cards], { 
        opacity: 0, 
        y: 30 
      });

      // Animate elements in sequence
      tl.to(bars, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      })
      .to(textElements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }, 0.2)
      .to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
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
    rightBentoRef,
    barsRef,
    cardsRef,
    headingRef,
    subtextRef
  };

  return refs;
};
