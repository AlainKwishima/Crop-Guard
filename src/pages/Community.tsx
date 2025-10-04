import { MessageSquare, Users, Heart, Trophy, ArrowRight, Github, Twitter } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Community = () => {
  const stats = [
    { label: "SECURITY RESEARCHERS", value: "250K+", icon: <Users className="h-8 w-8" /> },
    { label: "ORGANIZATIONS PROTECTED", value: "15K+", icon: <Heart className="h-8 w-8" /> },
    { label: "THREATS NEUTRALIZED", value: "50M+", icon: <Trophy className="h-8 w-8" /> },
    { label: "VULNERABILITIES FOUND", value: "100K+", icon: <MessageSquare className="h-8 w-8" /> }
  ];

  const communityChannels = [
    {
      name: "SECURITY DISCORD",
      description: "Join our Discord server for real-time threat intelligence sharing, security research discussions, and community support.",
      members: "100K+ security researchers",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "#",
      primary: true
    },
    {
      name: "GITHUB SECURITY LAB",
      description: "Contribute to open-source security tools, report vulnerabilities, access threat intelligence APIs, and collaborate on detection rules.",
      members: "25K+ contributors", 
      icon: <Github className="h-6 w-6" />,
      link: "#"
    },
    {
      name: "TWITTER THREAT FEED",
      description: "Follow for real-time threat alerts, zero-day disclosures, security research updates, and success stories from the field.",
      members: "300K+ followers",
      icon: <Twitter className="h-6 w-6" />,
      link: "#"
    }
  ];

  const successStories = [
    {
      name: "DR. SARAH CHEN",
      location: "CYBERSEC FINTECH",
      organization: "GLOBAL BANKING",
      story: "Detected and neutralized APT group targeting financial infrastructure, preventing $50M in potential losses using NEXUS SHIELD",
      avatar: "SC"
    },
    {
      name: "JAMES MORRISON",  
      location: "SOC DIRECTOR",
      organization: "HEALTHCARE SYSTEMS",
      story: "Identified ransomware campaign 48 hours before deployment, protecting 500K patient records and critical medical systems",
      avatar: "JM"
    },
    {
      name: "PRIYA KUMAR",
      location: "THREAT HUNTER", 
      organization: "E-COMMERCE PLATFORM",
      story: "Discovered zero-day SQL injection vulnerability affecting 10M users, coordinated responsible disclosure and patch deployment",
      avatar: "PK"
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
            <span className="block text-foreground text-3xl md:text-5xl">NETWORK</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-neural">
            &gt; CONNECTING CYBER DEFENSE INTELLIGENCE NODES &lt;<br/>
            Interface with security researchers, threat hunters, and SOC analysts who are defending digital infrastructure worldwide.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="card-cyber text-center group">
              <div className="pt-8 pb-8">
                <div className="text-primary mb-4 flex justify-center animate-pulse-cyber group-hover:animate-glow">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black mb-2 gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground text-neural">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Channels */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-primary">JOIN THE NEURAL MATRIX</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <div 
                key={channel.name} 
                className={`card-neural cursor-pointer group ${
                  channel.primary ? 'border-accent animate-glow' : ''
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-sm ${
                      channel.primary ? 'bg-gradient-to-br from-accent to-primary' : 'bg-gradient-to-br from-primary to-accent'
                    }`}>
                      {channel.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyber text-primary">{channel.name}</h3>
                  <p className="text-muted-foreground mb-6 text-neural">{channel.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground text-neural">{channel.members}</span>
                    <Button 
                      variant={channel.primary ? "neural" : "cyber"} 
                      size="sm"
                    >
                      INTERFACE NOW
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-accent">SUCCESS PROTOCOLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={story.name} className="card-cyber group">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center font-black text-cyber animate-pulse-cyber group-hover:animate-glow">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cyber text-primary">{story.name}</h3>
                      <p className="text-muted-foreground text-neural">{story.location} • {story.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-neural">&gt; {story.story} &lt;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="neural-glass max-w-3xl mx-auto border border-primary/30 animate-hologram p-10 rounded-sm">
            <h3 className="text-3xl font-bold mb-6 text-cyber text-primary">READY TO SHARE YOUR PROTOCOL?</h3>
            <p className="text-muted-foreground mb-8 text-neural text-lg">
              &gt; JOIN THE CYBER DEFENSE NETWORK &lt;<br/>
              Connect with thousands of security professionals protecting critical infrastructure with quantum AI-powered threat intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg">INITIATE NEURAL LINK</Button>
              <Button variant="neural" size="lg">SHARE SUCCESS PROTOCOL</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;