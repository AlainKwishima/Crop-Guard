
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
      title: "SECURE COMMUNICATION",
      details: "security@nexusshield.ai",
      description: "Encrypted email support - response within 2 hours for critical incidents"
    },
    {
      icon: Phone,
      title: "24/7 SOC HOTLINE",
      details: "+1 (555) 789-SECURE",
      description: "Security Operations Center available 24/7/365"
    },
    {
      icon: MapPin,
      title: "SECURITY COMMAND CENTER",
      details: "Cyber Defense Hub, Silicon Valley, CA",
      description: "Schedule on-site security consultation and assessment"
    },
    {
      icon: Clock,
      title: "RESPONSE TIMES",
      details: "Critical: <2hrs | High: <4hrs | Medium: <24hrs",
      description: "Emergency incident response available for Enterprise customers"
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
            &gt; ESTABLISHING SECURE CHANNEL &lt;<br/>
            Questions about NEXUS SHIELD? Need support with threat detection or security operations? 
            Our security operations center is standing by for immediate assistance.
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
                &gt; SECURITY OPERATIONS CENTER ACTIVE &lt;<br/>
                We're committed to providing enterprise-grade security support for all your threat detection and incident response needs. 
                Contact us through any of the following secure channels.
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
              <h3 className="text-xl font-bold mb-6 text-cyber text-accent">QUICK SECURITY FAQ</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; How accurate is NEXUS SHIELD threat detection?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    Our quantum AI achieves 98%+ accuracy across 300+ threat categories including malware, vulnerabilities, and attack patterns with continuous threat intelligence updates.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; What file formats can be scanned?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    We support 50+ file formats including executables (.exe, .dll), documents (.pdf, .doc), scripts (.js, .py, .sh), archives (.zip, .rar), and container images.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-sm font-bold text-foreground hover:text-primary transition-colors text-cyber">
                    &gt; Is API integration available?
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground pl-4 text-neural">
                    Yes, Professional and Enterprise plans include full REST API access with comprehensive documentation for SIEM, SOAR, and CI/CD pipeline integrations.
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
