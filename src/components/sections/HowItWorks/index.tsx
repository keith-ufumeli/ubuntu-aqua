'use client';

import { useHowItWorksAnimation } from './useHowItWorksAnimation';
import LeftVisual from './LeftVisual';
import VerticalSteps from './VerticalSteps';

export default function HowItWorks() {
  const {
    sectionRef,
    leftVisualRef,
    rightStepsRef,
    barsRef,
    stepsRef,
    headingRef,
    subtextRef
  } = useHowItWorksAnimation();

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="pb-20 bg-[#FAEBD7] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Grid Layout with Enhanced Spacing */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
          {/* Left Column - Visual & Text */}
          <div className="relative">
            {/* Visual flow indicator */}
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-1000 delay-1000 visual-flow-indicator" />
            <LeftVisual
              ref={leftVisualRef}
              barsRef={barsRef}
              headingRef={headingRef as React.RefObject<HTMLHeadingElement>}
              subtextRef={subtextRef as React.RefObject<HTMLParagraphElement>}
            />
          </div>

          {/* Right Column - Vertical Steps */}
          <div className="relative">
            <VerticalSteps
              ref={rightStepsRef}
              stepsRef={stepsRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
