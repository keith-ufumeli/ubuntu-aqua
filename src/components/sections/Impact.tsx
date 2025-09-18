import { Card, CardContent } from '@/components/ui/card';
import { Users, Heart, Shield } from 'lucide-react';

export default function Impact() {
  return (
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
  );
}
