'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Shield, Globe, Zap, TrendingUp, Droplets, Target } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.bento-item');
      cards.forEach((card, index) => {
        (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="py-24 bg-background relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern-enhanced pointer-events-none" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body mb-6">
            <Droplets className="h-4 w-4" />
            Impact Across Stakeholders
          </div>
          <h2 className="heading-primary mb-6 licorice-text">
            Transforming Water Safety
          </h2>
          <p className="text-large body-text max-w-3xl mx-auto licorice-text/80">
            Ubuntu Aqua serves multiple stakeholders, each with unique needs and challenges, 
            creating a comprehensive ecosystem for water safety management.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-container">
          {/* Hero Card - Health Officials */}
          <div className="bento-item bento-hero">
            <Card className="card-hero">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Users className="h-8 w-8" />
                </div>
                <div className="bento-header">Health Officials</div>
                <h3 className="bento-title">Early Warning System</h3>
                <p className="bento-description">
                  Get 72-hour advance warnings about potential water contamination events, 
                  enabling proactive public health interventions and resource allocation 
                  before crises occur.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Feature Card - NGOs */}
          <div className="bento-item bento-feature">
            <Card className="card-feature">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="bento-header">NGOs & Aid</div>
                <h3 className="bento-title">Impact Measurement</h3>
                <p className="bento-description">
                  Access comprehensive data to prioritize interventions and demonstrate 
                  impact to donors.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Accent Card - Community Leaders */}
          <div className="bento-item bento-accent">
            <Card className="card-accent">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="bento-header">Community</div>
                <h3 className="bento-title">Local Empowerment</h3>
                <p className="bento-description">
                  Empower leaders with actionable insights to protect their communities 
                  and make informed decisions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Wide Card - Global Impact */}
          <div className="bento-item bento-wide">
            <Card className="card-minimal">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="bento-header">Global Reach</div>
                <h3 className="bento-title">Worldwide Impact</h3>
                <p className="bento-description">
                  Building a safer, healthier future for communities worldwide through 
                  AI-powered water safety solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Medium Card - Technology */}
          <div className="bento-item bento-medium">
            <Card className="card-minimal">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="bento-header">Technology</div>
                <h3 className="bento-title">AI Innovation</h3>
                <p className="bento-description">
                  Cutting-edge machine learning models that predict contamination 
                  risks with unprecedented accuracy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tall Card - Statistics */}
          <div className="bento-item bento-tall">
            <Card className="card-dark">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="bento-header">Results</div>
                <h3 className="bento-title text-gamboge-500">Proven Impact</h3>
                <p className="bento-description">
                  Our AI model has helped prevent over 500 potential contamination 
                  events across 15 countries, protecting millions of lives through 
                  early detection and intervention.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm antique-white-text/80 font-body">Prevention Rate</span>
                    <span className="text-2xl font-bold font-heading gamboge-text">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm antique-white-text/80 font-body">Response Time</span>
                    <span className="text-2xl font-bold font-heading gamboge-text">72h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm antique-white-text/80 font-body">Communities Served</span>
                    <span className="text-2xl font-bold font-heading gamboge-text">500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Card - Mission Statement */}
          <div className="bento-item bento-bottom">
            <Card className="card-minimal">
              <CardContent className="bento-content">
                <div className="bento-icon">
                  <Target className="h-6 w-6" />
                </div>
                <div className="bento-header">Join the Mission</div>
                <h3 className="bento-title">Ready to Transform Water Safety?</h3>
                <p className="bento-description">
                  Join health officials, NGOs, and community leaders worldwide who are 
                  already using Ubuntu Aqua to protect their communities. Start your 
                  journey toward safer water today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
