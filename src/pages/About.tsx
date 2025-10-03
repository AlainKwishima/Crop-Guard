
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Target, Users, Award, Brain, Lock, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "QUANTUM AI CORE",
      description: "Neural networks trained on petabytes of security data using quantum computing protocols."
    },
    {
      icon: Lock,
      title: "ZERO-DAY PROTECTION",
      description: "Developed with cybersecurity quantum researchers and threat intelligence specialists."
    },
    {
      icon: Globe,
      title: "PLANETARY DEFENSE",
      description: "Supporting security operations across multiple networks and enterprise zones worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Neural Architect",
      bio: "PhD in Quantum Agriculture with 15+ years developing AI consciousness for crop analysis.",
      code: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Systems Engineer",
      bio: "Full-stack quantum engineer specializing in neural machine learning applications.",
      code: "MR"
    },
    {
      name: "Dr. James Wilson",
      role: "Agricultural Intelligence Advisor", 
      bio: "Former agricultural quantum specialist with expertise in xenobotanical threat analysis.",
      code: "JW"
    }
  ];

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-sm shadow-lg animate-pulse-cyber">
              <Shield className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
            <span className="gradient-text">ABOUT NEXUS SHIELD</span>
            <span className="block text-foreground text-3xl md:text-5xl">NEURAL THREAT INTELLIGENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-neural">
            &gt; MISSION PROTOCOL ACTIVE &lt;<br/>
            We're engineering the future of cybersecurity through quantum artificial intelligence, 
            enabling organizations and security teams to detect threats before they manifest and maintain optimal security posture across enterprise operations.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="h-10 w-10 text-primary animate-glow" />
              <h2 className="text-4xl font-bold text-cyber text-primary">MISSION DIRECTIVE</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-neural text-lg">
              &gt; AGRICULTURAL THREAT ANALYSIS INITIATED &lt;<br/>
              Plant diseases cause trillions in crop losses across global operations annually. Our quantum AI platform 
              democratizes access to expert plant disease diagnosis, enabling early threat detection and neutralization 
              protocols that can preserve entire harvests.
            </p>
            <p className="text-muted-foreground leading-relaxed text-neural text-lg">
              &gt; QUANTUM VISION PROTOCOLS ACTIVE &lt;<br/>
              By combining advanced quantum computer vision with agricultural intelligence networks, we're making 
              professional-grade plant health assessment accessible to farming operations of all scales, from 
              micro-gardens to mega-scale agricultural installations.
            </p>
          </div>
          <div className="neural-glass p-10 rounded-sm border border-primary/30 animate-hologram">
            <h3 className="text-3xl font-bold mb-8 text-cyber text-accent">IMPACT METRICS</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-neural">NEURAL ANALYSES</span>
                <span className="text-3xl font-black text-primary gradient-text">2.5M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-neural">THREATS DETECTED</span>
                <span className="text-3xl font-black text-accent gradient-text">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-neural">OPERATORS ENHANCED</span>
                <span className="text-3xl font-black text-primary gradient-text">100K+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-neural">ACCURACY RATE</span>
                <span className="text-3xl font-black text-accent gradient-text">99.7%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-cyber text-primary">WHY CHOOSE NEURAL INTELLIGENCE?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-neural text-lg">
              &gt; QUANTUM TECHNOLOGY MATRIX ENGAGED &lt;<br/>
              Our platform combines advanced quantum technology with agricultural intelligence networks to deliver 
              precise, actionable insights for plant health optimization protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-neural p-8 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center mb-6 animate-pulse-cyber group-hover:animate-glow">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyber text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-neural">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Users className="h-10 w-10 text-accent animate-glow" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-cyber text-accent">NEURAL TEAM MATRIX</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-neural text-lg">
              &gt; INTELLIGENCE COLLECTIVE ASSEMBLED &lt;<br/>
              Our diverse team of quantum AI researchers, neural engineers, and agricultural intelligence specialists 
              work in synchronization to advance plant health technology protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="card-cyber text-center p-8 group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-sm mx-auto mb-6 flex items-center justify-center animate-pulse-cyber group-hover:animate-glow">
                  <span className="text-primary-foreground text-2xl font-black text-cyber">
                    {member.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyber text-primary">{member.name}</h3>
                <p className="text-accent font-bold mb-4 text-cyber">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed text-neural">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
