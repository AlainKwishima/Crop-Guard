
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Prediction } from '../pages/Index';

interface PredictionHistoryProps {
  predictions: Prediction[];
}

export const PredictionHistory = ({ predictions }: PredictionHistoryProps) => {
  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="h-5 w-5 text-gray-600" />
        <h3 className="text-xl font-bold text-gray-900">Recent Analyses</h3>
        <Badge variant="secondary">{predictions.length}</Badge>
      </div>
      
      <div className="space-y-4">
        {predictions.map((prediction) => {
          const isHealthy = prediction.result.toLowerCase().includes('healthy') || 
                           prediction.result.toLowerCase().includes('no disease');
          
          return (
            <div
              key={prediction.id}
              className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img
                src={prediction.image}
                alt="Plant analysis"
                className="w-16 h-16 object-cover rounded-md flex-shrink-0"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {isHealthy ? (
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                  )}
                  <p className="font-medium text-gray-900 truncate">{prediction.result}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {prediction.timestamp.toLocaleString()}
                </p>
              </div>
              
              {prediction.confidence && (
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {Math.round(prediction.confidence * 100)}%
                  </p>
                  <p className="text-xs text-gray-500">confidence</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
