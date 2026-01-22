import React, { useState } from 'react';
import { FaVideo, FaFileAlt, FaCheckCircle, FaClock, FaTrash } from 'react-icons/fa';

const History = () => {
  const [filter, setFilter] = useState('all');

  // Mock data
  const activities = [
    {
      id: 1,
      type: 'video',
      action: 'Đã tạo video mới',
      title: 'Video Marketing Sản Phẩm',
      timestamp: '2 giờ trước',
      status: 'completed',
      details: 'Tạo từ 5 ảnh, phong cách Cinematic'
    },
    {
      id: 2,
      type: 'script',
      action: 'Đã tạo kịch bản',
      title: 'Kịch bản giới thiệu sản phẩm',
      timestamp: '5 giờ trước',
      status: 'completed',
      details: 'Giọng điệu chuyên nghiệp, 30 giây'
    },
    {
      id: 3,
      type: 'video',
      action: 'Video đang xử lý',
      title: 'Hướng dẫn sử dụng app',
      timestamp: '1 ngày trước',
      status: 'processing',
      details: 'Tạo từ text, phong cách Realistic'
    },
    {
      id: 4,
      type: 'video',
      action: 'Đã tải xuống video',
      title: 'Review địa điểm du lịch',
      timestamp: '2 ngày trước',
      status: 'completed',
      details: 'Format: MP4, 1080p'
    },
    {
      id: 5,
      type: 'script',
      action: 'Đã tạo kịch bản',
      title: 'Kịch bản video hài',
      timestamp: '3 ngày trước',
      status: 'completed',
      details: 'Giọng điệu hài hước, 60 giây'
    },
    {
      id: 6,
      type: 'video',
      action: 'Đã xóa video',
      title: 'Video test',
      timestamp: '1 tuần trước',
      status: 'deleted',
      details: 'Đã xóa khỏi thư viện'
    },
    {
      id: 7,
      type: 'video',
      action: 'Đã tạo video mới',
      title: 'Giới thiệu công ty',
      timestamp: '1 tuần trước',
      status: 'completed',
      details: 'Tạo từ 8 ảnh, phong cách Corporate'
    },
    {
      id: 8,
      type: 'script',
      action: 'Đã tạo kịch bản',
      title: 'Kịch bản video motivational',
      timestamp: '2 tuần trước',
      status: 'completed',
      details: 'Giọng điệu truyền cảm hứng, 120 giây'
    },
  ];

  const filterOptions = [
    { id: 'all', name: 'Tất cả', icon: FaClock },
    { id: 'video', name: 'Video', icon: FaVideo },
    { id: 'script', name: 'Kịch bản', icon: FaFileAlt },
  ];

  const filteredActivities = filter === 'all'
    ? activities
    : activities.filter(a => a.type === filter);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'video':
        return <FaVideo className="text-purple-500" />;
      case 'script':
        return <FaFileAlt className="text-blue-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center space-x-1">
            <FaCheckCircle />
            <span>Hoàn thành</span>
          </span>
        );
      case 'processing':
        return (
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full flex items-center space-x-1 animate-pulse">
            <FaClock />
            <span>Đang xử lý</span>
          </span>
        );
      case 'deleted':
        return (
          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full flex items-center space-x-1">
            <FaTrash />
            <span>Đã xóa</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">

      {/* Filter */}
      <div className="bg-white rounded-3xl shadow-lg p-2 border border-purple-100">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                filter === option.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
              }`}
            >
              <option.icon />
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
        <div className="space-y-6">
          {filteredActivities.map((activity, index) => (
            <div key={activity.id} className="relative">
              {/* Timeline Line */}
              {index !== filteredActivities.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-blue-200"></div>
              )}

              {/* Activity Card */}
              <div className="flex items-start space-x-4 group">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform z-10">
                  {getActivityIcon(activity.type)}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 group-hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {activity.action}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {activity.title}
                      </p>
                    </div>
                    {getStatusBadge(activity.status)}
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {activity.details}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-medium">
                      {activity.timestamp}
                    </p>
                    
                    {activity.status !== 'deleted' && (
                      <button className="text-sm text-purple-600 hover:text-purple-800 font-semibold hover:underline">
                        Xem chi tiết →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-2xl font-bold hover:from-purple-200 hover:to-blue-200 transition-all hover:scale-105">
            Xem thêm hoạt động
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <div className="bg-white rounded-3xl shadow-lg p-16 border border-purple-100 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaClock className="text-purple-600 text-5xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Chưa có hoạt động nào
          </h3>
          <p className="text-gray-600">
            Bắt đầu tạo video hoặc kịch bản để xem lịch sử hoạt động
          </p>
        </div>
      )}
    </div>
  );
};

export default History;