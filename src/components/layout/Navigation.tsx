'use client';

import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-aqua-primary" />
            <motion.span 
              className="brand-text text-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ubuntu Aqua
            </motion.span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solution" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">Solution</a>
            <a href="#how-it-works" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">How It Works</a>
            <a href="#impact" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">Impact</a>
            <Button className="bg-aqua-primary hover:bg-aqua-primary/90 text-white focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
