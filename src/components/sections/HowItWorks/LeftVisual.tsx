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
      <div ref={ref} className="relative">
        {/* Fluid Layout - Bars extending from top */}
        <div className="relative h-[500px] mb-8">
          {/* Large Bars - Starting from top, extending down */}
          <div className="absolute top-[-35px] left-0 w-full h-full flex items-start justify-start gap-4 p-8">
            <div
              ref={el => { barsRef.current[0] = el; }}
              className="bar-large-1"
            />
            <div
              ref={el => { barsRef.current[1] = el; }}
              className="bar-large-2"
            />
            <div
              ref={el => { barsRef.current[2] = el; }}
              className="bar-large-3"
            />
          </div>
        </div>

        {/* Text Content - Aligned with bars */}
        <div className="space-y-4 relative z-10 pl-8">
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
            className="text-lg licorice-text body-text leading-relaxed max-w-md"
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
