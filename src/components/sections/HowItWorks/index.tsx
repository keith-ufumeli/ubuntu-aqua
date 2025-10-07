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
        {/* 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Visual & Text */}
          <LeftVisual
            ref={leftVisualRef}
            barsRef={barsRef}
            headingRef={headingRef as React.RefObject<HTMLHeadingElement>}
            subtextRef={subtextRef as React.RefObject<HTMLParagraphElement>}
          />

          {/* Right Column - Vertical Steps */}
          <VerticalSteps
            ref={rightStepsRef}
            stepsRef={stepsRef}
          />
        </div>
      </div>
    </section>
  );
}
