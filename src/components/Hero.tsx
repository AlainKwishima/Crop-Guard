
import { Leaf, Camera, Search } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Identify Plant Diseases
          <span className="block text-green-600">in Seconds</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Upload a photo of your plant's leaf and get instant AI-powered disease detection. 
          Help your crops stay healthy with cutting-edge machine learning technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Image</h3>
            <p className="text-gray-600">Take or upload a clear photo of the affected leaf</p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI analyzes the image for disease patterns</p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Results</h3>
            <p className="text-gray-600">Receive detailed disease identification and advice</p>
          </div>
        </div>
      </div>
    </section>
  );
};
