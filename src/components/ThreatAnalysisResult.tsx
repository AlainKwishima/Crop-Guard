import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Info, Shield } from 'lucide-react';
import { ScanResult } from '../pages/Index';

interface ThreatAnalysisResultProps {
  scan: ScanResult;
}

export const ThreatAnalysisResult = ({ scan }: ThreatAnalysisResultProps) => {
  const isClean = scan.result.toLowerCase().includes('clean') || 
                 scan.result.toLowerCase().includes('no threat') ||
                 scan.result.toLowerCase().includes('safe');

  const getIcon = () => {
    if (isClean) {
      return <CheckCircle className="h-6 w-6 text-accent" />;
    } else {
      return <AlertTriangle className="h-6 w-6 text-destructive" />;
    }
  };

  const getStatusColor = () => {
    return isClean ? 'bg-accent/20 text-accent' : 'bg-destructive/20 text-destructive';
  };

  const getSeverityLevel = () => {
    if (isClean) return 'SECURE';
    if (scan.result.toLowerCase().includes('critical')) return 'CRITICAL';
    if (scan.result.toLowerCase().includes('high')) return 'HIGH RISK';
    if (scan.result.toLowerCase().includes('medium')) return 'MEDIUM RISK';
    return 'LOW RISK';
  };

  return (
    <Card className="p-6 cyber-glass border-primary/30 animate-fade-in">
      <div className="flex items-start space-x-4">
        <div className="cyber-glass p-4 rounded-sm border border-primary/20">
          <Shield className="h-12 w-12 text-primary animate-pulse-cyber" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            {getIcon()}
            <h3 className="text-xl font-bold text-cyber text-primary">SCAN COMPLETE</h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-muted-foreground text-neural">THREAT ASSESSMENT:</label>
              <p className="text-lg font-semibold text-cyber text-primary mt-1">{scan.result}</p>
            </div>
            
            {scan.confidence && (
              <div>
                <label className="text-sm font-medium text-muted-foreground text-neural">CONFIDENCE LEVEL:</label>
                <p className="text-lg font-semibold text-accent mt-1">
                  {Math.round(scan.confidence * 100)}%
                </p>
              </div>
            )}
            
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <Badge className={getStatusColor()}>
                {getSeverityLevel()}
              </Badge>
              <Badge variant="outline" className="text-neural">
                {isClean ? 'NO THREATS DETECTED' : 'THREAT IDENTIFIED'}
              </Badge>
              <span className="text-sm text-muted-foreground text-neural">
                {scan.timestamp.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {!isClean && (
        <div className="mt-6 p-4 cyber-glass rounded-sm border border-destructive/30 animate-pulse-cyber">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-cyber text-destructive mb-1">RECOMMENDED ACTIONS</h4>
              <p className="text-sm text-neural">
                &gt; Quarantine the file immediately. Do not execute or open. 
                Consult with your security team for threat mitigation protocols. 
                Early containment prevents system compromise &lt;
              </p>
            </div>
          </div>
        </div>
      )}

      {isClean && (
        <div className="mt-6 p-4 cyber-glass rounded-sm border border-accent/30">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-cyber text-accent mb-1">SYSTEM STATUS: SECURE</h4>
              <p className="text-sm text-neural">
                &gt; No threats detected. File appears safe. 
                Continue monitoring for behavioral anomalies &lt;
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};