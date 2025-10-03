import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ThreatScanner } from '../components/ThreatScanner';
import { ThreatAnalysisResult } from '../components/ThreatAnalysisResult';
import { ScanHistory } from '../components/ScanHistory';
import { Footer } from '../components/Footer';

export interface ScanResult {
  id: string;
  result: string;
  filename: string;
  timestamp: Date;
  confidence?: number;
}

// Keep old interface for backward compatibility
export interface Prediction extends ScanResult {
  image: string;
}

const Index = () => {
  const [currentScan, setCurrentScan] = useState<ScanResult | null>(null);
  const [scans, setScans] = useState<ScanResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulated threat analysis - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock threat detection results
      const threats = [
        'SYSTEM SECURE - No threats detected',
        'MALWARE DETECTED - Trojan.Generic.KD.12345',
        'SYSTEM SECURE - File is clean',
        'VULNERABILITY FOUND - CVE-2024-1234 SQL Injection',
        'SYSTEM SECURE - No malicious code detected',
        'RANSOMWARE DETECTED - Critical threat level',
        'PHISHING ATTEMPT - Suspicious URLs detected'
      ];
      
      const randomResult = threats[Math.floor(Math.random() * threats.length)];
      const confidence = 0.85 + Math.random() * 0.14; // 85-99%
      
      const newScan: ScanResult = {
        id: Date.now().toString(),
        result: randomResult,
        filename: file.name,
        timestamp: new Date(),
        confidence: confidence,
      };

      setCurrentScan(newScan);
      setScans(prev => [newScan, ...prev]);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Scan failed. Please try again.';
      setError(errorMessage);
      console.error('Scan error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentScan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-16 relative z-10">
        <Hero />
        
        <div className="max-w-5xl mx-auto">
          <ThreatScanner 
            onUpload={handleScan}
            isLoading={isLoading}
            onReset={handleReset}
            disabled={isLoading}
          />

          {error && (
            <div className="mt-8 p-6 cyber-glass border border-destructive/50 rounded-sm animate-pulse-cyber">
              <p className="text-destructive text-center font-bold text-cyber">&gt; [ERROR] {error} &lt;</p>
            </div>
          )}

          {currentScan && (
            <div className="mt-12">
              <ThreatAnalysisResult scan={currentScan} />
            </div>
          )}

          {scans.length > 0 && (
            <div className="mt-16">
              <ScanHistory scans={scans} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
