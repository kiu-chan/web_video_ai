import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { 
  FaVideo, 
  FaFileAlt, 
  FaImage,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUser
} from 'react-icons/fa';

const UserLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { 
      path: '/user/create-video', 
      icon: FaVideo, 
      label: 'Tạo Video AI',
      description: 'Từ ảnh & text'
    },
    { 
      path: '/user/create-script', 
      icon: FaFileAlt, 
      label: 'Tạo Kịch Bản',
      description: 'AI viết kịch bản'
    },
    { 
      path: '/user/gallery', 
      icon: FaImage, 
      label: 'Thư Viện',
      description: 'Video của bạn'
    },
    { 
      path: '/user/history', 
      icon: FaHistory, 
      label: 'Lịch Sử',
      description: 'Hoạt động gần đây'
    },
    { 
      path: '/user/settings', 
      icon: FaCog, 
      label: 'Cài Đặt',
      description: 'Tùy chỉnh'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-hidden`}>
        <div className="flex flex-col h-full relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none"></div>
          
          {/* Logo & Header */}
          <div className="relative p-8 border-b border-purple-100">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaVideo className="text-white text-xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    AI Video
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Creator Studio</p>
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                U
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">User Account</p>
                <p className="text-xs text-gray-500">Free Plan</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`group flex items-start space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:scale-102'
                      }`}
                    >
                      <div className={`mt-0.5 transition-transform duration-300 ${
                        isActive ? '' : 'group-hover:scale-110'
                      }`}>
                        <item.icon size={20} className={isActive ? 'text-white' : 'text-purple-600'} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>
                          {item.label}
                        </p>
                        <p className={`text-xs mt-0.5 ${
                          isActive ? 'text-purple-100' : 'text-gray-500'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="relative p-4 border-t border-purple-100">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-2xl transition-all duration-300 group"
            >
              <FaSignOutAlt size={18} className="text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Đăng Xuất</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;