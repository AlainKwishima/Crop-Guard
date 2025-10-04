import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is NEXUS SHIELD's threat detection?",
      answer: "Our quantum AI core achieves 98%+ accuracy in detecting malware, vulnerabilities, and cyber threats. We continuously train our neural networks on the latest threat intelligence from global security operations to ensure reliable detection across all attack vectors."
    },
    {
      question: "What types of threats can NEXUS SHIELD detect?",
      answer: "NEXUS SHIELD identifies 300+ threat categories including malware (trojans, ransomware, rootkits), vulnerabilities (zero-days, CVEs), phishing attempts, SQL injections, XSS attacks, DDoS patterns, and advanced persistent threats (APTs)."
    },
    {
      question: "Can I integrate NEXUS SHIELD with my existing security infrastructure?",
      answer: "Absolutely! NEXUS SHIELD provides REST APIs and webhooks for seamless integration with SIEM systems, firewalls, endpoint protection platforms, and security orchestration tools. Our Enterprise plan includes custom integration support."
    },
    {
      question: "How do I get started with the platform?",
      answer: "Sign up for a free account and start with our Neural Core plan. Upload suspicious files, scan URLs, or connect your network endpoints to begin real-time threat analysis. Our guided tutorial walks you through the complete security protocol."
    },
    {
      question: "Is my security data protected and confidential?",
      answer: "Yes, we prioritize data sovereignty. All threat scans and security data are quantum-encrypted in transit and at rest. We comply with SOC 2, ISO 27001, and GDPR standards. Your security intelligence is never shared with third parties."
    },
    {
      question: "What file formats can NEXUS SHIELD analyze?",
      answer: "We support all major executable and document formats including .exe, .dll, .pdf, .doc, .xls, .zip, .js, .sh, scripts, and more. Files up to 500MB can be scanned. Binary, source code, and container image analysis is also supported."
    },
    {
      question: "Can I integrate NEXUS SHIELD with my DevSecOps pipeline?",
      answer: "Yes! We provide CI/CD plugins for Jenkins, GitLab, GitHub Actions, and Azure DevOps. Automatically scan code commits, containers, and dependencies before deployment. Our Enterprise plan includes custom pipeline integration."
    },
    {
      question: "How quickly do I get threat analysis results?",
      answer: "Most threat scans complete within 2-5 seconds using our quantum processing cores. Deep behavioral analysis for advanced threats may take 10-30 seconds. Batch scanning of large codebases completes within minutes."
    },
    {
      question: "Do you offer 24/7 security operations support?",
      answer: "Professional and Enterprise plans include 24/7 access to our Security Operations Center (SOC). Critical threat alerts trigger immediate incident response protocols with our cyber defense specialists."
    },
    {
      question: "What if NEXUS SHIELD flags a false positive?",
      answer: "You can provide feedback on detections through our platform to improve accuracy. Enterprise users have access to our threat intelligence team for expert review of complex cases and custom rule creation."
    }
  ];

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in text-cyber">
            <span className="gradient-text">NEURAL FAQ</span>
            <span className="block text-foreground text-3xl md:text-5xl">DATABASE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-neural">
            &gt; ACCESSING KNOWLEDGE MATRIX &lt;<br/>
            Everything you need to interface with NEXUS SHIELD's quantum threat intelligence protocols.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="cyber-border animate-pulse-cyber group data-stream"
              >
                <div className="cyber-glass p-6 rounded-sm">
                  <AccordionTrigger className="text-left text-lg font-bold py-6 hover:no-underline text-cyber text-primary group-hover:text-accent transition-all duration-300">
                    &gt; {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-neural">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
          <div className="neural-glass p-10 rounded-sm max-w-3xl mx-auto animate-hologram">
            <h3 className="text-3xl font-bold mb-6 text-cyber text-primary">STILL NEED ASSISTANCE?</h3>
            <p className="text-muted-foreground mb-8 text-neural text-lg">
              &gt; OUR SUPPORT NEURAL NETWORK IS STANDING BY &lt;<br/>
              Connect with our quantum assistance protocols for maximum optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cyber" size="lg">CONTACT SUPPORT MATRIX</Button>
              <Button variant="neural" size="lg">JOIN NEURAL NETWORK</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;