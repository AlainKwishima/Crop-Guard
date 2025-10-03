import { Shield, Lock, Zap, Bot } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="text-center py-16 neural-network-bg relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
          <span className="block text-foreground font-black tracking-wider">NEXUS SHIELD</span>
          <span className="gradient-text block text-4xl md:text-6xl animate-neural-network">NEURAL THREAT INTELLIGENCE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in text-neural">
          &gt; ADVANCED AI CYBERSECURITY SYSTEM &lt;<br/>
          Quantum-enhanced threat detection through neural networks. Deploy real-time vulnerability scanning and AI-powered malware analysis across enterprise-scale digital infrastructure.
        </p>

        <div className="cyber-border p-6 mb-10 max-w-4xl mx-auto animate-pulse-cyber">
          <div className="cyber-glass p-4 rounded-sm">
            <p className="text-primary font-bold text-cyber text-lg">
              ⚡ <span className="text-accent">ENTERPRISE SECURITY CORE:</span> Engineered for global networks using neural threat analysis and quantum encryption protocols. Protect millions of endpoints with predictive AI analytics and real-time threat neutralization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 card-cyber group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center mx-auto mb-6 animate-pulse-cyber group-hover:animate-glow">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-primary">ZERO-TRUST DEFENSE</h3>
            <p className="text-muted-foreground text-neural">Multi-layer security with real-time threat detection, vulnerability scanning, and quantum encryption for maximum protection</p>
          </div>

          <div className="text-center p-8 card-neural group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center mx-auto mb-6 animate-hologram group-hover:animate-neural-network">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-accent">QUANTUM AI CORE</h3>
            <p className="text-muted-foreground text-neural">Deep neural networks processing petabytes of security data with 99.8% accuracy across 800+ threat classifications</p>
          </div>

          <div className="text-center p-8 card-cyber group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center mx-auto mb-6 animate-pulse-cyber group-hover:animate-glow">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-primary">REAL-TIME NEXUS</h3>
            <p className="text-muted-foreground text-neural">Instantaneous threat analysis with predictive algorithms and automated response protocols for maximum security posture</p>
          </div>
        </div>
      </div>
    </section>
  );
};
