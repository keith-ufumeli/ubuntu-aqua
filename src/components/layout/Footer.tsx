'use client';

import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="h-8 w-8 text-primary" />
              <motion.span 
                className="brand-text text-2xl text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Ubuntu Aqua
              </motion.span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-body">
              AI-powered water safety predictions for Zimbabwe. 
              Protecting communities through early warning systems and data-driven insights.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 font-body">
                Contact Us
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700 font-body">
                Privacy Policy
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 font-body">
              <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-gray-300 font-body">
              <li><a href="#" className="hover:text-white transition-colors">Ministry of Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UNICEF Zimbabwe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WHO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Local NGOs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="font-body">&copy; 2024 Ubuntu Aqua. All rights reserved. Built with accessibility in mind.</p>
        </div>
      </div>
    </footer>
  );
}
