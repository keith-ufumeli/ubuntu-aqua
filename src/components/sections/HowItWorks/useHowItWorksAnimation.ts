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
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Performance optimization: only update when needed
            if (self.progress > 0.1 && self.progress < 0.9) {
              // Add subtle parallax effect to background
              const parallaxOffset = (self.progress - 0.5) * 20;
              gsap.set(sectionRef.current, { 
                backgroundPosition: `center ${50 + parallaxOffset}%` 
              });
            }
          }
        }
      });

      // Animate bars with enhanced effects
      const bars = barsRef.current.filter(Boolean);
      gsap.set(bars, { 
        height: 0, 
        transformOrigin: 'bottom',
        willChange: 'height, background'
      });
      
      tl.to(bars, {
        height: '100%',
        duration: 1.2,
        stagger: 0.25,
        ease: 'power2.out'
      }, 0);

      // Enhanced text animations with split effect
      const textElements = [headingRef.current, subtextRef.current].filter(Boolean);
      gsap.set(textElements, { 
        opacity: 0, 
        y: 40,
        willChange: 'opacity, transform'
      });
      
      tl.to(textElements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'expo.out'
      }, 0.4);

      // Animate bento cards with enhanced effects
      const cards = cardsRef.current.filter(Boolean);
      gsap.set(cards, { 
        scale: 0.8, 
        opacity: 0, 
        rotation: 3,
        y: 30,
        willChange: 'transform, opacity'
      });

      tl.to(cards, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.4)'
      }, 0.8);

      // Add shimmer effect to bars with performance optimization
      tl.to(bars, {
        background: 'linear-gradient(45deg, #20000C 0%, #E49B0F 50%, #20000C 100%)',
        backgroundSize: '200% 200%',
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true
      }, 1.8);

      // Add subtle floating animation to cards
      cards.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: -5,
            duration: 2 + index * 0.3,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            delay: 2 + index * 0.2
          });
        }
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
    rightBentoRef,
    barsRef,
    cardsRef,
    headingRef,
    subtextRef
  };

  return refs;
};
