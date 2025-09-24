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

  useEffect(() => {
    if (!imageRef.current) return;

    // Create parallax effect for the image
    gsap.to(imageRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Image and Quote */}
        <div className="relative lg:h-[900px] h-[50vh] overflow-hidden">
          <div 
            ref={imageRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
          >
            <Image
              src="/images/water-flowing-from-a-tap.jpg"
              alt="Water crisis in Zimbabwe"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-16 left-12 bg-[#2B2B2B] bg-opacity-80 p-8 max-w-[294px] rounded-lg">
            <div className="relative">
              <div className="absolute -top-8 -left-4">
                <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5114 4.38933C12.7419 4.38933 0 14.0012 0 23.8247V45.6107H19.7715V23.8247C19.7715 22.2845 13.2139 22.2845 13.2139 13.1741C13.2139 10.8023 17.9183 9.13115 23.5114 4.38933Z" fill="#FF9F1C"/>
                  <path d="M50 4.38933C39.2305 4.38933 26.4886 14.0012 26.4886 23.8247V45.6107H46.2601V23.8247C46.2601 22.2845 39.7025 22.2845 39.7025 13.1741C39.7025 10.8023 44.4069 9.13115 50 4.38933Z" fill="#FF9F1C"/>
                </svg>
              </div>
              <p className="text-base sm:text-lg body-text text-white">
                70% of rural Zimbabweans are at risk of waterborne diseases
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="py-20 px-8 lg:px-16">
          <div className="max-w-[571px] space-y-16">
            {/* First Row - Heading and Description */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.25rem] font-medium text-foreground leading-tight mb-6">
                <span className="text-foreground">The Water Crisis in </span>
                <span className="text-primary">Zimbabwe</span>
              </h2>
              <p className="text-base sm:text-lg body-text text-foreground">
                Every day, millions of Zimbabweans face the risk of waterborne 
                diseases due to contaminated drinking water. Current monitoring 
                systems are reactive, not predictive.
              </p>
            </div>

            {/* Second Row - Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4L4 40H44L24 4Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 34H24.02" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 18V26" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    Reactive Monitoring
                  </h3>
                </div>
                <p className="text-sm sm:text-base body-text text-foreground">
                  Current systems only detect contamination after it has already affected communities, 
                  leading to preventable health crises.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 21C26.2091 21 28 19.2091 28 17C28 14.7909 26.2091 13 24 13C21.7909 13 20 14.7909 20 17C20 19.2091 21.7909 21 24 21Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M36 17C38.2091 17 40 15.2091 40 13C40 10.7909 38.2091 9 36 9C33.7909 9 32 10.7909 32 13C32 15.2091 33.7909 17 36 17Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 21V41" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M36 17V37L24 41" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17V37L24 41" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    Limited Resources
                  </h3>
                </div>
                <p className="text-sm sm:text-base body-text text-foreground">
                  Health officials lack the tools and data needed to make proactive decisions 
                  about water safety across vast regions.
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M40 19C40 32 24 42 24 42C24 42 8 32 8 19C8 11.268 15.268 5 24 5C32.732 5 40 11.268 40 19Z" stroke="#FF9F1C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground">
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
    </section>
  );
}
