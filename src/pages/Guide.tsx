import { Camera, Upload, Zap, CheckCircle, Play, ArrowRight, Shield } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Guide = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "THREAT UPLOAD",
      description: "Upload suspicious files, URLs, or network traffic captures for comprehensive security analysis.",
      details: [
        "Support for executables, documents, scripts, containers",
        "Drag-and-drop interface for rapid scanning",
        "Batch upload for multiple file analysis",
        "Supported formats: EXE, DLL, PDF, ZIP, JS, and 50+ more"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "QUANTUM ANALYSIS", 
      description: "Our quantum AI core performs deep behavioral analysis, signature matching, and heuristic threat detection.",
      details: [
        "Analysis completes in 2-5 seconds",
        "Neural networks examine code behavior and patterns",
        "Cross-references against 300+ threat categories",
        "98%+ accuracy across malware families and attack vectors"
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "THREAT INTELLIGENCE",
      description: "Receive detailed threat reports with risk scores, MITRE ATT&CK mapping, and remediation recommendations.",
      details: [
        "Threat classification and severity rating",
        "Indicators of Compromise (IoCs) extraction",
        "Recommended mitigation and response procedures",
        "Integration with SIEM and ticketing systems"
      ]
    }
  ];

  const tips = [
    {
      title: "FILE SCANNING BEST PRACTICES",
      items: [
        "Scan files in isolated sandbox environments before deployment",
        "Upload suspicious email attachments and downloads immediately",
        "Include file metadata and source information for context",
        "Enable behavioral analysis for advanced persistent threats"
      ]
    },
    {
      title: "NETWORK SECURITY PROTOCOLS",
      items: [
        "Integrate NEXUS SHIELD with your SIEM for automated alerting",
        "Scan all external file uploads and API inputs", 
        "Monitor outbound traffic for data exfiltration patterns",
        "Regular vulnerability scans enable proactive defense"
      ]
    },
    {
      title: "INCIDENT RESPONSE",
      items: [
        "Quarantine detected threats immediately in secure containers",
        "Document all threat indicators for forensic analysis",
        "Coordinate with security team using integrated alerting",
        "Review threat reports for lateral movement indicators"
      ]
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
            <span className="block text-foreground text-3xl md:text-5xl">OPERATION GUIDE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-neural">
            &gt; ACCESSING SECURITY PROTOCOLS &lt;<br/>
            Master the quantum threat detection interface for maximum cybersecurity protection across all attack vectors.
          </p>
          <Button variant="cyber" size="lg" className="mb-8">
            <Play className="h-5 w-5 mr-3" />
            WATCH NEURAL DEMO
          </Button>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-primary">THREE SECURITY PROTOCOLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="card-cyber group relative">
                <div className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center animate-pulse-cyber group-hover:animate-glow">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-sm flex items-center justify-center text-lg font-black text-cyber animate-glow">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyber text-primary">{step.title}</h3>
                  <p className="text-base mb-6 text-neural">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground text-neural">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0 animate-pulse" />
                        &gt; {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-accent">OPTIMIZATION PROTOCOLS</h2>
          <Tabs defaultValue="quality" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 cyber-glass p-2 rounded-sm">
              <TabsTrigger value="quality" className="text-cyber font-bold">FILE SCANNING</TabsTrigger>
              <TabsTrigger value="practices" className="text-cyber font-bold">NETWORK SECURITY</TabsTrigger>
              <TabsTrigger value="drone" className="text-cyber font-bold">INCIDENT RESPONSE</TabsTrigger>
            </TabsList>
            
            {tips.map((tip, index) => (
              <TabsContent 
                key={index}
                value={["quality", "practices", "drone"][index]} 
                className="mt-8"
              >
                <div className="neural-glass p-8 rounded-sm border border-primary/30">
                  <h3 className="text-2xl font-bold mb-6 text-cyber text-primary">{tip.title}</h3>
                  <div className="grid gap-6">
                    {tip.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-4 mt-0.5 flex-shrink-0 animate-pulse" />
                        <p className="text-muted-foreground text-neural">&gt; {item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Sample Images Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyber text-primary">THREAT DETECTION EXAMPLES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { threat: "RANSOMWARE DETECTED", type: "WANNACRY VARIANT", confidence: "99.2%" },
              { threat: "SQL INJECTION ATTEMPT", type: "WEB APPLICATION", confidence: "97.8%" },
              { threat: "TROJAN BACKDOOR", type: "REMOTE ACCESS", confidence: "98.5%" }
            ].map((sample, index) => (
              <div key={sample.threat} className="card-neural group">
                <div className="h-48 bg-gradient-to-br from-destructive/20 to-accent/20 rounded-t-sm flex items-center justify-center border-b border-primary/30">
                  <Shield className="h-16 w-16 text-destructive animate-pulse-cyber group-hover:animate-glow" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-cyber text-destructive mb-2">{sample.threat}</h3>
                  <p className="text-muted-foreground text-neural mb-4">{sample.type}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground text-neural">DETECTION CONFIDENCE:</span>
                    <span className="font-black text-accent gradient-text text-xl">{sample.confidence}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="neural-glass max-w-3xl mx-auto border border-primary/30 animate-hologram p-10 rounded-sm">
            <h3 className="text-3xl font-bold mb-6 text-cyber text-primary">READY TO ACTIVATE CYBER DEFENSE?</h3>
            <p className="text-muted-foreground mb-8 text-neural text-lg">
              &gt; INITIALIZE THREAT DETECTION SYSTEMS &lt;<br/>
              Begin protecting your digital infrastructure today with quantum AI-powered threat intelligence and real-time security monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg">
                START THREAT SCAN
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
              <Button variant="neural" size="lg">VIEW SECURITY PLANS</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;