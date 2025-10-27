import React, { useState } from 'react';
import { Trash, Upload, Search, Grid, List, X, Copy, Check } from 'lucide-react';

const ImageUploader = ({ label, onImageUpload }) => {
  const [preview, setPreview] = useState(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="space-y-3">
      <label className="block">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 hover:bg-green-50/30 transition-all duration-300 cursor-pointer group">
          <Upload className="mx-auto text-gray-400 group-hover:text-green-500 transition-colors mb-3" size={32} />
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-xs text-gray-400">Click to browse or drag and drop</p>
        </div>
        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
      </label>
      {preview && (
        <div className="relative rounded-xl overflow-hidden">
          <img src={preview} alt="Preview" className="w-full h-32 object-cover" />
        </div>
      )}
    </div>
  );
};

const MediaGallery = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [copied, setCopied] = useState(false);
  
  const [mediaItems, setMediaItems] = useState([
    { id: 1, name: 'school-building.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', size: '1.2 MB', date: '2023-05-15' },
    { id: 2, name: 'students-in-class.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400', size: '0.8 MB', date: '2023-06-20' },
    { id: 3, name: 'graduation-ceremony.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', size: '1.5 MB', date: '2023-07-10' },
    { id: 4, name: 'sports-day.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400', size: '2.1 MB', date: '2023-08-05' },
    { id: 5, name: 'library.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400', size: '0.9 MB', date: '2023-09-12' },
    { id: 6, name: 'science-lab.jpg', type: 'image', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400', size: '1.3 MB', date: '2023-10-18' },
  ]);
  
  const filteredMedia = mediaItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleMediaUpload = (imageUrl) => {
    const newMedia = {
      id: Date.now(),
      name: `image-${Date.now()}.jpg`,
      type: 'image',
      url: imageUrl,
      size: '1.0 MB',
      date: new Date().toISOString().split('T')[0]
    };
    
    setMediaItems([newMedia, ...mediaItems]);
  };
  
  const handleDeleteMedia = (id) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
    if (selectedMedia && selectedMedia.id === id) {
      setSelectedMedia(null);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedMedia.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Media Gallery</h1>
            <p className="text-gray-500 text-sm">Manage your school's media assets</p>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Upload size={16} className="text-white" />
                </div>
                Upload Media
              </h2>
              <ImageUploader 
                label="Select Image to Upload"
                onImageUpload={handleMediaUpload}
              />
              <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100">
                <p className="text-xs text-green-700 leading-relaxed">
                  <strong>Tip:</strong> Upload high-quality images (JPG, PNG) for best results. Max size: 5MB
                </p>
              </div>
            </div>
          </div>
          
          {/* Media Browser */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Media Library</h2>
                  <p className="text-sm text-gray-500">{filteredMedia.length} items</p>
                </div>
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search media..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                </div>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredMedia.map(item => (
                    <div 
                      key={item.id} 
                      className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        selectedMedia?.id === item.id 
                          ? 'border-green-500 shadow-lg scale-[1.02]' 
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                      onClick={() => setSelectedMedia(item)}
                    >
                      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img 
                          src={item.url} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-sm font-medium truncate text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.size} • {item.date}</p>
                      </div>
                      <button 
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:scale-110 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMedia(item.id);
                        }}
                      >
                        <Trash size={14} />
                      </button>
                      {selectedMedia?.id === item.id && (
                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg font-medium shadow-lg">
                          Selected
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredMedia.map(item => (
                    <div 
                      key={item.id} 
                      className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        selectedMedia?.id === item.id 
                          ? 'border-green-500 bg-green-50 shadow-md' 
                          : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedMedia(item)}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                        <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.size} • {item.date}</p>
                      </div>
                      <button 
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMedia(item.id);
                        }}
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {filteredMedia.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-gray-400" size={24} />
                  </div>
                  <p className="text-gray-500 font-medium">No media items found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your search</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Selected Media Details */}
        {selectedMedia && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Grid size={16} className="text-white" />
                </div>
                Media Details
              </h2>
              <button 
                onClick={() => setSelectedMedia(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 flex items-center justify-center">
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.name} 
                  className="max-h-64 rounded-lg shadow-md" 
                />
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">File Name</p>
                    <p className="font-medium text-gray-900 break-words">{selectedMedia.name}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">File Type</p>
                    <p className="font-medium text-gray-900">{selectedMedia.type}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">File Size</p>
                    <p className="font-medium text-gray-900">{selectedMedia.size}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Upload Date</p>
                    <p className="font-medium text-gray-900">{selectedMedia.date}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">URL</p>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={selectedMedia.url} 
                      readOnly 
                      className="flex-grow p-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none"
                    />
                    <button 
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg'
                      }`}
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;