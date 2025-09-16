'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Droplets, 
  Shield, 
  TrendingUp, 
  Users, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Zap
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero elements
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Animate stats on scroll
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      {
        textContent: (index: number, target: HTMLElement) => {
          const finalValue = target.getAttribute('data-target');
          return finalValue;
        },
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Staggered card animations
    gsap.fromTo('.process-card', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

  }, []);

  return (
    <div className="min-h-screen bg-aqua-light">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-aqua-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-aqua-primary" aria-hidden="true" />
              <span className="brand-text text-2xl">Ubuntu Aqua</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solution" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">Solution</a>
              <a href="#how-it-works" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">How It Works</a>
              <a href="#impact" className="text-aqua-dark hover:text-aqua-primary transition-colors focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2 rounded px-2 py-1">Impact</a>
              <Button className="bg-aqua-primary hover:bg-aqua-primary/90 text-white focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section ref={heroRef} className="pt-20 pb-16 bg-gradient-to-br from-aqua-light to-white" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
                id="hero-heading"
                className="hero-title font-serif text-5xl lg:text-6xl font-bold text-aqua-dark leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                AI-Powered Water Safety for{' '}
                <span className="text-aqua-primary">Zimbabwe</span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle text-xl body-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Predict and prevent drinking water violations before they happen. 
                Our AI model helps health officials, NGOs, and communities make 
                data-driven decisions to protect public health.
              </motion.p>

              <motion.div 
                className="hero-cta flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
              >
                <Button size="lg" className="bg-aqua-primary hover:bg-aqua-primary/90 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button size="lg" variant="outline" className="border-aqua-primary text-aqua-primary hover:bg-aqua-primary hover:text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-aqua-primary focus:ring-offset-2">
                  Download Whitepaper
                </Button>
              </motion.div>
            </div>

            {/* Data Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-aqua-dark mb-6 text-center">Model Performance</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Prediction Accuracy</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-aqua-primary h-3 rounded-full progress-bar-95"></div>
                      </div>
                      <span className="font-bold text-aqua-primary">95%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Early Warning Time</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-aqua-secondary h-3 rounded-full progress-bar-87"></div>
                      </div>
                      <span className="font-bold text-aqua-secondary">72h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Communities Protected</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div className="bg-aqua-success h-3 rounded-full progress-bar-92"></div>
                      </div>
                      <span className="font-bold text-aqua-success">150+</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-aqua-accent text-white p-3 rounded-full shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-aqua-success text-white p-3 rounded-full shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-aqua-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="2.1M">0</div>
              <div className="text-aqua-light">People at Risk</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="95%">0</div>
              <div className="text-aqua-light">Prediction Accuracy</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="72h">0</div>
              <div className="text-aqua-light">Early Warning</div>
            </div>
            <div>
              <div className="stat-number text-4xl font-bold mb-2" data-target="150+">0</div>
              <div className="text-aqua-light">Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-6">
              The Water Crisis in Zimbabwe
            </h2>
            <p className="text-large body-text max-w-3xl mx-auto">
              Every day, millions of Zimbabweans face the risk of waterborne diseases 
              due to contaminated drinking water. Current monitoring systems are reactive, 
              not predictive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-aqua-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-aqua-accent mb-4" />
                <h3 className="heading-tertiary mb-3">Reactive Monitoring</h3>
                <p className="text-gray-600">
                  Current systems only detect contamination after it has already affected communities, 
                  leading to preventable health crises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-aqua-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-aqua-accent mb-4" />
                <h3 className="heading-tertiary mb-3">Limited Resources</h3>
                <p className="text-gray-600">
                  Health officials lack the tools and data needed to make proactive decisions 
                  about water safety across vast regions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-aqua-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-aqua-accent mb-4" />
                <h3 className="heading-tertiary mb-3">Geographic Challenges</h3>
                <p className="text-gray-600">
                  Remote communities often lack access to real-time water quality monitoring, 
                  putting vulnerable populations at greater risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-aqua-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-primary mb-6">
                Our AI Solution
              </h2>
              <p className="text-large body-text mb-8">
                Ubuntu Aqua uses advanced machine learning to analyze environmental data, 
                water quality indicators, and historical patterns to predict potential 
                violations before they occur.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-aqua-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-aqua-dark mb-2">Early Warning System</h3>
                    <p className="text-gray-600">Get alerts up to 72 hours before contamination events</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-aqua-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-aqua-dark mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-600">Make informed decisions with comprehensive risk analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-aqua-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-aqua-dark mb-2">Scalable Technology</h3>
                    <p className="text-gray-600">Works across urban and rural communities throughout Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-aqua-dark mb-6">How Our AI Works</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-aqua-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <span className="text-gray-700">Collect environmental and water quality data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-aqua-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <span className="text-gray-700">Analyze patterns using machine learning models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-aqua-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <span className="text-gray-700">Generate risk predictions and recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-aqua-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <span className="text-gray-700">Deliver actionable insights to stakeholders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="process-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-6">
              How It Works
            </h2>
            <p className="text-large body-text max-w-3xl mx-auto">
              Our four-step process transforms raw data into life-saving insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="process-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-aqua-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8" />
        </div>
                  <h3 className="heading-tertiary mb-4">Data Collection</h3>
                  <p className="text-gray-600">
                    Gather environmental data, water quality metrics, and historical patterns 
                    from multiple sources across Zimbabwe.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="process-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-aqua-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="heading-tertiary mb-4">AI Analysis</h3>
                  <p className="text-gray-600">
                    Advanced machine learning models analyze patterns and identify 
                    early warning signals for potential contamination events.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="process-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-aqua-success text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="heading-tertiary mb-4">Actionable Insights</h3>
                  <p className="text-gray-600">
                    Generate clear, actionable recommendations for health officials 
                    and community leaders to prevent contamination.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="process-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-aqua-accent text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="heading-tertiary mb-4">Preventative Action</h3>
                  <p className="text-gray-600">
                    Enable proactive measures to protect communities before 
                    water contamination becomes a public health crisis.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="impact" className="py-20 bg-aqua-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-6">
              Impact Across Stakeholders
            </h2>
            <p className="text-large body-text max-w-3xl mx-auto">
              Ubuntu Aqua serves multiple stakeholders, each with unique needs and challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-aqua-primary text-white rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="heading-secondary mb-4">For Health Officials</h3>
                <p className="text-gray-600 mb-6">
                  Get early warnings about potential water contamination events, 
                  enabling proactive public health interventions and resource allocation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 72-hour advance warning system</li>
                  <li>• Risk assessment dashboards</li>
                  <li>• Automated alert notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-aqua-secondary text-white rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="heading-secondary mb-4">For NGOs & Aid Organizations</h3>
                <p className="text-gray-600 mb-6">
                  Access comprehensive water safety data to prioritize interventions 
                  and demonstrate impact to donors and stakeholders.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Community risk mapping</li>
                  <li>• Impact measurement tools</li>
                  <li>• Donor reporting dashboards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-aqua-success text-white rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="heading-secondary mb-4">For Community Leaders</h3>
                <p className="text-gray-600 mb-6">
                  Empower local leaders with actionable insights to protect their 
                  communities and make informed decisions about water safety.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Local risk assessments</li>
                  <li>• Community alert systems</li>
                  <li>• Educational resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aqua-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-primary mb-6 text-white">
            Ready to Transform Water Safety?
          </h2>
          <p className="text-xl text-aqua-light mb-8 max-w-2xl mx-auto">
            Join us in protecting communities across Zimbabwe with AI-powered 
            water safety predictions. Request a demo to see how Ubuntu Aqua 
            can work for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-aqua-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aqua-primary px-8 py-4 text-lg">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aqua-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Droplets className="h-8 w-8 text-aqua-primary" />
                <span className="brand-text text-2xl text-white">Ubuntu Aqua</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                AI-powered water safety predictions for Zimbabwe. 
                Protecting communities through early warning systems and data-driven insights.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Contact Us
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Privacy Policy
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Partners</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Ministry of Health</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UNICEF Zimbabwe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WHO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local NGOs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ubuntu Aqua. All rights reserved. Built with accessibility in mind.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
