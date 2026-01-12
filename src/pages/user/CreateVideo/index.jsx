import React, { useState } from 'react';
import { FaImage, FaFont, FaUpload, FaMagic, FaPlay, FaClock, FaPalette } from 'react-icons/fa';

const CreateVideo = () => {
  const [activeTab, setActiveTab] = useState('image'); // 'image' or 'text'
  const [uploadedImages, setUploadedImages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [videoStyle, setVideoStyle] = useState('cinematic');
  const [duration, setDuration] = useState('30');
  const [isGenerating, setIsGenerating] = useState(false);

  const videoStyles = [
    { id: 'cinematic', name: 'Cinematic', color: 'from-purple-600 to-indigo-600' },
    { id: 'anime', name: 'Anime', color: 'from-pink-600 to-rose-600' },
    { id: 'realistic', name: 'Realistic', color: 'from-blue-600 to-cyan-600' },
    { id: 'cartoon', name: 'Cartoon', color: 'from-green-600 to-emerald-600' },
    { id: 'abstract', name: 'Abstract', color: 'from-orange-600 to-amber-600' },
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
    // Simulate video generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Video đã được tạo thành công! (Demo)');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Tạo Video AI
            </h1>
            <p className="text-gray-600 text-lg">
              Biến ảnh hoặc text của bạn thành video chuyên nghiệp với AI
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
              <FaMagic className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Selection */}
      <div className="bg-white rounded-3xl shadow-lg p-2 border border-purple-100">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center justify-center space-x-3 py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'image'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
            }`}
          >
            <FaImage size={24} />
            <span>Từ Ảnh</span>
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center justify-center space-x-3 py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'text'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
            }`}
          >
            <FaFont size={24} />
            <span>Từ Text</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Input Area */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'image' ? (
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <FaImage className="text-purple-600" />
                <span>Upload Ảnh</span>
              </h3>
              
              {/* Upload Area */}
              <div className="mb-6">
                <label className="flex flex-col items-center justify-center w-full h-64 border-3 border-dashed border-purple-300 rounded-3xl cursor-pointer bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaUpload className="w-16 h-16 mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    <p className="mb-2 text-lg font-bold text-gray-700">
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
                  <p className="text-sm font-bold text-gray-700 mb-3">
                    Đã upload {uploadedImages.length} ảnh
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {uploadedImages.map((img) => (
                      <div key={img.id} className="relative group">
                        <img
                          src={img.preview}
                          alt="Uploaded"
                          className="w-full h-32 object-cover rounded-2xl shadow-md"
                        />
                        <button
                          onClick={() => removeImage(img.id)}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
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
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <FaFont className="text-purple-600" />
                <span>Mô Tả Video</span>
              </h3>
              
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Mô tả chi tiết video bạn muốn tạo... Ví dụ: 'Một video về hoàng hôn trên biển với sóng vỗ nhẹ và ánh sáng vàng'"
                className="w-full h-64 p-6 border-2 border-purple-200 rounded-3xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none text-gray-700 placeholder-gray-400 text-lg"
              />
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {textInput.length} ký tự
                </span>
                <span className="text-purple-600 font-medium">
                  Mô tả chi tiết hơn sẽ cho kết quả tốt hơn
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-6">
          {/* Video Style */}
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-purple-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <FaPalette className="text-purple-600" />
              <span>Phong Cách</span>
            </h4>
            <div className="space-y-2">
              {videoStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setVideoStyle(style.id)}
                  className={`w-full px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    videoStyle === style.id
                      ? `bg-gradient-to-r ${style.color} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-purple-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <FaClock className="text-purple-600" />
              <span>Thời Lượng</span>
            </h4>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-2xl font-semibold text-gray-700 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
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
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Đang tạo...</span>
              </>
            ) : (
              <>
                <FaPlay />
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