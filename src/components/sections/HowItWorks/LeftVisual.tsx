'use client';

import { forwardRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LeftVisualProps {
  barsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  headingRef: React.RefObject<HTMLHeadingElement>;
  subtextRef: React.RefObject<HTMLParagraphElement>;
}

const LeftVisual = forwardRef<HTMLDivElement, LeftVisualProps>(
  ({ barsRef, headingRef, subtextRef }, ref) => {
    const additionalContentRef = useRef<HTMLDivElement>(null);
    const isAdditionalContentInView = useInView(additionalContentRef, { 
      once: true, 
      margin: "-10% 0px -10% 0px" 
    });

    return (
      <div ref={ref} className="relative">
        {/* Fluid Layout - Bars extending from top */}
        <div className="relative h-[800px] mb-12">
          {/* Large Bars - Starting from top, extending down */}
          <div className="absolute top-[-35px] left-0 w-full h-full flex items-start justify-start gap-6 p-8">
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

        {/* Additional Content - Fades in after all steps are revealed */}
        <div ref={additionalContentRef} className="space-y-6 relative z-10 pl-8 mt-8">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isAdditionalContentInView ? { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
            } : { opacity: 0, y: 30 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-[#E49B0F] mb-3">
              Safeguarding Communities
            </h3>
            <p className="text-lg licorice-text body-text leading-relaxed max-w-md">
              By combining advanced AI with local environmental data, we&apos;re creating a 
              sustainable future where clean water is accessible to all Zimbabweans.
            </p>
          </motion.div>
          
          <motion.div
            ref={subtextRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isAdditionalContentInView ? { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
            } : { opacity: 0, y: 30 }}
          >
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-base licorice-text body-text leading-relaxed">
                <strong>Join us</strong> in building a healthier Zimbabwe through 
                technology-driven water quality protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);

LeftVisual.displayName = 'LeftVisual';

export default LeftVisual;
