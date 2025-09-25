import { MessageSquare, Users, Heart, Trophy, ArrowRight, Github, Twitter } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Community = () => {
  const stats = [
    { label: "Active Farmers", value: "25,000+", icon: <Users className="h-8 w-8" /> },
    { label: "Crops Protected", value: "1M+ acres", icon: <Heart className="h-8 w-8" /> },
    { label: "Diseases Detected", value: "500K+", icon: <Trophy className="h-8 w-8" /> },
    { label: "Success Stories", value: "15,000+", icon: <MessageSquare className="h-8 w-8" /> }
  ];

  const communityChannels = [
    {
      name: "Discord Server",
      description: "Join our active Discord community for real-time discussions, Q&A, and peer support.",
      members: "12K+ members",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "#",
      primary: true
    },
    {
      name: "GitHub",
      description: "Contribute to open-source tools, report issues, and access our API documentation.",
      members: "2K+ contributors", 
      icon: <Github className="h-6 w-6" />,
      link: "#"
    },
    {
      name: "Twitter",
      description: "Follow us for updates, tips, and success stories from farmers worldwide.",
      members: "45K+ followers",
      icon: <Twitter className="h-6 w-6" />,
      link: "#"
    }
  ];

  const successStories = [
    {
      name: "Maria Santos",
      location: "Brazil",
      crop: "Coffee",
      story: "Increased yield by 30% after early blight detection using CropGuard AI",
      avatar: "MS"
    },
    {
      name: "John Peterson",  
      location: "Iowa, USA",
      crop: "Corn",
      story: "Saved $50K in crop losses through early pest identification",
      avatar: "JP"
    },
    {
      name: "Raj Patel",
      location: "India", 
      crop: "Rice",
      story: "Improved rice quality and reduced pesticide use by 40%",
      avatar: "RP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join Our Growing
            <span className="gradient-text block">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with farmers, agronomists, and AI enthusiasts who are revolutionizing agriculture together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center hover-scale border-border">
              <CardContent className="pt-6">
                <div className="text-primary mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Join the Conversation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <Card 
                key={channel.name} 
                className={`hover-scale cursor-pointer group ${
                  channel.primary ? 'border-primary ring-1 ring-primary/20' : 'border-border'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${
                      channel.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      {channel.icon}
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <CardTitle>{channel.name}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{channel.members}</span>
                    <Button 
                      variant={channel.primary ? "default" : "outline"} 
                      size="sm"
                      className={channel.primary ? "btn-primary" : ""}
                    >
                      Join Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={story.name} className="hover-scale border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {story.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.location} • {story.crop}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Share Your Story?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of farmers who are transforming agriculture with AI-powered crop protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">Start Your Journey</Button>
                <Button variant="outline">Share Your Story</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;