import { Check, Star, Zap, Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small farms and individual growers",
      features: [
        "Up to 50 analyses per month",
        "Basic disease detection",
        "Email support",
        "Mobile app access",
        "Community forum access"
      ],
      buttonText: "Get Started",
      popular: false,
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for medium-scale agricultural operations",
      features: [
        "Unlimited analyses",
        "Advanced AI models",
        "Priority support",
        "Drone integration",
        "Custom reporting",
        "API access",
        "Team collaboration"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale agricultural enterprises",
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Custom integrations",
        "White-label solutions"
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Choose Your
            <span className="gradient-text block">Growth Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From small gardens to vast agricultural enterprises, we have the perfect solution for your crop monitoring needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-hidden hover-scale ${
                plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include our core AI technology and regular updates
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ 30-day Money Back</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;