
import { Leaf, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">PlantDoc AI</h3>
                <p className="text-gray-400 text-sm">Plant Disease Classifier</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering farmers and plant enthusiasts with AI-powered disease detection. 
              Upload a photo and get instant, accurate plant health analysis using cutting-edge machine learning.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for sustainable agriculture</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-green-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">info@plantdocai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-green-400 mt-0.5" />
                <span className="text-sm">Agricultural Innovation Hub<br />Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 PlantDoc AI. All rights reserved. Helping plants stay healthy with artificial intelligence.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
