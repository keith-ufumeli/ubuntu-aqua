'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Zap, TrendingUp, Shield } from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  useEffect(() => {
    // Staggered card animations
    gsap.fromTo('.process-card', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section id="how-it-works" className="process-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-primary mb-6">
            How It Works
          </h2>
          <p className="text-large body-text max-w-3xl mx-auto">
            Our four-step process transforms raw data into life-saving insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="process-card text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="heading-tertiary mb-4">Data Collection</h3>
                <p className="text-gray-600 font-body">
                  Gather environmental data, water quality metrics, and historical patterns 
                  from multiple sources across Zimbabwe.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="process-card text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="heading-tertiary mb-4">AI Analysis</h3>
                <p className="text-gray-600 font-body">
                  Advanced machine learning models analyze patterns and identify 
                  early warning signals for potential contamination events.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="process-card text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="heading-tertiary mb-4">Actionable Insights</h3>
                <p className="text-gray-600 font-body">
                  Generate clear, actionable recommendations for health officials 
                  and community leaders to prevent contamination.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="process-card text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="heading-tertiary mb-4">Preventative Action</h3>
                <p className="text-gray-600 font-body">
                  Enable proactive measures to protect communities before 
                  water contamination becomes a public health crisis.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
