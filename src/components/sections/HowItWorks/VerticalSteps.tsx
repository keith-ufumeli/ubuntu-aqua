'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, TrendingUp, Shield, Check } from 'lucide-react';

interface VerticalStepsProps {
  stepsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const processSteps = [
  {
    number: 1,
    title: 'Data Collection',
    description: 'Gather environmental data, water quality metrics, and historical patterns from multiple sources across Zimbabwe.',
    icon: Globe
  },
  {
    number: 2,
    title: 'AI Analysis',
    description: 'Advanced machine learning models analyze patterns and identify early warning signals for potential contamination events.',
    icon: Zap
  },
  {
    number: 3,
    title: 'Actionable Insights',
    description: 'Generate clear, actionable recommendations for health officials and community leaders to prevent contamination.',
    icon: TrendingUp
  },
  {
    number: 4,
    title: 'Preventative Action',
    description: 'Enable proactive measures to protect communities before water contamination becomes a public health crisis.',
    icon: Shield
  }
];

const features = [
  { text: 'Real-time monitoring in 50+ locations', color: 'bg-orange-100 text-orange-800' },
  { text: 'AI-powered predictive analytics', color: 'bg-blue-100 text-blue-800' },
  { text: 'Automated alert systems', color: 'bg-purple-100 text-purple-800' },
  { text: 'Community health protection', color: 'bg-pink-100 text-pink-800' }
];

const VerticalSteps = forwardRef<HTMLDivElement, VerticalStepsProps>(
  ({ stepsRef }, ref) => {
    return (
      <div ref={ref} className="pt-20">
        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            
            return (
              <motion.div
                key={step.number}
                ref={el => { stepsRef.current[index] = el; }}
                className="relative flex items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#E49B0F] relative z-10">
                    <span className="text-2xl font-bold text-[#20000C]">{step.number}</span>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {!isLast && (
                    <div className="w-0.5 h-12 bg-gray-300 mt-4 relative">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-300"></div>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[#E49B0F]" />
                    <h3 className="text-2xl font-bold text-[#20000C] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Features for the last step */}
                  {isLast && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                      {features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${feature.color}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.4, delay: 0.5 + featureIndex * 0.1 }
                          }}
                          viewport={{ once: true }}
                        >
                          <Check className="w-4 h-4" />
                          {feature.text}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }
);

VerticalSteps.displayName = 'VerticalSteps';

export default VerticalSteps;
