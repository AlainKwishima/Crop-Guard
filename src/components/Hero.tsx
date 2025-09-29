
import { Shield, Camera, Search, Webcam, Zap, Bot } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="text-center py-16 neural-network-bg relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
          <span className="block text-foreground font-black tracking-wider">CROPGUARD</span>
          <span className="gradient-text block text-4xl md:text-6xl animate-neural-network">NEURAL INTELLIGENCE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in text-neural">
          &gt; ADVANCED AI SURVEILLANCE SYSTEM &lt;<br/>
          Quantum-enhanced crop protection through neural networks. Deploy drone swarms and satellite arrays for real-time threat analysis across planetary-scale agricultural operations.
        </p>

        <div className="cyber-border p-6 mb-10 max-w-4xl mx-auto animate-pulse-cyber">
          <div className="cyber-glass p-4 rounded-sm">
            <p className="text-primary font-bold text-cyber text-lg">
              ⚡ <span className="text-accent">ENTERPRISE NEURAL CORE:</span> Engineered for mega-plantations using autonomous drone fleets and quantum IoT sensor networks. Monitor millions of acres with predictive AI analytics and real-time threat neutralization protocols.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 card-cyber group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center mx-auto mb-6 animate-pulse-cyber group-hover:animate-glow">
              <Webcam className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-primary">DRONE SWARM PROTOCOL</h3>
            <p className="text-muted-foreground text-neural">Multi-vector surveillance from autonomous drones, orbital satellites, and quantum ground sensors for omnipresent field monitoring</p>
          </div>

          <div className="text-center p-8 card-neural group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center mx-auto mb-6 animate-hologram group-hover:animate-neural-network">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-accent">QUANTUM AI CORE</h3>
            <p className="text-muted-foreground text-neural">Deep neural networks processing petabytes of agricultural data with 99.7% accuracy across 500+ threat classifications</p>
          </div>

          <div className="text-center p-8 card-cyber group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center mx-auto mb-6 animate-pulse-cyber group-hover:animate-glow">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyber text-primary">REAL-TIME NEXUS</h3>
            <p className="text-muted-foreground text-neural">Instantaneous threat analysis with predictive algorithms and automated response protocols for maximum crop protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};
