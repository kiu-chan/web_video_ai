import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FaVideo, FaSignInAlt, FaBars, FaTimes, FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa';

const DefaultLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Function để scroll mượt mà đến section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Đóng mobile menu sau khi click
    setIsMobileMenuOpen(false);
  };

  // Function để logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Function để lấy link dashboard theo role
  const getDashboardLink = () => {
    if (!currentUser) return '/login';
    return currentUser.role === 'admin' ? '/admin' : '/user/create-video';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
                  <FaVideo className="text-white text-lg" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  AI Video Creator
                </h1>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 hover:text-violet-600 transition font-medium"
              >
                Trang chủ
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-violet-600 transition font-medium"
              >
                Tính năng
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-violet-600 transition font-medium"
              >
                Cách hoạt động
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-violet-600 transition font-medium"
              >
                Giá cả
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {currentUser ? (
                <>
                  {/* User Info */}
                  <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-gray-800">{currentUser.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                    </div>
                  </div>

                  {/* Dashboard Button */}
                  <Link
                    to={getDashboardLink()}
                    className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
                  >
                    <FaCog size={16} />
                    <span>{currentUser.role === 'admin' ? 'Quản trị' : 'Dashboard'}</span>
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition font-medium"
                  >
                    <FaSignOutAlt size={16} />
                    <span>Đăng xuất</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Login Button */}
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-violet-600 transition font-medium"
                  >
                    <FaSignInAlt size={16} />
                    <span>Đăng nhập</span>
                  </Link>

                  {/* Start Button */}
                  <button
                    onClick={() => scrollToSection('cta')}
                    className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
                  >
                    <FaVideo size={16} />
                    <span>Bắt đầu ngay</span>
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-violet-600 transition"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaVideo className="text-white text-lg" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                AI Video Creator
              </h2>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-violet-600 transition"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-xl transition font-medium text-left"
            >
              <span>Trang chủ</span>
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-xl transition font-medium text-left"
            >
              <span>Tính năng</span>
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-xl transition font-medium text-left"
            >
              <span>Cách hoạt động</span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-xl transition font-medium text-left"
            >
              <span>Giá cả</span>
            </button>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            {currentUser ? (
              <>
                {/* User Info Card */}
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 truncate">{currentUser.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                  </div>
                </div>

                {/* Dashboard Button */}
                <Link
                  to={getDashboardLink()}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-violet-500/50 transition"
                >
                  <FaCog size={16} />
                  <span>{currentUser.role === 'admin' ? 'Quản trị' : 'Dashboard'}</span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-red-600 border-2 border-red-200 rounded-xl font-medium hover:bg-red-50 transition"
                >
                  <FaSignOutAlt size={16} />
                  <span>Đăng xuất</span>
                </button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-gray-700 border-2 border-gray-200 rounded-xl font-medium hover:border-violet-500 hover:text-violet-600 transition"
                >
                  <FaSignInAlt size={16} />
                  <span>Đăng nhập</span>
                </Link>

                {/* Start Button */}
                <button
                  onClick={() => scrollToSection('cta')}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-violet-500/50 transition"
                >
                  <FaVideo size={16} />
                  <span>Bắt đầu ngay</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-3 mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaVideo className="text-white text-lg" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  AI Video Creator
                </h1>
              </button>
              <p className="text-gray-600 text-sm">
                Tạo video chuyên nghiệp với sức mạnh AI. Nhanh chóng, dễ dàng, chất lượng cao.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-600 hover:text-violet-600 transition"
                  >
                    Tính năng
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-gray-600 hover:text-violet-600 transition"
                  >
                    Cách hoạt động
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-600 hover:text-violet-600 transition"
                  >
                    Bảng giá
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Tài nguyên</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Hướng dẫn sử dụng
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Blog
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Cộng đồng
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    API Documentation
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Công ty</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Về chúng tôi
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Liên hệ
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Chính sách bảo mật
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-violet-600 transition">
                    Điều khoản sử dụng
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>© 2025 AI Video Creator. Tạo video bằng sức mạnh AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;