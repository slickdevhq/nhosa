import React, { useState } from 'react';
import { Upload, X, Check, AlertCircle } from 'lucide-react';

const ImageUploader = ({ onImageUpload, label = "Upload Image" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const processFile = (file) => {
    // Reset states
    setError(null);
    setSuccess(false);
    
    // Check file type
    if (!file.type.match('image.*')) {
      setError('Please select an image file (png, jpg, jpeg, gif)');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
    
    // Simulate upload
    uploadImage(file);
  };

  const uploadImage = (file) => {
    setUploading(true);
    
    // In a real application, this would be an API call to upload the image
    // For demo purposes, we're simulating an upload with a timeout
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
      
      // Pass the image URL (or file object) to the parent component
      if (onImageUpload) {
        // In a real app, this would be the URL returned from the server
        onImageUpload(preview);
      }
    }, 1500);
  };

  const resetUploader = () => {
    setPreview(null);
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      
      {!preview ? (
        <div 
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
            isDragging 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-green-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input').click()}
        >
          <Upload className="w-10 h-10 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 text-center mb-1">
            Drag and drop an image here, or click to select
          </p>
          <p className="text-xs text-gray-400 text-center">
            PNG, JPG, JPEG or GIF (max. 5MB)
          </p>
          <input 
            id="file-input" 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileInput}
          />
        </div>
      ) : (
        <div className="relative border rounded-lg overflow-hidden">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-48 object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {uploading ? (
              <div className="text-white flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2"></div>
                <span>Uploading...</span>
              </div>
            ) : success ? (
              <div className="text-white flex flex-col items-center">
                <div className="bg-green-500 rounded-full p-2 mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <span>Upload successful!</span>
                <button 
                  onClick={resetUploader}
                  className="mt-3 px-3 py-1 bg-white text-gray-800 rounded-md text-sm hover:bg-gray-100"
                >
                  Upload another
                </button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <button 
                  onClick={resetUploader}
                  className="px-3 py-1 bg-white text-gray-800 rounded-md hover:bg-gray-100 flex items-center"
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-2 flex items-center text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;