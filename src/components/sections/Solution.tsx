import { CheckCircle } from 'lucide-react';

export default function Solution() {
  return (
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
  );
}
