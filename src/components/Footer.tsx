
import { Shield, Heart, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="neural-network-bg border-t border-primary/30 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-sm shadow-lg animate-pulse-cyber">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-black gradient-text text-cyber tracking-wider">NEXUS SHIELD</h3>
                <p className="text-primary text-sm font-bold text-cyber">NEURAL THREAT INTELLIGENCE</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-neural">
              &gt; QUANTUM-ENHANCED CYBERSECURITY PLATFORM &lt;<br/>
              Revolutionary AI-powered threat detection for enterprise-scale operations. Protect digital infrastructure with next-generation security protocols.
            </p>
            <div className="flex items-center space-x-3 text-muted-foreground text-neural">
              <span>ENGINEERED WITH</span>
              <Heart className="h-5 w-5 text-accent animate-glow" />
              <span>FOR SECURE DIGITAL ECOSYSTEMS</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyber text-primary">PLATFORM</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-neural hover:translate-x-1">
                &gt; HOME
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-neural hover:translate-x-1">
                &gt; ABOUT DEFENSE
              </Link>
              <Link to="/guide" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-neural hover:translate-x-1">
                &gt; SECURITY GUIDE
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-neural hover:translate-x-1">
                &gt; PRICING MATRIX
              </Link>
            </nav>
          </div>

          {/* Resource Network */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyber text-accent">RESOURCES</h4>
            <nav className="space-y-3">
              <Link to="/faq" className="block text-muted-foreground hover:text-accent transition-all duration-300 text-neural hover:translate-x-1">
                &gt; FAQ DATABASE
              </Link>
              <Link to="/community" className="block text-muted-foreground hover:text-accent transition-all duration-300 text-neural hover:translate-x-1">
                &gt; SECURITY NETWORK
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-all duration-300 text-neural hover:translate-x-1">
                &gt; CONTACT PROTOCOL
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-all duration-300 text-neural hover:translate-x-1">
                &gt; DOCUMENTATION
              </a>
            </nav>
          </div>

          {/* Communication Hub */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-cyber text-primary">COMMUNICATION</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground text-neural">
                <Mail className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm">security@nexusshield.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-neural">
                <Phone className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm">+1 (555) 789-SECURE</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="p-3 cyber-glass hover:bg-primary hover:text-primary-foreground rounded-sm transition-all duration-300 animate-pulse-cyber">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 cyber-glass hover:bg-accent hover:text-primary-foreground rounded-sm transition-all duration-300 animate-pulse-cyber">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 cyber-glass hover:bg-primary hover:text-primary-foreground rounded-sm transition-all duration-300 animate-pulse-cyber">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/30 data-stream">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm text-neural">
              &copy; 2025 NEXUS SHIELD NEURAL INTELLIGENCE. ALL PROTOCOLS RESERVED.<br/>
              SECURING DIGITAL ECOSYSTEMS WITH QUANTUM AI TECHNOLOGY.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-xs text-cyber hover:translate-y-[-2px]">
                PRIVACY PROTOCOL
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 text-xs text-cyber hover:translate-y-[-2px]">
                SERVICE TERMS
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-xs text-cyber hover:translate-y-[-2px]">
                DATA MATRIX
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
