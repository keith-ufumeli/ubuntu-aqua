import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
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
  );
}
