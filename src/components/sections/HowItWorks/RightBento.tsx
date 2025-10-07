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
      <div ref={ref} className="pt-20">
        {/* Bento Box Layout - Fluid widths like a real bento box */}
        <div className="bento-container">
          {/* Row 1 - Large card on left, smaller on right */}
          <div className="bento-row-1">
            <div 
              ref={el => { cardsRef.current[0] = el; }}
              className="bento-card-large"
            >
              <Card
                icon={processSteps[0].icon}
                title={processSteps[0].title}
                description={processSteps[0].description}
                index={0}
              />
            </div>
            <div 
              ref={el => { cardsRef.current[1] = el; }}
              className="bento-card-small"
            >
              <Card
                icon={processSteps[1].icon}
                title={processSteps[1].title}
                description={processSteps[1].description}
                index={1}
              />
            </div>
          </div>

          {/* Row 2 - Small card on left, large on right */}
          <div className="bento-row-2">
            <div 
              ref={el => { cardsRef.current[2] = el; }}
              className="bento-card-small"
            >
              <Card
                icon={processSteps[2].icon}
                title={processSteps[2].title}
                description={processSteps[2].description}
                index={2}
              />
            </div>
            <div 
              ref={el => { cardsRef.current[3] = el; }}
              className="bento-card-large"
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
      </div>
    );
  }
);

RightBento.displayName = 'RightBento';

export default RightBento;
