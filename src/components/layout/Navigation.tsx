'use client';

import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for dynamic positioning
  const y = useTransform(scrollY, [0, 100], [0, -20]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > 50);
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      style={{ y, opacity, scale }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="relative">
        {/* Pill-shaped container */}
        <motion.div 
          className={`
            flex items-center justify-center px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300
            ${isScrolled 
              ? 'bg-white/90 border-white/30 shadow-lg' 
              : 'bg-white/70 border-white/20 shadow-md'
            }
          `}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Droplets className="h-6 w-6 text-primary" />
              <motion.span 
                className={`font-heading text-lg font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-foreground'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Ubuntu Aqua
              </motion.span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a 
                href="#solution" 
                className={`font-heading transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-3 py-1 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-foreground/90 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solution
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className={`font-heading transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-3 py-1 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-foreground/90 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                How It Works
              </motion.a>
              <motion.a 
                href="#impact" 
                className={`font-heading transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-3 py-1 ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-foreground/90 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Impact
              </motion.a>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm" 
                  className={`
                    font-heading transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${isScrolled 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-primary hover:bg-white/30 text-white border border-white/30'
                    }
                  `}
                >
                  Request Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`w-5 h-5 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
}
