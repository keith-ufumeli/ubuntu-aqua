'use client';

import { forwardRef } from 'react';

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
        <div className="relative h-[500px] mb-12">
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

        {/* Text Content - Aligned with bars */}
        <div className="space-y-6 relative z-10 pl-8">
          <h2
            ref={headingRef}
            className="text-4xl lg:text-5xl font-bold text-[#E49B0F] leading-tight drop-shadow-sm"
          >
            How It Works
          </h2>
          
          <p
            ref={subtextRef}
            className="text-lg licorice-text body-text leading-relaxed max-w-md"
          >
            Our AI-powered system transforms environmental data into actionable insights, 
            enabling proactive water quality protection across Zimbabwe.
          </p>
        </div>
      </div>
    );
  }
);

LeftVisual.displayName = 'LeftVisual';

export default LeftVisual;
