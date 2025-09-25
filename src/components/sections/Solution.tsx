'use client';

import { CheckCircle, Database, Brain, AlertTriangle, Users, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { div } from 'framer-motion/m';

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
    icon: Shield
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
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate each step
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          // Set initial state
          gsap.set(ref, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          });

          // Content elements
          const content = ref.querySelector('.flex.flex-col.space-y-4');
          const icon = ref.querySelector('.relative.w-24');
          const line = ref.querySelector('.absolute.top-1/2.w-16');

          // Create timeline for each step
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ref,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse"
            }
          });

          // Animate step
          tl.fromTo(ref,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo(content,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(icon,
            { opacity: 0, scale: 0.8, rotate: -180 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" },
            "-=0.6"
          )
          .fromTo(line,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.4, ease: "power1.inOut" },
            "-=0.4"
          );

          // Add hover effect
          ref.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          ref.addEventListener("mouseleave", () => {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Animate benefits section
      const benefits = document.querySelectorAll('.flex.items-start.space-x-4');
      benefits.forEach((benefit, index) => {
        gsap.fromTo(benefit,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: benefit,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // 3D Carousel transitions
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const nextIndex = (index + 1) % solutionSteps.length;
          const prevIndex = (index - 1 + solutionSteps.length) % solutionSteps.length;
          const isActive = index === activeStep;
          const isNext = nextIndex === activeStep;
          const isPrev = prevIndex === activeStep;

          if (isActive) {
            // Active card animation
            timeline.to(ref, {
              xPercent: 0,
              scale: 1,
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
              transformOrigin: "50% 50% -200px"
            });

            // Floating animation
            gsap.to(ref, {
              y: -8,
              duration: 1.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: 0.4
            });

          } else if (isNext) {
            // Next card peek animation
            timeline.to(ref, {
              xPercent: 45,
              scale: 0.85,
              opacity: 0.7,
              rotationY: 15,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              transformOrigin: "50% 50% -200px"
            }, "<0.1");
          } else {
            // Hide other cards
            timeline.to(ref, {
              xPercent: 100,
              scale: 0.7,
              opacity: 0,
              rotationY: 30,
              duration: 0.5,
              ease: "power2.inOut",
              transformOrigin: "50% 50% -200px"
            }, "<");
          }
        }
      });
    });

    return () => ctx.revert();
  }, [activeStep]);

  // Hover effects for next card only
  useEffect(() => {
    const ctx = gsap.context(() => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const nextIndex = (index + 1) % solutionSteps.length;
          const isNext = nextIndex === activeStep;

          if (isNext) {
            // Next card hover effect
            ref.addEventListener('mouseenter', () => {
              gsap.to(ref, {
                xPercent: 40,
                scale: 0.88,
                rotationY: 10,
                duration: 0.4,
                ease: "power2.out"
              });
            });

            ref.addEventListener('mouseleave', () => {
              gsap.to(ref, {
                xPercent: 45,
                scale: 0.85,
                rotationY: 15,
                duration: 0.4,
                ease: "power2.out"
              });
            });

            // Subtle attention animation
            const nudgeTimeline = gsap.timeline({ 
              repeat: -1, 
              repeatDelay: 4
            });
            nudgeTimeline.to(ref, {
              xPercent: 43,
              duration: 0.8,
              ease: "power1.inOut"
            }).to(ref, {
              xPercent: 45,
              duration: 0.8,
              ease: "power1.inOut"
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
    <section id="solution" className="py-20 licorice-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={containerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Our AI Solution
          </h2>
          <p className="text-xl antique-white-text max-w-3xl mx-auto body-text">
            Ubuntu Aqua uses advanced machine learning to analyze environmental data, 
            water quality indicators, and historical patterns to predict potential 
            violations before they occur.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20" />

          {/* Steps */}
          {solutionSteps.map((step, index) => (
            <div
              key={step.id}
              ref={setStepRef(index)}
              className={`
                relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 last:mb-0
                ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:grid-flow-dense'}
              `}
            >
              {/* Content */}
              <div className={`
                flex flex-col items-center lg:items-${index % 2 === 0 ? 'end' : 'start'}
                ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}
              `}>
                <div className="flex flex-col space-y-4">
                  <span className="text-sm font-bold font-heading tracking-wider text-primary/60 uppercase">
                    Step {index + 1}
                  </span>
                  <h3 className="text-3xl font-bold text-primary font-heading">
                    {step.title}
                  </h3>
                  <p className="text-lg antique-white-text body-text max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className={`
                flex items-center justify-center
                ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}
              `}>
                <div className="relative">
                  {/* Circle Background */}
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl" />
                  {/* Icon Circle */}
                  <div className="relative w-24 h-24 rounded-full licorice-background flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  {/* Connector Line */}
                  <div className={`
                    absolute top-1/2 w-16 h-px bg-primary/20
                    ${index % 2 === 0 ? 'right-full' : 'left-full'}
                  `} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 bg-primary/5 p-6 rounded-xl">
              <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2 gamboge-text">Early Warning System</h3>
                <p className="antique-white-text body-text">Get alerts up to 72 hours before contamination events</p>
              </div>
            </div>
          
          <div className="flex items-start space-x-4 bg-primary/5 p-6 rounded-xl">
            <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h3 className="text-xl font-bold mb-2 gamboge-text">Data-Driven Insights</h3>
              <p className="antique-white-text body-text">Make informed decisions with comprehensive risk analysis</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-primary/5 p-6 rounded-xl">
            <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h3 className="text-xl font-bold mb-2 gamboge-text">Scalable Technology</h3>
              <p className="antique-white-text body-text">Works across urban and rural communities throughout Zimbabwe</p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
