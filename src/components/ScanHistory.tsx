import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { ScanResult } from '../pages/Index';

interface ScanHistoryProps {
  scans: ScanResult[];
}

export const ScanHistory = ({ scans }: ScanHistoryProps) => {
  return (
    <Card className="p-6 cyber-glass border-primary/30">
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="h-5 w-5 text-primary animate-pulse-cyber" />
        <h3 className="text-xl font-bold text-cyber text-primary">SCAN HISTORY</h3>
        <Badge variant="outline" className="text-neural">{scans.length}</Badge>
      </div>
      
      <div className="space-y-4">
        {scans.map((scan) => {
          const isClean = scan.result.toLowerCase().includes('clean') || 
                         scan.result.toLowerCase().includes('no threat') ||
                         scan.result.toLowerCase().includes('safe');
          
          return (
            <div
              key={scan.id}
              className="flex items-center space-x-4 p-4 cyber-glass rounded-sm border border-primary/20 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-sm animate-pulse-cyber group-hover:animate-glow">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {isClean ? (
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                  )}
                  <p className="font-medium text-cyber text-primary truncate">{scan.result}</p>
                </div>
                <p className="text-sm text-muted-foreground text-neural">
                  {scan.timestamp.toLocaleString()}
                </p>
              </div>
              
              {scan.confidence && (
                <div className="text-right">
                  <p className="text-sm font-medium text-accent">
                    {Math.round(scan.confidence * 100)}%
                  </p>
                  <p className="text-xs text-muted-foreground text-neural">confidence</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};