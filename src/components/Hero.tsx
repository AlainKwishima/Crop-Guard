
import { Shield, Camera, Search, Webcam, Zap, Bot } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="text-center py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Protect Your Crops with
          <span className="gradient-text block">AI-Powered Intelligence</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in">
          Revolutionary crop protection through advanced AI. Upload images from drones, webcams, or mobile devices for instant disease detection and prevention strategies.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
          <p className="text-primary font-medium">
            🚁 <strong>Enterprise-Scale Agriculture:</strong> Engineered for large plantations using drone fleets and IoT sensors. Monitor thousands of acres with real-time disease detection and predictive analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-card/50 rounded-lg border border-border hover:shadow-lg hover-scale transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Webcam className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drone & IoT Integration</h3>
            <p className="text-muted-foreground">Multi-platform capture from drones, satellites, and ground sensors for comprehensive monitoring</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-lg border border-border hover:shadow-lg hover-scale transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Advanced AI Engine</h3>
            <p className="text-muted-foreground">Neural networks trained on millions of crop images with 95%+ accuracy across 200+ conditions</p>
          </div>

          <div className="text-center p-6 bg-card/50 rounded-lg border border-border hover:shadow-lg hover-scale transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Insights</h3>
            <p className="text-muted-foreground">Instant analysis with predictive alerts and actionable treatment recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
};
