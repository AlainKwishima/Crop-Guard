
import { useState, useRef, useCallback } from 'react';
import { Camera, Upload, X, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ImageUploadProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
  onReset: () => void;
  disabled?: boolean;
}

export const ImageUpload = ({ onUpload, isLoading, onReset, disabled }: ImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
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
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onReset();
  };

  return (
    <Card className="p-8 bg-white/70 backdrop-blur-sm border-green-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Plant Image</h2>
        <p className="text-gray-600">Drag and drop an image or click to browse</p>
      </div>

      {!previewUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${
            isDragOver
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 hover:border-green-400 hover:bg-green-25'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Upload className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900 mb-1">
                Choose an image or drag it here
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, JPEG up to 10MB
              </p>
            </div>
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
              <Camera className="h-4 w-4 mr-2" />
              Browse Files
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 bg-white/90 hover:bg-white"
              onClick={handleReset}
              disabled={disabled}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleReset}
              variant="outline"
              disabled={disabled}
            >
              Choose Different Image
            </Button>
            <Button
              onClick={handleUpload}
              disabled={disabled || isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Plant'
              )}
            </Button>
          </div>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        className="hidden"
      />
    </Card>
  );
};
