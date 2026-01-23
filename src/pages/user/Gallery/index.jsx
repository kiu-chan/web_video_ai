import React, { useState } from 'react';
import { FaPlay, FaDownload, FaTrash, FaEye, FaHeart, FaShare, FaFilter, FaFolder, FaImage as FaImageIcon, FaFileAlt, FaClock } from 'react-icons/fa';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const videos = [
    {
      id: 1,
      title: 'Video Marketing Sản Phẩm',
      thumbnail: 'https://via.placeholder.com/400x225/8B5CF6/FFFFFF?text=Video+1',
      duration: '00:45',
      createdAt: '2 ngày trước',
      views: 1234,
      likes: 89,
      status: 'completed',
      type: 'image'
    },
    {
      id: 2,
      title: 'Hướng Dẫn Sử Dụng App',
      thumbnail: 'https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=Video+2',
      duration: '01:30',
      createdAt: '5 ngày trước',
      views: 856,
      likes: 67,
      status: 'completed',
      type: 'text'
    },
    {
      id: 3,
      title: 'Review Địa Điểm Du Lịch',
      thumbnail: 'https://via.placeholder.com/400x225/EC4899/FFFFFF?text=Video+3',
      duration: '02:15',
      createdAt: '1 tuần trước',
      views: 2341,
      likes: 156,
      status: 'completed',
      type: 'image'
    },
    {
      id: 4,
      title: 'Giới Thiệu Công Ty',
      thumbnail: 'https://via.placeholder.com/400x225/10B981/FFFFFF?text=Video+4',
      duration: '01:00',
      createdAt: '2 tuần trước',
      views: 567,
      likes: 43,
      status: 'completed',
      type: 'text'
    },
    {
      id: 5,
      title: 'Video Đang Xử Lý',
      thumbnail: 'https://via.placeholder.com/400x225/F59E0B/FFFFFF?text=Processing',
      duration: '--:--',
      createdAt: 'Vừa xong',
      views: 0,
      likes: 0,
      status: 'processing',
      type: 'image'
    },
  ];

  const filterOptions = [
    { id: 'all', name: 'Tất cả', count: videos.length, icon: FaFolder },
    { id: 'image', name: 'Từ ảnh', count: videos.filter(v => v.type === 'image').length, icon: FaImageIcon },
    { id: 'text', name: 'Từ text', count: videos.filter(v => v.type === 'text').length, icon: FaFileAlt },
    { id: 'processing', name: 'Đang xử lý', count: videos.filter(v => v.status === 'processing').length, icon: FaClock },
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(v => v.type === filter || v.status === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
        <div className="flex items-center space-x-2 mb-3 px-2">
          <FaFilter className="text-violet-500" size={16} />
          <span className="text-sm font-semibold text-gray-700">Bộ lọc</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === option.id
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <option.icon size={16} />
                <span className="hidden sm:inline">{option.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  filter === option.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {option.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <FaPlay className="text-violet-600 text-xl ml-1" />
                  </button>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                {video.duration}
              </div>

              {/* Status Badge */}
              {video.status === 'processing' && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Đang xử lý</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2">
                {video.title}
              </h3>

              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <FaEye className="text-violet-500" size={14} />
                  <span className="font-medium">{video.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaHeart className="text-red-500" size={14} />
                  <span className="font-medium">{video.likes}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-xs">{video.createdAt}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all flex items-center justify-center space-x-2 text-sm">
                  <FaDownload size={14} />
                  <span>Tải xuống</span>
                </button>
                <button className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all">
                  <FaShare size={14} />
                </button>
                <button className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-16 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaPlay className="text-violet-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Chưa có video nào
          </h3>
          <p className="text-gray-600 mb-6">
            Bắt đầu tạo video đầu tiên của bạn ngay bây giờ!
          </p>
          <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-violet-500/50 transition-all">
            Tạo Video Mới
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;