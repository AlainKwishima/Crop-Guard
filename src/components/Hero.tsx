
import { Leaf, Camera, Search, Webcam } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Identify Plant Diseases
          <span className="block text-green-600">in Seconds</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto animate-fade-in">
          Upload a photo of your plant's leaf and get instant AI-powered disease detection. 
          Help your crops stay healthy with cutting-edge machine learning technology.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
          <p className="text-green-800 font-medium">
            🚁 <strong>Designed for Large-Scale Agriculture:</strong> This web application is optimized for use with webcams and drone-captured images in large plantation fields, enabling efficient crop monitoring across vast agricultural areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Webcam className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Webcam & Drone Ready</h3>
            <p className="text-gray-600">Capture images directly with webcam or upload drone footage from field surveys</p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI analyzes images for disease patterns across large plantation areas</p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Field-Scale Results</h3>
            <p className="text-gray-600">Get detailed disease identification for effective large-scale crop management</p>
          </div>
        </div>
      </div>
    </section>
  );
};
