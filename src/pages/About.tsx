
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Leaf, Target, Users, Award, Brain, Microscope, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms trained on thousands of plant disease images."
    },
    {
      icon: Microscope,
      title: "Scientific Accuracy",
      description: "Developed in collaboration with agricultural experts and plant pathologists."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Supporting farmers worldwide in maintaining healthy crops and reducing losses."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Researcher",
      bio: "PhD in Plant Pathology with 15+ years in agricultural AI development."
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack engineer specializing in machine learning applications."
    },
    {
      name: "Dr. James Wilson",
      role: "Agricultural Advisor",
      bio: "Former agricultural extension specialist with expertise in crop diseases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-xl">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">PlantDoc AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize agriculture through artificial intelligence, 
            helping farmers and plant enthusiasts detect diseases early and maintain healthier crops.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Plant diseases cause billions of dollars in crop losses annually. Our AI-powered platform 
              democratizes access to expert plant disease diagnosis, enabling early detection and treatment 
              that can save entire harvests.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By combining cutting-edge computer vision with agricultural expertise, we're making 
              professional-grade plant health assessment accessible to farmers of all sizes, from 
              backyard gardeners to large-scale agricultural operations.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-green-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Images Analyzed</span>
                <span className="text-2xl font-bold text-green-600">500K+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Diseases Detected</span>
                <span className="text-2xl font-bold text-green-600">150+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Farmers Helped</span>
                <span className="text-2xl font-bold text-green-600">25K+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Accuracy Rate</span>
                <span className="text-2xl font-bold text-green-600">94%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PlantDoc AI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines advanced technology with agricultural expertise to deliver 
              accurate, actionable insights for plant health management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of AI researchers, developers, and agricultural experts 
              work together to advance plant health technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
