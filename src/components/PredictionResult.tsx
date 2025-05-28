
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Prediction } from '../pages/Index';

interface PredictionResultProps {
  prediction: Prediction;
}

export const PredictionResult = ({ prediction }: PredictionResultProps) => {
  const isHealthy = prediction.result.toLowerCase().includes('healthy') || 
                   prediction.result.toLowerCase().includes('no disease');

  const getIcon = () => {
    if (isHealthy) {
      return <CheckCircle className="h-6 w-6 text-green-600" />;
    } else {
      return <AlertTriangle className="h-6 w-6 text-orange-600" />;
    }
  };

  const getStatusColor = () => {
    return isHealthy ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <Card className="p-6 bg-white shadow-lg animate-fade-in">
      <div className="flex items-start space-x-4">
        <img
          src={prediction.image}
          alt="Analyzed plant"
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
        />
        
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            {getIcon()}
            <h3 className="text-xl font-bold text-gray-900">Analysis Complete</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Diagnosis:</label>
              <p className="text-lg font-semibold text-gray-900 mt-1">{prediction.result}</p>
            </div>
            
            {prediction.confidence && (
              <div>
                <label className="text-sm font-medium text-gray-600">Confidence:</label>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {Math.round(prediction.confidence * 100)}%
                </p>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Badge className={getStatusColor()}>
                {isHealthy ? 'Healthy Plant' : 'Disease Detected'}
              </Badge>
              <span className="text-sm text-gray-500">
                {prediction.timestamp.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {!isHealthy && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Recommended Actions</h4>
              <p className="text-sm text-blue-800">
                Consult with a local agricultural expert for specific treatment recommendations. 
                Early intervention is key to preventing disease spread.
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
