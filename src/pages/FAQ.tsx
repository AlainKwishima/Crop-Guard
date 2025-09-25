import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is CropGuard AI's disease detection?",
      answer: "Our AI model achieves 95%+ accuracy across major crop diseases. We continuously train our models on diverse datasets from farms worldwide to ensure reliable detection across different growing conditions and geographic regions."
    },
    {
      question: "What types of crops and diseases can you detect?",
      answer: "CropGuard AI currently supports detection for 50+ crop types including tomatoes, corn, wheat, rice, soybeans, and citrus fruits. We can identify over 200 plant diseases, nutrient deficiencies, and pest damage patterns."
    },
    {
      question: "Can I use this with drone footage from my farm?",
      answer: "Absolutely! CropGuard AI is specifically optimized for drone and aerial imagery. Simply upload your drone photos or connect your drone's camera feed for real-time analysis across large field areas."
    },
    {
      question: "How do I get started with the platform?",
      answer: "Sign up for a free account and start with our Starter plan. Upload your first plant image or connect your webcam to begin analysis. Our guided tutorial will walk you through the process step-by-step."
    },
    {
      question: "Is my farm data secure and private?",
      answer: "Yes, we take data security seriously. All images and farm data are encrypted in transit and at rest. We comply with international privacy standards and never share your data with third parties without explicit consent."
    },
    {
      question: "What image formats and quality do you support?",
      answer: "We support JPEG, PNG, and WebP formats. For best results, images should be at least 512x512 pixels with clear visibility of plant leaves and affected areas. Higher resolution images (1080p+) provide more accurate analysis."
    },
    {
      question: "Can I integrate CropGuard AI with my existing farm management software?",
      answer: "Yes! We provide REST APIs and webhooks for seamless integration with popular farm management systems. Our Enterprise plan includes custom integration support and dedicated technical assistance."
    },
    {
      question: "How quickly do I get analysis results?",
      answer: "Most analyses complete within 2-5 seconds. For batch processing of drone footage or large image sets, results are typically available within minutes depending on the volume."
    },
    {
      question: "Do you offer support for multiple languages?",
      answer: "Currently, our platform supports English, Spanish, Portuguese, and French. We're continuously expanding language support based on our global farming community's needs."
    },
    {
      question: "What if the AI misidentifies a disease?",
      answer: "You can provide feedback on incorrect predictions through our platform. This helps improve our models. Professional and Enterprise users also have access to expert agronomist review for complex cases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to know about CropGuard AI and how it can help protect your crops.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of CropGuard AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">Contact Support</Button>
              <Button variant="outline">Join Community</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;