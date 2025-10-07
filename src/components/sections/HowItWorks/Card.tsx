'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card as UICard, CardContent } from '@/components/ui/card';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function Card({ icon: Icon, title, description, index }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileHover={{ 
        scale: 1.05,
        y: -12,
        transition: { 
          duration: 0.4, 
          ease: 'easeOut',
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }}
      className="group cursor-pointer"
    >
      <UICard className="h-full bg-[#20000C] border-0 hover:shadow-xl transition-all duration-300 rounded-2xl shadow-lg overflow-hidden relative">
        <CardContent className="p-6 h-full flex flex-col justify-center relative">
          {/* Step number - positioned at top right */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E49B0F] flex items-center justify-center">
            <span className="text-sm font-bold text-white">{index + 1}</span>
          </div>
          
          {/* Icon */}
          <div className="w-16 h-16 bg-[#E49B0F] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon className="h-8 w-8" />
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-3">
              {title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </UICard>
    </motion.div>
  );
}
