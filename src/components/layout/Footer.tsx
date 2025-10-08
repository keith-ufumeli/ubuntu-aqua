'use client';

import { Button } from '@/components/ui/button';
import { Droplets, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Creative Background with Elegant Shapes */}
      <div className="absolute inset-0 licorice-background">
        {/* Decorative shapes for visual interest */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-1/4 w-60 h-60 bg-primary/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-32 bg-gradient-to-r from-primary/10 to-transparent rounded-t-full"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <Droplets className="h-10 w-10 text-primary" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"></div>
              </div>
              <span className="brand-text text-3xl text-white">
                Ubuntu Aqua
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-sm font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Revolutionizing water safety across Zimbabwe through AI-powered predictions, 
              early warning systems, and data-driven community protection.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-body">contact@ubuntuaqua.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-body">+263 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-body">Harare, Zimbabwe</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.h3 
              className="heading-tertiary text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-3">
                <a href="#solution" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Our Solution
                  </span>
                </a>
                <a href="#impact" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Impact
                  </span>
                </a>
                <a href="#how-it-works" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    How It Works
                  </span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Research
                  </span>
                </a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Case Studies
                  </span>
                </a>
                <a href="#" className="block text-gray-300 hover:text-primary transition-colors font-body group">
                  <span className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Support
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Partners & Newsletter */}
          <div className="lg:col-span-1">
            <motion.h3 
              className="heading-tertiary text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trusted Partners
            </motion.h3>
            <motion.div 
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-gray-300 font-body">Ministry of Health Zimbabwe</div>
              <div className="text-gray-300 font-body">UNICEF Zimbabwe</div>
              <div className="text-gray-300 font-body">World Health Organization</div>
              <div className="text-gray-300 font-body">Local Water Authorities</div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-heading font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm font-body mb-4">
                Get the latest insights on water safety innovations.
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary font-body"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 font-body">
              <span>&copy; 2025 Ubuntu Aqua. All rights reserved.</span>
              
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-body">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-body">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-body">Accessibility</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
