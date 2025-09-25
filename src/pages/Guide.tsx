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
      title: "Upload or Capture",
      description: "Take a photo with your device camera or upload existing images from your drone or webcam footage.",
      details: [
        "Ensure good lighting and clear leaf visibility",
        "Capture affected areas close-up for better analysis", 
        "Multiple angles help improve detection accuracy",
        "Supported formats: JPEG, PNG, WebP"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Analysis", 
      description: "Our advanced AI model processes your image and analyzes it for diseases, pests, and nutrient deficiencies.",
      details: [
        "Analysis typically completes in 2-5 seconds",
        "AI examines leaf patterns, discoloration, and spots",
        "Compares against database of 200+ conditions",
        "95%+ accuracy across major crop types"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Get Results",
      description: "Receive detailed analysis with disease identification, confidence level, and recommended treatment options.",
      details: [
        "Disease name and severity assessment",
        "Treatment recommendations and timing",
        "Prevention tips for future outbreaks",
        "Option to consult with agronomist experts"
      ]
    }
  ];

  const tips = [
    {
      title: "Image Quality Tips",
      items: [
        "Use natural daylight when possible - avoid direct sunlight or shadows",
        "Keep the camera steady to avoid blur",
        "Fill the frame with the affected leaf or plant area",
        "Clean the lens before taking photos"
      ]
    },
    {
      title: "Best Practices",
      items: [
        "Take multiple photos of different affected areas",
        "Include healthy parts of the plant for comparison", 
        "Document the location and date for tracking",
        "Regular monitoring helps catch issues early"
      ]
    },
    {
      title: "Drone Usage",
      items: [
        "Fly at optimal height (10-50 feet) for leaf detail",
        "Use grid patterns to cover large fields systematically",
        "Schedule flights during ideal lighting conditions",
        "Process images in batches for efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            How to Use
            <span className="gradient-text block">CropGuard AI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn how to get the most accurate disease detection results for your crops in just a few simple steps.
          </p>
          <Button className="btn-primary mb-8">
            <Play className="h-4 w-4 mr-2" />
            Watch Demo Video
          </Button>
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Three Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="hover-scale border-border relative">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tips & Best Practices</h2>
          <Tabs defaultValue="quality" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="quality">Image Quality</TabsTrigger>
              <TabsTrigger value="practices">Best Practices</TabsTrigger>
              <TabsTrigger value="drone">Drone Usage</TabsTrigger>
            </TabsList>
            
            {tips.map((tip, index) => (
              <TabsContent 
                key={index}
                value={["quality", "practices", "drone"][index]} 
                className="mt-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {tip.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Sample Images Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Sample Detection Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { disease: "Early Blight", crop: "Tomato", confidence: "94%" },
              { disease: "Corn Rust", crop: "Corn", confidence: "89%" },
              { disease: "Powdery Mildew", crop: "Wheat", confidence: "97%" }
            ].map((sample, index) => (
              <Card key={sample.disease} className="hover-scale border-border">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-t-lg flex items-center justify-center">
                  <Camera className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg">{sample.disease}</h3>
                  <p className="text-muted-foreground">{sample.crop}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Confidence:</span>
                    <span className="font-bold text-primary">{sample.confidence}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Crops?</h3>
              <p className="text-muted-foreground mb-6">
                Start analyzing your plants today with our free tier and see the difference AI can make for your farm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  Start Analysis
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">View Pricing</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;