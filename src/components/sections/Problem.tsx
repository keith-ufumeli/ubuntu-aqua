'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Problem() {
  const imageRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !rippleRef.current || !cardsRef.current) return;

    // Enhanced parallax effect for the image
    gsap.fromTo(imageRef.current,
      {
        yPercent: -15,
      },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".problem-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Create water ripple animation
    const rippleElements = rippleRef.current.querySelectorAll('.ripple-wave');
    
    rippleElements.forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        scaleY: 1.2,
        opacity: 0.6,
        duration: 3 + index * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.8
      });
    });

    // Scroll-triggered animations for pain point cards
    const cards = cardsRef.current.querySelectorAll('.pain-point-card');
    const waterDrops = cardsRef.current.querySelectorAll('.water-drop');
    
    cards.forEach((card, index) => {
      // Set initial state
      gsap.set(card, { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      });
      
      // Set initial state for water drops
      gsap.set(waterDrops[index], {
        y: -20,
        opacity: 0,
        scale: 0.8
      });

      // Animate cards in with staggered delay
      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate water drop with delay
      gsap.to(waterDrops[index], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "bounce.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Hover effects for cards
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');
      const underline = card.querySelector('.card-underline');
      
      // Create underline element if it doesn't exist
      if (title && !underline) {
        const underlineEl = document.createElement('div');
        underlineEl.className = 'card-underline absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300';
        title.parentNode?.appendChild(underlineEl);
      }

      // Hover in
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
        
        if (underline) {
          gsap.to(underline, {
            width: "100%",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });

      // Hover out
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          duration: 0.3,
          ease: "power2.out"
        });
        
        if (underline) {
          gsap.to(underline, {
            width: "0%",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative bg-background problem-section">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Image and Quote */}
        <div className="relative lg:h-[900px] h-[50vh] overflow-hidden">
          {/* Static container for quote overlay */}
          <div className="absolute inset-0 z-20">
            <div className="absolute bottom-16 left-12 bg-[#2B2B2B] bg-opacity-80 p-8 max-w-[294px] rounded-lg">
              <div className="relative">
                 <div className="absolute -top-8 -left-4">
                   <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M23.5114 4.38933C12.7419 4.38933 0 14.0012 0 23.8247V45.6107H19.7715V23.8247C19.7715 22.2845 13.2139 22.2845 13.2139 13.1741C13.2139 10.8023 17.9183 9.13115 23.5114 4.38933Z" fill="hsl(var(--primary))"/>
                     <path d="M50 4.38933C39.2305 4.38933 26.4886 14.0012 26.4886 23.8247V45.6107H46.2601V23.8247C46.2601 22.2845 39.7025 22.2845 39.7025 13.1741C39.7025 10.8023 44.4069 9.13115 50 4.38933Z" fill="hsl(var(--primary))"/>
                   </svg>
                 </div>
                <p className="text-base sm:text-lg body-text text-white">
                  70% of rural Zimbabweans are at risk of waterborne diseases
                </p>
              </div>
            </div>
          </div>
          
          {/* Parallax Image Background */}
          <div 
            ref={imageRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] z-10"
          >
            <Image
              src="/images/water-flowing-from-a-tap.jpg"
              alt="Water crisis in Zimbabwe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="py-20 px-8 lg:px-16">
          <div className="max-w-[571px] space-y-16">
            {/* First Row - Heading and Description */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.25rem] font-medium text-foreground leading-tight mb-6">
                <span className="text-[#744127]">The Water Crisis in </span>
                <span className="text-primary">Zimbabwe</span>
              </h2>
              <p className="text-base sm:text-lg body-text text-foreground">
                Every day, millions of Zimbabweans face the risk of waterborne 
                diseases due to contaminated drinking water. Current monitoring 
                systems are reactive, not predictive.
              </p>
            </div>

            {/* Second Row - Cards */}
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pain-point-card relative p-6 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M0 8.31541C0 20.0612 8.83117 25.7615 14.372 28.1819C15.875 28.8383 16.6265 29.1667 18.75 29.1667C18.75 29.1667 18.75 0 18.75 0L0 6.25C0 6.25 0 8.31541 0 8.31541Z" fill="#20010A" transform="translate(6.25 16.667)" />
                        <path d="M4.37792 28.1819C9.91875 25.7615 18.75 20.0612 18.75 8.31541C18.75 8.31541 18.75 6.25 18.75 6.25L0 0C0 0 0 29.1667 0 29.1667C2.12354 29.1667 2.875 28.8383 4.37792 28.1819Z" fill="#F49E0B" fillOpacity="0.5" transform="translate(25 16.667)" />
                        <path d="M10.9686 2.08498C4.70483 4.22908 1.57298 5.30113 0.7865 6.42169C0 7.54225 0 10.8731 0 17.5348C0 17.5348 0 18.75 0 18.75L18.75 12.5C18.75 12.5 18.75 0 18.75 0C17.0596 0 15.4271 0.558833 12.1619 1.6765C12.1619 1.6765 10.9686 2.08498 10.9686 2.08498Z" fill="#F49E0B" fill-opacity="0.5" transform="translate(6.25 4.167)" />
                        <path d="M6.58813 1.6765C3.32292 0.558833 1.69042 0 0 0C0 0 0 12.5 0 12.5L18.75 18.75C18.75 18.75 18.75 17.5348 18.75 17.5348C18.75 10.8731 18.75 7.54225 17.9635 6.42169C17.1771 5.30113 14.0452 4.22908 7.78146 2.08498C7.78146 2.08498 6.58813 1.6765 6.58813 1.6765Z" fill="#20010A" transform="translate(25 4.167)" />
                      </g>
                    </svg>
                    {/* Water drop icon */}
                    <div className="water-drop absolute -bottom-2 -right-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.5 2 6 5.5 6 9c0 1.5.5 3 1.5 4.5L12 22l4.5-8.5C17.5 12 18 10.5 18 9c0-3.5-2.5-7-6-7z" fill="hsl(var(--primary))" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-title font-heading text-xl font-medium text-foreground relative">
                    Reactive Monitoring
                  </h3>
                </div>
                <p className="text-sm sm:text-base body-text text-foreground">
                  Current systems only detect contamination after it has already affected communities, 
                  leading to preventable health crises.
                </p>
              </div>

              <div className="pain-point-card relative p-6 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 21C26.2091 21 28 19.2091 28 17C28 14.7909 26.2091 13 24 13C21.7909 13 20 14.7909 20 17C20 19.2091 21.7909 21 24 21Z" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M36 17C38.2091 17 40 15.2091 40 13C40 10.7909 38.2091 9 36 9C33.7909 9 32 10.7909 32 13C32 15.2091 33.7909 17 36 17Z" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 21V41" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M36 17V37L24 41" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17V37L24 41" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* Water drop icon */}
                    <div className="water-drop absolute -bottom-2 -right-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.5 2 6 5.5 6 9c0 1.5.5 3 1.5 4.5L12 22l4.5-8.5C17.5 12 18 10.5 18 9c0-3.5-2.5-7-6-7z" fill="hsl(var(--primary))" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-title font-heading text-xl font-medium text-foreground relative">
                    Limited Resources
                  </h3>
                </div>
                <p className="text-sm sm:text-base body-text text-foreground">
                  Health officials lack the tools and data needed to make proactive decisions 
                  about water safety across vast regions.
                </p>
              </div>

              <div className="pain-point-card md:col-span-2 relative p-6 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 relative">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M40 19C40 32 24 42 24 42C24 42 8 32 8 19C8 11.268 15.268 5 24 5C32.732 5 40 11.268 40 19Z" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* Water drop icon */}
                    <div className="water-drop absolute -bottom-2 -right-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.5 2 6 5.5 6 9c0 1.5.5 3 1.5 4.5L12 22l4.5-8.5C17.5 12 18 10.5 18 9c0-3.5-2.5-7-6-7z" fill="hsl(var(--primary))" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-title font-heading text-xl font-medium text-foreground relative">
                    Geographic Challenges
                  </h3>
                </div>
                <p className="text-sm sm:text-base body-text text-foreground">
                  Remote communities often lack access to real-time water quality monitoring, 
                  putting vulnerable populations at greater risk.
                </p>
              </div>
            </div>
          </div>
         </div>
       </div>
       
       {/* Water Ripple Overlay in Whitespace */}
       <div 
         ref={rippleRef}
         className="absolute inset-0 pointer-events-none overflow-hidden"
       >
         {/* Main gradient overlay using your color scheme */}
         <div className="absolute bottom-0 left-0 right-0 lg:h-64 h-32 bg-gradient-to-t from-gamboge-100/20 via-gamboge-50/10 to-transparent">
           {/* Animated ripple waves */}
           <div className="absolute inset-0 opacity-30">
             <div className="ripple-wave absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gamboge-200/30 via-transparent to-transparent"></div>
             <div className="ripple-wave absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gamboge-300/20 via-transparent to-transparent"></div>
             <div className="ripple-wave absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gamboge-100/25 via-transparent to-transparent"></div>
           </div>
         </div>
         
         {/* Additional shimmer effect */}
         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gamboge-50/15 via-transparent to-transparent">
           <div className="ripple-wave absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gamboge-100/20 via-transparent to-transparent"></div>
         </div>
       </div>
     </section>
   );
 }
