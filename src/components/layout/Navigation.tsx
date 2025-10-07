'use client';

import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Enhanced transform values for dynamic positioning and styling
  const y = useTransform(scrollY, [0, 100], [0, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const blur = useTransform(scrollY, [0, 100], ['blur-xl', 'blur-2xl']);
  const bgOpacity = useTransform(scrollY, [0, 100], [0.4, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > 50);
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.nav 
        className="fixed top-6 left-0 right-0 z-50 px-6"
        style={{ y, scale }}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo positioned on the left */}
          <motion.div 
            className="logo-chip"
            style={{ 
              backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 0.9 : 0.8})`,
              backdropFilter: 'blur(16px)'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Droplets className="h-6 w-6 text-primary" />
              <motion.span 
                className="font-heading text-lg font-bold text-foreground drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Ubuntu Aqua
              </motion.span>
            </div>
          </motion.div>

          {/* Navigation Links centered horizontally */}
          <motion.div 
            className="glass px-8 py-4 rounded-full border transition-all duration-300"
            style={{ 
              backdropFilter: blur,
              backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#solution" 
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solution
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                How It Works
              </motion.a>
              <motion.a 
                href="#impact" 
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Impact
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu FAB */}
      <motion.button
        className={`nav-mobile-fab ${isMobileMenuOpen ? 'bg-secondary' : 'bg-primary'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle mobile menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isMobileMenuOpen 
              ? "M6 18L18 6M6 6l12 12" 
              : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </motion.button>

      {/* Mobile Menu Panel */}
      <motion.div
        className={`fixed inset-x-4 bottom-24 md:hidden z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="glass rounded-2xl p-6 space-y-4">
          <a href="#solution" className="block text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors">
            Solution
          </a>
          <a href="#how-it-works" className="block text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#impact" className="block text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors">
            Impact
          </a>
          <Button className="cta-button w-full text-white shadow-lg">
            Request Demo
          </Button>
        </div>
      </motion.div>
    </>
  );
}
