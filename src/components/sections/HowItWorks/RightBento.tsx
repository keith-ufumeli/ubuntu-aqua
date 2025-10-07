'use client';

import { forwardRef } from 'react';
import { Globe, Zap, TrendingUp, Shield } from 'lucide-react';
import Card from './Card';

interface RightBentoProps {
  cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const processSteps = [
  {
    icon: Globe,
    title: 'Data Collection',
    description: 'Gather environmental data, water quality metrics, and historical patterns from multiple sources across Zimbabwe.'
  },
  {
    icon: Zap,
    title: 'AI Analysis',
    description: 'Advanced machine learning models analyze patterns and identify early warning signals for potential contamination events.'
  },
  {
    icon: TrendingUp,
    title: 'Actionable Insights',
    description: 'Generate clear, actionable recommendations for health officials and community leaders to prevent contamination.'
  },
  {
    icon: Shield,
    title: 'Preventative Action',
    description: 'Enable proactive measures to protect communities before water contamination becomes a public health crisis.'
  }
];

const RightBento = forwardRef<HTMLDivElement, RightBentoProps>(
  ({ cardsRef }, ref) => {
    return (
      <div ref={ref} className="">
        {/* Bento Grid Layout - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 - Data Collection (Top Left) */}
          <div 
            ref={el => { cardsRef.current[0] = el; }}
            className="h-64"
          >
            <Card
              icon={processSteps[0].icon}
              title={processSteps[0].title}
              description={processSteps[0].description}
              index={0}
            />
          </div>

          {/* Card 2 - AI Analysis (Top Right) */}
          <div 
            ref={el => { cardsRef.current[1] = el; }}
            className="h-64"
          >
            <Card
              icon={processSteps[1].icon}
              title={processSteps[1].title}
              description={processSteps[1].description}
              index={1}
            />
          </div>

          {/* Card 3 - Actionable Insights (Bottom Right) */}
          <div 
            ref={el => { cardsRef.current[2] = el; }}
            className="h-64"
          >
            <Card
              icon={processSteps[2].icon}
              title={processSteps[2].title}
              description={processSteps[2].description}
              index={2}
            />
          </div>

          {/* Card 4 - Preventative Action (Bottom Left) */}
          <div 
            ref={el => { cardsRef.current[3] = el; }}
            className="h-64"
          >
            <Card
              icon={processSteps[3].icon}
              title={processSteps[3].title}
              description={processSteps[3].description}
              index={3}
            />
          </div>
        </div>
      </div>
    );
  }
);

RightBento.displayName = 'RightBento';

export default RightBento;
