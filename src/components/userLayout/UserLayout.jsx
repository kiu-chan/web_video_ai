import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FaVideo, 
  FaFileAlt, 
  FaImage,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUser,
  FaChevronRight
} from 'react-icons/fa';

const UserLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { 
      path: '/user/create-video', 
      icon: FaVideo, 
      label: 'Tạo Video',
      gradient: 'from-violet-500 to-purple-500'
    },
    { 
      path: '/user/create-script', 
      icon: FaFileAlt, 
      label: 'Tạo Kịch Bản',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      path: '/user/gallery', 
      icon: FaImage, 
      label: 'Thư Viện',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      path: '/user/history', 
      icon: FaHistory, 
      label: 'Lịch Sử',
      gradient: 'from-orange-500 to-amber-500'
    },
    { 
      path: '/user/settings', 
      icon: FaCog, 
      label: 'Cài Đặt',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Sidebar */}
      <aside className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          
          {/* Logo Header */}
          <div className="relative p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
                    <FaVideo className="text-white text-lg" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    AI Creator
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Video Studio</p>
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`group relative flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r ' + item.gradient + ' text-white shadow-lg shadow-' + item.gradient.split('-')[1] + '-500/30'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon size={20} className={`${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                      } transition-colors`} />
                      <span className={`font-semibold text-sm ${
                        isActive ? 'text-white' : 'text-gray-700'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <FaChevronRight size={14} className="text-white/80" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-gray-100">
            {/* User Info */}
            <div className="flex items-center space-x-3 px-4 py-3 mb-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">User Demo</p>
                <p className="text-xs text-gray-500">demo@example.com</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
            >
              <FaSignOutAlt size={16} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm">Đăng Xuất</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
          <div className="max-w-7xl mx-auto p-6">

            {/* Content */}
            <div className="relative">
              {children || <Outlet />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;