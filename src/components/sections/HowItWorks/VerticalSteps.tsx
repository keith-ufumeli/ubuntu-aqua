"use client";

import { forwardRef, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Globe, Zap, TrendingUp, Shield } from "lucide-react";

interface VerticalStepsProps {
  stepsRef: React.RefObject<(HTMLDivElement | null)[]>;
}

const processSteps = [
  {
    number: 1,
    title: "Data Collection",
    description:
      "Gather environmental data, water quality metrics, and historical patterns from multiple sources across Zimbabwe.",
    icon: Globe,
  },
  {
    number: 2,
    title: "AI Analysis",
    description:
      "Advanced machine learning models analyze patterns and identify early warning signals for potential contamination events.",
    icon: Zap,
  },
  {
    number: 3,
    title: "Actionable Insights",
    description:
      "Generate clear, actionable recommendations for health officials and community leaders to prevent contamination.",
    icon: TrendingUp,
  },
  {
    number: 4,
    title: "Preventative Action",
    description:
      "Enable proactive measures to protect communities before water contamination becomes a public health crisis.",
    icon: Shield,
  },
];

const VerticalSteps = forwardRef<HTMLDivElement, VerticalStepsProps>(
  ({ stepsRef }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Individual step scroll triggers
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const step4Ref = useRef<HTMLDivElement>(null);
    
    const step1InView = useInView(step1Ref, { once: true, margin: "-20% 0px -20% 0px" });
    const step2InView = useInView(step2Ref, { once: true, margin: "-20% 0px -20% 0px" });
    const step3InView = useInView(step3Ref, { once: true, margin: "-20% 0px -20% 0px" });
    const step4InView = useInView(step4Ref, { once: true, margin: "-20% 0px -20% 0px" });
    const stepInView = [step1InView, step2InView, step3InView, step4InView];
    const stepRefsArray = [step1Ref, step2Ref, step3Ref, step4Ref];

    // Enhanced animation variants with scroll-triggered reveals
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      },
    };

    const stepVariants: Variants = {
      hidden: {
        opacity: 0,
        x: 100,
        y: 0,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    };

    const numberCircleVariants: Variants = {
      hidden: {
        scale: 0,
        rotate: -180,
        opacity: 0,
      },
      visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
        },
      },
      hover: {
        scale: 1.15,
        rotate: 8,
        boxShadow: "0 10px 25px rgba(228, 155, 15, 0.3)",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    };

    const iconVariants: Variants = {
      hidden: {
        scale: 0,
        rotate: -90,
        opacity: 0,
      },
      visible: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.5,
        },
      },
      hover: {
        scale: 1.25,
        rotate: 12,
        color: "#E49B0F",
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
      pulse: {
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    };

    const contentVariants: Variants = {
      hidden: {
        opacity: 0,
        x: -30,
        y: 10,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.4,
        },
      },
    };

    const arrowVariants: Variants = {
      hidden: {
        scaleY: 0,
        opacity: 0,
        y: -10,
      },
      visible: {
        scaleY: 1,
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.7,
        },
      },
    };

    return (
      <div ref={ref} className="pt-8">
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#E49B0F] leading-tight mb-4"
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

        <motion.div
          ref={containerRef}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            const isStepInView = stepInView[index];

            return (
              <motion.div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[index] = el;
                  if (stepRefsArray[index]) {
                    stepRefsArray[index].current = el;
                  }
                }}
                className="relative flex items-start group cursor-pointer step-container"
                variants={stepVariants}
                initial="hidden"
                animate={isStepInView ? "visible" : "hidden"}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                tabIndex={0}
                role="button"
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary relative z-10 group-hover:shadow-xl group-hover:shadow-primary/20"
                    variants={numberCircleVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="text-2xl font-bold font-heading licorice-text"
                      whileHover={{
                        color: "#E49B0F",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>

                  {/* Connecting Arrow */}
                  {!isLast && (
                    <motion.div
                      className="w-0.5 h-12 bg-primary/30 mt-4 relative origin-top"
                      variants={arrowVariants}
                    >
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/30"
                        whileHover={{
                          borderTopColor: "rgba(228, 155, 15, 0.8)",
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Step Content */}
                <motion.div className="flex-1 pt-2" variants={contentVariants}>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div variants={iconVariants} whileHover="hover">
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.h3
                      className="heading-tertiary licorice-text"
                      whileHover={{
                        color: "#E49B0F",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      {step.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    className="text-lg body-text licorice-text/80 leading-relaxed mb-4"
                    whileHover={{
                      color: "rgba(32, 0, 12, 1)",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Subtle progress indicator */}
                  <motion.div
                    className="h-1 bg-primary/10 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
);

VerticalSteps.displayName = "VerticalSteps";

export default VerticalSteps;
