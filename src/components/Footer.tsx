
import { Leaf, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-green-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="p-1 bg-green-600 rounded">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700 font-medium">PlantDoc AI</span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-600">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for farmers and plant enthusiasts</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-green-100 text-center text-sm text-gray-500">
          <p>&copy; 2024 PlantDoc AI. Helping plants stay healthy with artificial intelligence.</p>
        </div>
      </div>
    </footer>
  );
};
