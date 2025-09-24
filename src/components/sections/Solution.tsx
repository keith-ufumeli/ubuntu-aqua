'use client';

import { CheckCircle, Database, Brain, AlertTriangle, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const solutionSteps = [
  {
    id: 1,
    title: "Data Collection",
    description: "Collect environmental and water quality data from multiple sources",
    icon: Database
  },
  {
    id: 2,
    title: "AI Analysis",
    description: "Analyze patterns using advanced machine learning models",
    icon: Brain
  },
  {
    id: 3,
    title: "Risk Prediction",
    description: "Generate risk predictions and actionable recommendations",
    icon: AlertTriangle
  },
  {
    id: 4,
    title: "Stakeholder Delivery",
    description: "Deliver insights to stakeholders for informed decision making",
    icon: Users
  }
];

export default function Solution() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for the container
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Initial animation for the first step
      if (stepRefs.current[0]) {
        gsap.fromTo(stepRefs.current[0],
          { scale: 0.6, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
        );
      }

      // Set initial positions for other steps
      stepRefs.current.forEach((ref, index) => {
        if (index > 0 && ref) {
          gsap.set(ref, { 
            scale: 0.6, 
            opacity: 0, 
            xPercent: 100,
            display: 'none'
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate step transitions
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          if (index === activeStep) {
            // Show and animate in the active step
            gsap.set(ref, { display: 'flex' });
            timeline.fromTo(ref,
              { scale: 0.6, opacity: 0, xPercent: 100 },
              { 
                scale: 1, 
                opacity: 1, 
                xPercent: 0, 
                duration: 0.7, 
                ease: "back.out(1.7)",
              }
            );
          } else {
            // Animate out and hide the inactive step
            if (window.getComputedStyle(ref).display !== 'none') {
              timeline.to(ref, {
                scale: 0.4,
                opacity: 0,
                xPercent: -100,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                  gsap.set(ref, { display: 'none' });
                }
              }, '<');
            }
          }
        }
      });
    });

    return () => ctx.revert();
  }, [activeStep]);

  // Add hover animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          ref.addEventListener('mouseenter', () => {
            if (window.getComputedStyle(ref).display !== 'none') {
              gsap.to(ref, {
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(244, 158, 11, 0.2)",
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });

          ref.addEventListener('mouseleave', () => {
            if (window.getComputedStyle(ref).display !== 'none') {
              gsap.to(ref, {
                scale: 1,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  return (
    <section id="solution" className="py-20 bg-[#20010A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Column */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={containerRef}>
            <h2 className="heading-primary mb-6 text-primary">
              Our AI Solution
            </h2>
            <p className="body-text mb-20 text-primary-foreground">
              Ubuntu Aqua uses advanced machine learning to analyze environmental data, 
              water quality indicators, and historical patterns to predict potential 
              violations before they occur.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="heading-tertiary mb-2 text-primary">Early Warning System</h3>
                  <p className="body-text text-primary-foreground">Get alerts up to 72 hours before contamination events</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="heading-tertiary mb-2 text-primary">Data-Driven Insights</h3>
                  <p className="body-text text-primary-foreground">Make informed decisions with comprehensive risk analysis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="heading-tertiary mb-2 text-primary">Scalable Technology</h3>
                  <p className="body-text text-primary-foreground">Works across urban and rural communities throughout Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-2xl p-8 min-h-[500px] flex flex-col">
              <h3 className="heading-secondary text-primary mb-8">
                How Our AI Works
              </h3>
              
              <div className="relative flex-1 overflow-hidden">
                {solutionSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={step.id}
                      ref={setStepRef(index)}
                      onClick={() => handleStepClick(index)}
                      className={`absolute inset-0 flex flex-col items-center justify-center p-8 rounded-xl cursor-pointer ${
                        index === activeStep 
                          ? 'bg-primary' 
                          : 'bg-transparent'
                      }`}
                    >
                      <div 
                        className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                          index === activeStep 
                            ? 'bg-card text-primary' 
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <div className="text-center max-w-md">
                        <h4 
                          className={`heading-tertiary mb-4 ${
                            index === activeStep ? 'text-primary-foreground' : 'text-primary'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p 
                          className={`text-lg leading-relaxed body-text ${
                            index === activeStep ? 'text-primary-foreground' : 'text-card-foreground'
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => handleStepClick((activeStep - 1 + solutionSteps.length) % solutionSteps.length)}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Previous step"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Progress indicators */}
                <div className="flex justify-center space-x-3">
                  {solutionSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 bg-primary ${
                        index === activeStep ? 'scale-125 opacity-100' : 'scale-100 opacity-40'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                      title={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => handleStepClick((activeStep + 1) % solutionSteps.length)}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Next step"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
