import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Users, MapPin } from 'lucide-react';

export default function Problem() {
  return (
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
          <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <AlertTriangle className="h-12 w-12 text-accent mb-4" />
              <h3 className="heading-tertiary mb-3">Reactive Monitoring</h3>
              <p className="text-gray-600 font-body">
                Current systems only detect contamination after it has already affected communities, 
                leading to preventable health crises.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="heading-tertiary mb-3">Limited Resources</h3>
              <p className="text-gray-600 font-body">
                Health officials lack the tools and data needed to make proactive decisions 
                about water safety across vast regions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-accent hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 text-accent mb-4" />
              <h3 className="heading-tertiary mb-3">Geographic Challenges</h3>
              <p className="text-gray-600 font-body">
                Remote communities often lack access to real-time water quality monitoring, 
                putting vulnerable populations at greater risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
