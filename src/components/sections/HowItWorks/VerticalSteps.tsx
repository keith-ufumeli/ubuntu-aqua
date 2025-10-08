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

    // Enhanced animation variants with delayed entry for right column
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.8, // Delayed to follow left column
        },
      },
    };

    const stepVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 50,
        x: 30,
        scale: 0.9,
        filter: "blur(2px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 20,
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
      <div ref={ref} className="pt-20">
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

            return (
              <motion.div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="relative flex items-start gap-6 group cursor-pointer step-container"
                variants={stepVariants}
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
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary relative z-10 group-hover:shadow-xl group-hover:shadow-primary/20"
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
