import { Check, Star, Zap, Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const plans = [
    {
      name: "NEURAL CORE",
      price: "FREE",
      description: "Entry-level quantum intelligence access",
      features: [
        "50 AI analyses per cycle",
        "Basic threat detection protocols",
        "Neural network support",
        "Mobile interface access",
        "Community matrix access"
      ],
      buttonText: "INITIALIZE SYSTEM",
      popular: false,
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "QUANTUM PRO",
      price: "$29",
      period: "/cycle",
      description: "Advanced neural intelligence for medium operations",
      features: [
        "Unlimited quantum analyses",
        "Enhanced AI neural models",
        "Priority support protocols",
        "Drone swarm integration",
        "Custom threat reporting",
        "API neural interface",
        "Team collaboration matrix"
      ],
      buttonText: "ACTIVATE TRIAL MODE",
      popular: true,
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "ENTERPRISE NEXUS",
      price: "CUSTOM",
      description: "Maximum intelligence for planetary operations",
      features: [
        "All Quantum Pro protocols",
        "Custom AI model training",
        "Dedicated neural support",
        "On-premise deployment",
        "SLA quantum guarantee", 
        "Custom integrations",
        "White-label solutions"
      ],
      buttonText: "CONTACT NEURAL COMMAND",
      popular: false,
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
            <span className="gradient-text">NEURAL</span>
            <span className="block text-foreground text-3xl md:text-5xl">PRICING MATRIX</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-neural">
            &gt; SELECT YOUR INTELLIGENCE LEVEL &lt;<br/>
            From micro-operations to planetary-scale agricultural networks, choose your neural enhancement protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name} 
              className={`card-cyber group relative overflow-hidden ${
                plan.popular ? 'animate-glow scale-105 border-accent' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-primary text-primary-foreground px-6 py-2 text-sm font-bold text-cyber">
                  OPTIMAL CHOICE
                </div>
              )}
              
              <div className="text-center pb-8 p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-sm flex items-center justify-center animate-pulse-cyber ${
                  plan.popular ? 'bg-gradient-to-br from-accent to-primary' : 'bg-gradient-to-br from-primary to-accent'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-black text-cyber text-primary mb-3">{plan.name}</h3>
                <p className="text-base text-neural mb-6">{plan.description}</p>
                <div className="pt-4">
                  <span className="text-5xl font-black gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-neural">{plan.period}</span>}
                </div>
              </div>

              <div className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-accent mr-4 flex-shrink-0 animate-glow" />
                      <span className="text-sm text-neural">&gt; {feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  variant={plan.popular ? "neural" : "cyber"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6 text-neural text-lg">
            &gt; ALL NEURAL PROTOCOLS INCLUDE QUANTUM AI CORE AND CONTINUOUS UPGRADES &lt;
          </p>
          <div className="flex justify-center space-x-12 text-sm text-muted-foreground text-neural">
            <span className="flex items-center"><Check className="h-4 w-4 text-accent mr-2" />99.9% UPTIME SLA</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-accent mr-2" />QUANTUM ENCRYPTED</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-accent mr-2" />30-DAY NEURAL GUARANTEE</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;