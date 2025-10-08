import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Seamless transition element */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-licorice-background pointer-events-none"></div>
      {/* Water Particles Background */}
      {/* <div className="absolute inset-0 z-10">
        <WaterParticles
          particleCount={20}
          colors={['#E49B0F', '#B19EEF', '#FF9FFC']}
          mouseInfluence={0.5}
          speed={0.3}
          size={1.5}
          className="opacity-20"
        />
      </div>
       */}
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/50 to-background/60 z-20" /> */}
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-body mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Ready to make a difference?</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="heading-primary mb-6 text-foreground">
            Revolutionize Water Safety with{' '}
            <span className="text-primary">AI Innovation</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-large text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in protecting communities across Zimbabwe with cutting-edge AI-powered 
            water safety predictions. Experience the future of water monitoring technology.
          </p>
        </div>
        
        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Primary CTA Card */}
          <div className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="heading-tertiary mb-4 text-foreground">
                Experience the Future
              </h3>
              <p className="body-text mb-6">
                See Ubuntu Aqua in action with a personalized demonstration 
                tailored to your organization&apos;s needs.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-heading font-semibold group/btn"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Secondary CTA Card */}
          <div className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h3 className="heading-tertiary mb-4 text-foreground">
                Deep Dive into Innovation
              </h3>
              <p className="body-text mb-6">
                Access our comprehensive whitepaper and technical documentation 
                to learn more about our AI technology.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-heading font-semibold group/btn"
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover/btn:-translate-y-1" />
                <span>Download Now</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/60 font-body mb-4">
            Trusted by organizations across Zimbabwe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-foreground/40 font-heading font-semibold">Ministry of Health</div>
            <div className="w-1 h-1 bg-foreground/30 rounded-full" />
            <div className="text-foreground/40 font-heading font-semibold">Local Water Authorities</div>
            <div className="w-1 h-1 bg-foreground/30 rounded-full" />
            <div className="text-foreground/40 font-heading font-semibold">NGO Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}
