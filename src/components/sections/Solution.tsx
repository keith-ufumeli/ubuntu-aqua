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

      // Animate steps on mount
      gsap.fromTo(stepRefs.current,
        { opacity: 0, x: 30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.2, 
          ease: "power2.out",
          delay: 0.3
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate step transitions
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          if (index === activeStep) {
            gsap.to(ref, {
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(244, 158, 11, 0.3)",
              duration: 0.4,
              ease: "power2.out"
            });
          } else {
            gsap.to(ref, {
              scale: 1,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              duration: 0.4,
              ease: "power2.out"
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

          <div className="relative">
            <div className="rounded-2xl p-8 bg-card">
              <h3 className="heading-secondary licorice-text mb-8">
                How Our AI Works
              </h3>
              
              <div className="space-y-4">
                {solutionSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={step.id}
                      ref={setStepRef(index)}
                      onClick={() => handleStepClick(index)}
                      className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                        index === activeStep 
                          ? 'bg-primary border-primary' 
                          : 'bg-transparent border-primary'
                      }`}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          index === activeStep 
                            ? 'bg-card text-primary' 
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 
                          className={`heading-tertiary mb-1 ${
                            index === activeStep ? 'text-primary-foreground' : 'text-primary'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p 
                          className={`text-sm leading-relaxed body-text ${
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

              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
