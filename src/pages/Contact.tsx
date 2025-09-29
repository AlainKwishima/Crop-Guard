
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "NEURAL TRANSMISSION",
      details: "neural@cropguard.ai",
      description: "Send quantum-encrypted messages - response within 12 hours"
    },
    {
      icon: Phone,
      title: "DIRECT NEURAL LINK",
      details: "+1 (555) 123-CYBER",
      description: "Neural network available: 0900-1800 PST"
    },
    {
      icon: MapPin,
      title: "COMMAND CENTER",
      details: "Quantum Agricultural Hub, Neural Valley, CA",
      description: "Schedule neural interface for direct consultation"
    },
    {
      icon: Clock,
      title: "OPERATIONAL CYCLES",
      details: "Mon - Fri: 09:00 - 18:00",
      description: "Emergency protocols available for critical threats"
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
            <span className="block text-foreground text-3xl md:text-5xl">CONTACT PROTOCOL</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-neural">
            &gt; ESTABLISHING COMMUNICATION LINK &lt;<br/>
            Questions about CropGuard Neural Intelligence? Need support with threat detection protocols? 
            Our quantum assistance network is ready to interface.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div className="neural-glass p-10 rounded-sm border border-primary/30 animate-hologram">
            <h2 className="text-3xl font-bold mb-8 text-cyber text-primary">TRANSMIT MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 text-cyber">
                    OPERATOR ID
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/80 border border-primary/30 rounded-sm cyber-focus transition-all text-neural"
                    placeholder="Your operator designation"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 text-cyber">
                    NEURAL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card/80 border border-primary/30 rounded-sm cyber-focus transition-all text-neural"
                    placeholder="operator@neural.domain"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3 text-cyber">
                  PRIORITY LEVEL
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card/80 border border-primary/30 rounded-sm cyber-focus transition-all text-neural"
                >
                  <option value="">Select priority level</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Protocol</option>
                  <option value="feedback">System Feedback</option>
                  <option value="other">Other Classification</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 text-cyber">
                  NEURAL TRANSMISSION
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card/80 border border-primary/30 rounded-sm cyber-focus transition-all resize-none text-neural"
                  placeholder="Transmit your message through the neural network..."
                />
              </div>

              <Button 
                type="submit" 
                variant="cyber"
                size="lg"
                className="w-full"
              >
                <Send className="h-5 w-5 mr-3" />
                TRANSMIT MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cyber text-accent">COMMUNICATION PROTOCOLS</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-neural text-lg">
                &gt; DEDICATED SUPPORT NETWORK ACTIVE &lt;<br/>
                We're committed to providing quantum-enhanced support for all your agricultural intelligence needs. 
                Interface with us through any of the following neural channels.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="card-cyber group"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center flex-shrink-0 animate-pulse-cyber group-hover:animate-glow">
                        <info.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 text-cyber text-primary">{info.title}</h3>
                        <p className="text-accent font-bold mb-3 text-neural">{info.details}</p>
                        <p className="text-muted-foreground text-sm text-neural">&gt; {info.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="neural-glass p-8 rounded-sm border border-accent/30">
              <h3 className="text-xl font-bold mb-6 text-cyber text-accent">QUICK NEURAL ACCESS</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; How precise is the threat detection system?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    Our quantum AI core achieves 99.7% precision across over 500 agricultural threat classifications, continuously evolving with new data protocols.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; What neural formats are compatible?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    We support JPG, PNG, and WebP neural formats. Images should be quantum-optimized and well-illuminated for maximum analysis efficiency.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; Is mobile neural interface available?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    Currently, we offer quantum web-based platform optimized for mobile neural devices. Native interface app is in development protocols.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
