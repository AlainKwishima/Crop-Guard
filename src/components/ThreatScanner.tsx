import { useState, useRef, useCallback } from 'react';
import { Upload, X, Loader, FileSearch, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ThreatScannerProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
  onReset: () => void;
  disabled?: boolean;
}

export const ThreatScanner = ({ onUpload, isLoading, onReset, disabled }: ThreatScannerProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File) => {
    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB');
      return;
    }

    setSelectedFile(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onReset();
  };

  const getFileIcon = () => {
    if (!selectedFile) return null;
    const ext = selectedFile.name.split('.').pop()?.toLowerCase();
    return <FileSearch className="h-12 w-12 text-primary" />;
  };

  return (
    <Card className="p-8 cyber-glass border-primary/30">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-cyber text-primary mb-2">NEURAL THREAT SCANNER</h2>
        <p className="text-muted-foreground text-neural">&gt; Upload files for quantum threat analysis &lt;</p>
        <p className="text-sm text-accent font-medium mt-2 text-cyber">
          ⚡ Advanced malware detection • Vulnerability scanning • Real-time analysis
        </p>
      </div>

      {!selectedFile ? (
        <div className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-sm p-12 text-center transition-all duration-200 cyber-border ${
              isDragOver
                ? 'border-accent bg-accent/10 animate-glow'
                : 'border-primary/50 hover:border-accent hover:bg-primary/5'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center animate-pulse-cyber">
                <Upload className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-medium text-cyber text-primary mb-1">
                  &gt; DRAG FILE OR CLICK TO SELECT &lt;
                </p>
                <p className="text-sm text-muted-foreground text-neural">
                  EXE, ZIP, PDF, JS, DLL up to 50MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={() => fileInputRef.current?.click()}
              variant="cyber" 
              size="lg"
            >
              <Shield className="h-4 w-4 mr-2" />
              BROWSE FILES
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative cyber-glass p-6 rounded-sm border border-primary/30 animate-pulse-cyber">
            <div className="flex items-center space-x-4">
              {getFileIcon()}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-cyber text-primary truncate">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground text-neural">
                  Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex-shrink-0"
                onClick={handleReset}
                disabled={disabled}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleReset}
              variant="outline"
              disabled={disabled}
            >
              CHOOSE DIFFERENT FILE
            </Button>
            <Button
              onClick={handleUpload}
              disabled={disabled || isLoading}
              variant="neural"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  SCANNING...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  INITIATE SCAN
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept=".exe,.zip,.pdf,.js,.dll,.py,.jar,.apk,.doc,.docx,.xls,.xlsx"
        className="hidden"
      />
    </Card>
  );
};