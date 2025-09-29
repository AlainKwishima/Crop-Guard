
import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ImageUpload } from '../components/ImageUpload';
import { PredictionResult } from '../components/PredictionResult';
import { PredictionHistory } from '../components/PredictionHistory';
import { Footer } from '../components/Footer';

export interface Prediction {
  id: string;
  result: string;
  image: string;
  timestamp: Date;
  confidence?: number;
}

const Index = () => {
  const [currentPrediction, setCurrentPrediction] = useState<Prediction | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = async (file: File) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Create image URL for preview
      const imageUrl = URL.createObjectURL(file);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      const newPrediction: Prediction = {
        id: Date.now().toString(),
        result: data.result,
        image: imageUrl,
        timestamp: new Date(),
        confidence: data.confidence || undefined,
      };

      setCurrentPrediction(newPrediction);
      setPredictions(prev => [newPrediction, ...prev]);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Prediction failed. Please try again.';
      setError(errorMessage);
      console.error('Prediction error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCurrentPrediction(null);
    setError(null);
  };

  return (
    <div className="min-h-screen neural-network-bg matrix-rain">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-16 relative z-10">
        <Hero />
        
        <div className="max-w-5xl mx-auto">
          <ImageUpload 
            onUpload={handlePrediction}
            isLoading={isLoading}
            onReset={handleReset}
            disabled={isLoading}
          />

          {error && (
            <div className="mt-8 p-6 cyber-glass border border-destructive/50 rounded-sm animate-pulse-cyber">
              <p className="text-destructive text-center font-bold text-cyber">[ERROR] {error}</p>
            </div>
          )}

          {currentPrediction && (
            <div className="mt-12">
              <PredictionResult prediction={currentPrediction} />
            </div>
          )}

          {predictions.length > 0 && (
            <div className="mt-16">
              <PredictionHistory predictions={predictions} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
