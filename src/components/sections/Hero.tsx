'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

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
      {/* Image Section - Upper 2/3 */}
      <div 
        className="relative h-[70vh] rounded-b-[30px] overflow-hidden"
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

      {/* Text Section - Lower 1/3 */}
      <div className="relative bg-background h-[30vh] flex items-center pb-16">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left side - Main heading */}
            <div className="space-y-4">
              <motion.h1 
                id="hero-heading"
                className="hero-title font-heading text-5xl lg:text-[3.25rem] font-medium text-foreground leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                AI-Powered Water<br />
                Safety for{' '}
                <span className="text-primary">Zimbabwe</span>
              </motion.h1>
            </div>

            {/* Right side - Description and Scroll Button */}
            <div className="space-y-6 flex flex-col justify-between h-full">
              <motion.p 
                className="hero-subtitle text-lg body-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Predict and prevent drinking water violations before they happen. 
                Our AI model helps health officials, NGOs, and communities make 
                data-driven decisions to protect public health.
              </motion.p>

              {/* Scroll Button - Bottom right of this column */}
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <button 
                  className="w-14 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                  onClick={() => {
                    const nextSection = document.getElementById('stats-section');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Scroll to next section"
                >
                  <svg 
                    className="w-6 h-6 text-secondary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
