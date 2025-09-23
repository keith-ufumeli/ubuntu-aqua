'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  useEffect(() => {
    // Animate stats on scroll
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      {
        textContent: (index: number, target: HTMLElement) => {
          const finalValue = target.getAttribute('data-target');
          return finalValue;
        },
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className="stats-section py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="stat-number text-4xl font-bold mb-2" data-target="2.1M">0</div>
            <div className="text-primary-foreground/80">People at Risk</div>
          </div>
          <div>
            <div className="stat-number text-4xl font-bold mb-2" data-target="95%">0</div>
            <div className="text-primary-foreground/80">Prediction Accuracy</div>
          </div>
          <div>
            <div className="stat-number text-4xl font-bold mb-2" data-target="72h">0</div>
            <div className="text-primary-foreground/80">Early Warning</div>
          </div>
          <div>
            <div className="stat-number text-4xl font-bold mb-2" data-target="150+">0</div>
            <div className="text-primary-foreground/80">Communities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
