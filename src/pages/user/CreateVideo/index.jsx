import React, { useState } from 'react';
import { FaImage, FaFont, FaUpload, FaMagic, FaPlay, FaClock, FaPalette, FaFilm, FaPaintBrush, FaCamera, FaTheaterMasks, FaCircle, FaLightbulb } from 'react-icons/fa';

const CreateVideo = () => {
  const [activeTab, setActiveTab] = useState('image');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [videoStyle, setVideoStyle] = useState('cinematic');
  const [duration, setDuration] = useState('30');
  const [isGenerating, setIsGenerating] = useState(false);

  const videoStyles = [
    { id: 'cinematic', name: 'Cinematic', color: 'violet', icon: FaFilm },
    { id: 'anime', name: 'Anime', color: 'pink', icon: FaPaintBrush },
    { id: 'realistic', name: 'Realistic', color: 'blue', icon: FaCamera },
    { id: 'cartoon', name: 'Cartoon', color: 'emerald', icon: FaTheaterMasks },
    { id: 'abstract', name: 'Abstract', color: 'orange', icon: FaCircle },
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file)
    }));
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const removeImage = (id) => {
    setUploadedImages(uploadedImages.filter(img => img.id !== id));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Video đã được tạo thành công! (Demo)');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Selection */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'image'
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FaImage size={20} />
            <span>Từ Ảnh</span>
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'text'
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FaFont size={20} />
            <span>Từ Text</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Input Area */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'image' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FaImage className="text-violet-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Upload Ảnh</h3>
              </div>
              
              {/* Upload Area */}
              <div className="mb-6">
                <label className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex flex-col items-center justify-center pt-5 pb-6 z-10">
                    <div className="w-16 h-16 mb-4 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaUpload className="text-violet-500" size={24} />
                    </div>
                    <p className="mb-2 text-lg font-semibold text-gray-700">
                      Click để upload ảnh
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, GIF (MAX. 10MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              {/* Uploaded Images Grid */}
              {uploadedImages.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4">
                    {uploadedImages.length} ảnh đã upload
                  </p>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {uploadedImages.map((img) => (
                      <div key={img.id} className="relative group">
                        <img
                          src={img.preview}
                          alt="Uploaded"
                          className="w-full h-24 object-cover rounded-xl shadow-sm border border-gray-200"
                        />
                        <button
                          onClick={() => removeImage(img.id)}
                          className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600 text-xs font-bold"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FaFont className="text-violet-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Mô Tả Video</h3>
              </div>
              
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Mô tả chi tiết video bạn muốn tạo... 

Ví dụ: 'Một video về hoàng hôn trên biển với sóng vỗ nhẹ và ánh sáng vàng rực rỡ'"
                className="w-full h-64 p-6 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none text-gray-700 placeholder-gray-400"
              />
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {textInput.length} ký tự
                </span>
                <div className="flex items-center space-x-2 text-violet-600">
                  <FaLightbulb size={14} />
                  <span className="font-medium">Mô tả chi tiết sẽ cho kết quả tốt hơn</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-6">
          {/* Video Style */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <FaPalette className="text-violet-500" size={20} />
              <h4 className="font-bold text-gray-900">Phong Cách</h4>
            </div>
            <div className="space-y-2">
              {videoStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setVideoStyle(style.id)}
                  className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between ${
                    videoStyle === style.id
                      ? `bg-gradient-to-r from-${style.color}-500 to-${style.color}-600 text-white shadow-lg shadow-${style.color}-500/30`
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <style.icon size={18} />
                    <span>{style.name}</span>
                  </span>
                  {videoStyle === style.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <FaClock className="text-violet-500" size={20} />
              <h4 className="font-bold text-gray-900">Thời Lượng</h4>
            </div>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl font-semibold text-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            >
              <option value="15">15 giây</option>
              <option value="30">30 giây</option>
              <option value="60">60 giây</option>
              <option value="120">2 phút</option>
            </select>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || (activeTab === 'image' && uploadedImages.length === 0) || (activeTab === 'text' && !textInput)}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center space-x-3"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Đang tạo...</span>
              </>
            ) : (
              <>
                <FaMagic />
                <span>Tạo Video</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideo;