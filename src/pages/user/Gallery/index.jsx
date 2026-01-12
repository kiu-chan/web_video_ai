import React, { useState } from 'react';
import { FaPlay, FaDownload, FaTrash, FaEye, FaHeart, FaShare } from 'react-icons/fa';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  // Mock data
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
    { id: 'all', name: 'Tất cả', count: videos.length },
    { id: 'image', name: 'Từ ảnh', count: videos.filter(v => v.type === 'image').length },
    { id: 'text', name: 'Từ text', count: videos.filter(v => v.type === 'text').length },
    { id: 'processing', name: 'Đang xử lý', count: videos.filter(v => v.status === 'processing').length },
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(v => v.type === filter || v.status === filter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Thư Viện Video
            </h1>
            <p className="text-gray-600 text-lg">
              {filteredVideos.length} video trong thư viện của bạn
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{videos.length}</p>
              <p className="text-sm text-gray-500">Tổng video</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {videos.reduce((sum, v) => sum + v.views, 0)}
              </p>
              <p className="text-sm text-gray-500">Lượt xem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl shadow-lg p-2 border border-purple-100">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                filter === option.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
              }`}
            >
              {option.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                filter === option.id
                  ? 'bg-white/20'
                  : 'bg-gray-200'
              }`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-300 group hover:scale-105"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <FaPlay className="text-purple-600 text-xl ml-1" />
                  </button>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 text-white text-sm font-bold rounded-full">
                {video.duration}
              </div>

              {/* Status Badge */}
              {video.status === 'processing' && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                  Đang xử lý
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                {video.title}
              </h3>

              {/* Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <FaEye className="text-purple-500" />
                  <span>{video.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaHeart className="text-red-500" />
                  <span>{video.likes}</span>
                </div>
                <span>• {video.createdAt}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
                  <FaDownload />
                  <span>Tải xuống</span>
                </button>
                <button className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all hover:scale-110">
                  <FaShare />
                </button>
                <button className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-all hover:scale-110">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="bg-white rounded-3xl shadow-lg p-16 border border-purple-100 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaPlay className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Chưa có video nào
          </h3>
          <p className="text-gray-600 mb-6">
            Bắt đầu tạo video đầu tiên của bạn ngay bây giờ!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-2xl font-bold hover:shadow-lg transition-all hover:scale-105">
            Tạo Video Mới
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;