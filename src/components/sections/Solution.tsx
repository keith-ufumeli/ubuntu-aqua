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

      // Initial animations for steps
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          if (index === 0) {
            // Animate first step
            gsap.fromTo(ref,
              { scale: 0.6, opacity: 0, x: 50 },
              { scale: 1, opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" }
            );
          } else if (index === 1) {
            // Show preview of second step
            gsap.fromTo(ref,
              { scale: 0.8, opacity: 0, x: '100%' },
              { scale: 0.95, opacity: 1, x: '85%', duration: 0.8, delay: 0.2, ease: "power2.out" }
            );
          } else {
            // Hide other steps
            gsap.set(ref, { opacity: 0, x: '200%' });
          }
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
          const nextIndex = (index + 1) % solutionSteps.length;
          const isNext = nextIndex === activeStep;
          const isPrev = (index - 1 + solutionSteps.length) % solutionSteps.length === activeStep;

          if (index === activeStep) {
            // Animate active step
            timeline.to(ref, {
              scale: 1,
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "back.out(1.7)",
            });
          } else if (isNext) {
            // Animate preview of next step
            timeline.to(ref, {
              scale: 0.95,
              opacity: 1,
              x: '85%',
              duration: 0.7,
              ease: "power2.out",
            }, '<');
          } else if (isPrev) {
            // Animate previous step out
            timeline.to(ref, {
              scale: 0.8,
              opacity: 0,
              x: '-100%',
              duration: 0.5,
              ease: "power2.in",
            }, '<');
          } else {
            // Move other steps out of view
            timeline.set(ref, { opacity: 0, x: '200%' });
          }
        }
      });
    });

    return () => ctx.revert();
  }, [activeStep]);

  // Add hover and nudge animations for preview card
  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const nextIndex = (index + 1) % solutionSteps.length;
          const isNext = nextIndex === activeStep;

          if (isNext) {
            // Preview card hover effect
            ref.addEventListener('mouseenter', () => {
              gsap.to(ref, {
              scale: 0.92,
              x: '88%', // Slight pull towards view
              boxShadow: "0 25px 50px rgba(244, 158, 11, 0.3)",
              duration: 0.3,
              ease: "power2.out"
              });
            });

            ref.addEventListener('mouseleave', () => {
              gsap.to(ref, {
              scale: 0.90,
              x: '92%',
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                duration: 0.3,
                ease: "power2.out"
              });
            });

            // Periodic nudge animation
            const nudgeTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 });
            nudgeTimeline.to(ref, {
              x: '90%',
              duration: 0.5,
              ease: "power1.out"
            }).to(ref, {
              x: '92%',
              duration: 0.5,
              ease: "power1.in"
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, [activeStep]);

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
            <div className="relative lg:pl-12">
              <div className="relative min-h-[600px] flex flex-col">
                {/* Container with overflow control */}
                <div className="relative flex-1 overflow-hidden">
                  {/* Carousel track */}
                  <div className="absolute inset-y-0 w-full">
                    {solutionSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const nextIndex = (index + 1) % solutionSteps.length;
                      const isNext = nextIndex === activeStep;
                      
                      return (
                        <div
                          key={step.id}
                          ref={setStepRef(index)}
                          onClick={() => handleStepClick(index)}
                          className={`absolute top-1/2 -translate-y-1/2 w-full max-w-[380px] aspect-[4/3] 
                            ${index === activeStep ? 'z-20' : isNext ? 'z-10' : 'z-0'}
                            ${index === activeStep ? 'left-0' : isNext ? 'left-[92%]' : 'left-[200%]'}
                            transition-all duration-300
                          `}
                        >
                          <div 
                            className={`w-full h-full p-6 rounded-2xl shadow-lg transform transition-all duration-300
                              ${index === activeStep ? 'bg-primary scale-100' : 'bg-primary/5 scale-90 hover:scale-[0.92]'}
                              ${isNext ? 'cursor-pointer hover:shadow-2xl hover:shadow-primary/20' : ''}
                            `}
                          >
                            <div className="flex flex-col items-center justify-center h-full space-y-4">
                              <div 
                                className={`w-14 h-14 rounded-full flex items-center justify-center mb-2
                                  ${index === activeStep ? 'bg-card text-primary' : 'bg-primary text-primary-foreground'}
                                `}
                              >
                                <IconComponent className="w-7 h-7" />
                              </div>
                              <div className="text-center">
                                <h4 
                                  className={`text-lg font-semibold mb-2
                                    ${index === activeStep ? 'text-primary-foreground' : 'text-primary'}
                                  `}
                                >
                                  {step.title}
                                </h4>
                                <p 
                                  className={`text-sm leading-relaxed max-w-[280px] mx-auto
                                    ${index === activeStep ? 'text-primary-foreground' : 'text-card-foreground'}
                                  `}
                                >
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-start space-x-3 mt-8">
                  {solutionSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepClick(index)}
                      className={`h-2 rounded-full transition-all duration-300 
                        ${index === activeStep 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-primary/40 hover:bg-primary/60'
                        }`}
                      aria-label={`Go to step ${index + 1}`}
                      title={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
