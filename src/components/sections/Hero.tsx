'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin();
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero elements
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen "
      aria-labelledby="hero-heading"
    >
      {/* Image Section - Upper portion */}
      <div 
        className="relative h-[50vh] md:h-[66vh] rounded-b-[30px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/victoria-falls-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Text Section - Lower portion */}
      <div className="relative bg-background min-h-[50vh] md:h-[34vh] flex items-start md:items-center py-8 md:pt-6 lg:pt-1 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 h-full">
            {/* Left side - Main heading */}
            <div className="space-y-4 text-center lg:text-left">
              <motion.h1 
                id="hero-heading"
                className="hero-title font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-foreground leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Smarter Water<br />
                Safety for{' '}
                <span className="text-primary">Zimbabwe</span>
              </motion.h1>
            </div>

            {/* Right side - Description and Scroll Button */}
            <div className="flex flex-col justify-between space-y-8 md:space-y-6 lg:space-y-10">
              <motion.p 
                className="hero-subtitle text-base sm:text-lg body-text text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Our AI <span className="text-primary">predicts</span> water safety risks before they become violations. This helps 
                health officials, NGOs, and communities take action early — protecting lives 
                and building trust in clean water.
              </motion.p>

              {/* Scroll Button - Bottom right of this column */}
              <motion.div 
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button 
                  className="w-14 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  onClick={() => {
                    const nextSection = document.getElementById('stats-section');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Scroll to next section"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: 0
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-secondary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ 
                      y: [0, 2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.2
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
