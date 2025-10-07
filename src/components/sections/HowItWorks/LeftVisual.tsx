'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface LeftVisualProps {
  barsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  headingRef: React.RefObject<HTMLHeadingElement>;
  subtextRef: React.RefObject<HTMLParagraphElement>;
}

const LeftVisual = forwardRef<HTMLDivElement, LeftVisualProps>(
  ({ barsRef, headingRef, subtextRef }, ref) => {
    return (
      <div ref={ref} className="relative flex flex-col justify-between">
        {/* Top Area - Animated Bars with Background Image */}
        <div className="relative h-96 mb-8">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl background-image" />
          
          {/* Animated Bars */}
          <div className="bars-container">
            <div
              ref={el => { barsRef.current[0] = el; }}
              className="bar-1"
            />
            <div
              ref={el => { barsRef.current[1] = el; }}
              className="bar-2"
            />
            <div
              ref={el => { barsRef.current[2] = el; }}
              className="bar-3"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#20000C]/20 to-transparent rounded-2xl" />
        </div>

        {/* Bottom Area - Text Content */}
        <div className="space-y-4">
          <motion.h2
            ref={headingRef}
            className="text-4xl lg:text-5xl font-bold text-[#E49B0F] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            How It Works
          </motion.h2>
          
          <motion.p
            ref={subtextRef}
            className="text-lg text-[#FAEBD7] leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
          >
            Our AI-powered system transforms environmental data into actionable insights, 
            enabling proactive water quality protection across Zimbabwe.
          </motion.p>
        </div>
      </div>
    );
  }
);

LeftVisual.displayName = 'LeftVisual';

export default LeftVisual;
