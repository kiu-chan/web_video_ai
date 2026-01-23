import React, { useState } from 'react';
import { FaVideo, FaFileAlt, FaCheckCircle, FaClock, FaTrash, FaFilter } from 'react-icons/fa';

const History = () => {
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: 1,
      type: 'video',
      action: 'Đã tạo video mới',
      title: 'Video Marketing Sản Phẩm',
      timestamp: '5 phút trước',
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
  ];

  const filterOptions = [
    { id: 'all', name: 'Tất cả', icon: FaClock, color: 'gray' },
    { id: 'video', name: 'Video', icon: FaVideo, color: 'violet' },
    { id: 'script', name: 'Kịch bản', icon: FaFileAlt, color: 'blue' },
  ];

  const filteredActivities = filter === 'all'
    ? activities
    : activities.filter(a => a.type === filter);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'video':
        return <FaVideo className="text-violet-500" size={18} />;
      case 'script':
        return <FaFileAlt className="text-blue-500" size={18} />;
      default:
        return <FaClock className="text-gray-500" size={18} />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg flex items-center space-x-1.5">
            <FaCheckCircle size={12} />
            <span>Hoàn thành</span>
          </span>
        );
      case 'processing':
        return (
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold rounded-lg flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span>Đang xử lý</span>
          </span>
        );
      case 'deleted':
        return (
          <span className="px-3 py-1.5 bg-red-50 text-red-700 text-xs font-bold rounded-lg flex items-center space-x-1.5">
            <FaTrash size={12} />
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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
        <div className="flex items-center space-x-2 mb-3 px-2">
          <FaFilter className="text-violet-500" size={16} />
          <span className="text-sm font-semibold text-gray-700">Bộ lọc</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === option.id
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <option.icon size={16} />
              <span className="hidden sm:inline">{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <div key={activity.id} className="relative">
              {/* Timeline Line */}
              {index !== filteredActivities.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-200"></div>
              )}

              {/* Activity Card */}
              <div className="flex items-start space-x-4 group">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow z-10 border border-gray-200">
                  {getActivityIcon(activity.type)}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-5 group-hover:bg-white group-hover:shadow-sm transition-all border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
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
                    <p className="text-xs text-gray-500 font-medium flex items-center space-x-1">
                      <FaClock size={10} />
                      <span>{activity.timestamp}</span>
                    </p>
                    
                    {activity.status !== 'deleted' && (
                      <button className="text-sm text-violet-600 hover:text-violet-800 font-semibold transition-colors">
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
        {filteredActivities.length > 0 && (
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gray-50 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all border border-gray-200">
              Xem thêm hoạt động
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-16 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaClock className="text-violet-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
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