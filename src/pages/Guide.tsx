import { Camera, Upload, Zap, CheckCircle, Play, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Guide = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "NEURAL UPLOAD",
      description: "Capture images via neural interface or upload existing data from drone swarms or surveillance networks.",
      details: [
        "Optimize photon capture for enhanced analysis",
        "Target infected sectors for close-range neural scanning", 
        "Multi-vector angles enhance detection precision",
        "Neural formats: JPEG, PNG, WebP protocols supported"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "QUANTUM ANALYSIS", 
      description: "Our quantum AI core processes visual data and analyzes threat patterns, diseases, and nutrient deficiencies.",
      details: [
        "Analysis completes in 1-3 nanoseconds",
        "Neural networks examine cellular patterns and anomalies",
        "Cross-references against database of 500+ threat classifications",
        "99.7%+ precision across planetary crop varieties"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "NEURAL OUTPUT",
      description: "Receive comprehensive threat analysis with identification protocols, confidence metrics, and neutralization strategies.",
      details: [
        "Threat classification and severity assessment",
        "Neutralization protocols and timing specifications",
        "Prevention algorithms for future threat mitigation",
        "Direct interface with quantum agronomist specialists"
      ]
    }
  ];

  const tips = [
    {
      title: "NEURAL IMAGING PROTOCOLS",
      items: [
        "Utilize quantum daylight frequencies when possible - avoid direct solar radiation or shadow interference",
        "Maintain scanner stability to prevent data corruption",
        "Fill capture matrix with target biological anomalies",
        "Clean optical sensors before neural scanning operations"
      ]
    },
    {
      title: "OPTIMAL PROCEDURES",
      items: [
        "Execute multiple scans of different infected sectors",
        "Include healthy tissue samples for neural comparison", 
        "Document coordinates and temporal data for tracking protocols",
        "Regular surveillance cycles enable early threat detection"
      ]
    },
    {
      title: "DRONE SWARM OPERATIONS",
      items: [
        "Deploy at optimal altitude (10-50 meters) for cellular detail capture",
        "Execute grid formation patterns for systematic sector coverage",
        "Schedule surveillance during optimal photonic conditions",
        "Process data streams in synchronized batches for maximum efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
            <span className="gradient-text">NEURAL</span>
            <span className="block text-foreground text-3xl md:text-5xl">OPERATION GUIDE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-neural">
            &gt; ACCESSING OPERATIONAL PROTOCOLS &lt;<br/>
            Master the quantum interface for maximum threat detection precision across agricultural sectors.
          </p>
          <Button variant="cyber" size="lg" className="mb-8">
            <Play className="h-5 w-5 mr-3" />
            WATCH NEURAL DEMO
          </Button>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-primary">THREE NEURAL PROTOCOLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="card-cyber group relative">
                <div className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center animate-pulse-cyber group-hover:animate-glow">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center text-lg font-black text-cyber animate-glow">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyber text-primary">{step.title}</h3>
                  <p className="text-base mb-6 text-neural">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground text-neural">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                        &gt; {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-accent">OPTIMIZATION PROTOCOLS</h2>
          <Tabs defaultValue="quality" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 cyber-glass p-2 rounded-sm">
              <TabsTrigger value="quality" className="text-cyber font-bold">NEURAL IMAGING</TabsTrigger>
              <TabsTrigger value="practices" className="text-cyber font-bold">OPTIMAL PROCEDURES</TabsTrigger>
              <TabsTrigger value="drone" className="text-cyber font-bold">DRONE OPERATIONS</TabsTrigger>
            </TabsList>
            
            {tips.map((tip, index) => (
              <TabsContent 
                key={index}
                value={["quality", "practices", "drone"][index]} 
                className="mt-8"
              >
                <div className="neural-glass p-8 rounded-sm border border-primary/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyber text-primary">{tip.title}</h3>
                  <div className="grid gap-6">
                    {tip.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-4 mt-0.5 flex-shrink-0 animate-pulse" />
                        <p className="text-muted-foreground text-neural">&gt; {item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Sample Images Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-primary">SAMPLE NEURAL OUTPUTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { disease: "EARLY BLIGHT PROTOCOL", crop: "TOMATO SECTOR", confidence: "99.4%" },
              { disease: "RUST PATHOGEN", crop: "CORN QUADRANT", confidence: "97.8%" },
              { disease: "MILDEW CONTAMINATION", crop: "WHEAT ZONE", confidence: "99.7%" }
            ].map((sample, index) => (
              <div key={sample.disease} className="card-neural group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-sm flex items-center justify-center border-b border-primary/30">
                  <Camera className="h-16 w-16 text-primary animate-pulse-cyber group-hover:animate-glow" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-cyber text-primary mb-2">{sample.disease}</h3>
                  <p className="text-muted-foreground text-neural mb-4">{sample.crop}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground text-neural">NEURAL CONFIDENCE:</span>
                    <span className="font-black text-accent gradient-text text-xl">{sample.confidence}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="neural-glass max-w-3xl mx-auto border border-primary/30 animate-hologram p-10 rounded-sm">
            <h3 className="text-3xl font-bold mb-6 text-cyber text-primary">READY TO ACTIVATE PROTECTION PROTOCOLS?</h3>
            <p className="text-muted-foreground mb-8 text-neural text-lg">
              &gt; INITIALIZE NEURAL ANALYSIS SYSTEMS &lt;<br/>
              Begin analyzing your agricultural sectors today with our neural core and experience quantum-enhanced crop protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg">
                INITIATE ANALYSIS
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
              <Button variant="neural" size="lg">VIEW PRICING MATRIX</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;