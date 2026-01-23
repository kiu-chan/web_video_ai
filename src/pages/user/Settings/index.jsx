import React, { useState } from 'react';
import { FaUser, FaBell, FaLock, FaPalette, FaSave, FaGlobe, FaCamera } from 'react-icons/fa';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    // Profile
    fullName: 'Người dùng Demo',
    email: 'demo@example.com',
    phone: '',
    // Notifications
    emailNotifications: true,
    videoCompleted: true,
    weeklyReport: false,
    marketingEmails: false,
    // Privacy
    publicProfile: false,
    showEmail: false,
    // Appearance
    theme: 'light',
    language: 'vi',
  });

  const sections = [
    { id: 'profile', name: 'Hồ sơ', icon: FaUser, color: 'violet' },
    { id: 'notifications', name: 'Thông báo', icon: FaBell, color: 'blue' },
    { id: 'privacy', name: 'Bảo mật', icon: FaLock, color: 'emerald' },
    { id: 'appearance', name: 'Giao diện', icon: FaPalette, color: 'pink' },
  ];

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSave = () => {
    alert('Đã lưu cài đặt!');
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sticky top-6">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <section.icon size={18} />
                  <span className="text-sm">{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            {/* Profile Section */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FaUser className="text-violet-500" size={24} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Thông tin cá nhân</h2>
                    <p className="text-sm text-gray-600">Cập nhật thông tin tài khoản của bạn</p>
                  </div>
                </div>

                {/* Avatar */}
                <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      U
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200 hover:bg-gray-50 transition-all">
                      <FaCamera className="text-violet-500" size={14} />
                    </button>
                  </div>
                  <div>
                    <button className="px-6 py-2.5 bg-violet-50 text-violet-700 rounded-xl font-semibold hover:bg-violet-100 transition-all">
                      Đổi ảnh đại diện
                    </button>
                    <p className="text-xs text-gray-500 mt-2">JPG, PNG. Tối đa 2MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      value={settings.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FaBell className="text-blue-500" size={24} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Thông báo</h2>
                    <p className="text-sm text-gray-600">Tùy chỉnh cách bạn nhận thông báo</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'emailNotifications', label: 'Nhận thông báo qua email', description: 'Thông báo chung về hệ thống' },
                    { id: 'videoCompleted', label: 'Video hoàn thành', description: 'Thông báo khi video tạo xong' },
                    { id: 'weeklyReport', label: 'Báo cáo hàng tuần', description: 'Tổng hợp hoạt động của bạn' },
                    { id: 'marketingEmails', label: 'Email marketing', description: 'Nhận thông tin về tính năng mới' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white hover:shadow-sm transition-all">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[item.id]}
                          onChange={(e) => handleChange(item.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-violet-500 peer-checked:to-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy Section */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FaLock className="text-emerald-500" size={24} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Bảo mật</h2>
                    <p className="text-sm text-gray-600">Kiểm soát quyền riêng tư của bạn</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'publicProfile', label: 'Hồ sơ công khai', description: 'Cho phép người khác xem hồ sơ của bạn' },
                    { id: 'showEmail', label: 'Hiển thị email', description: 'Email sẽ hiển thị trên hồ sơ công khai' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white hover:shadow-sm transition-all">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[item.id]}
                          onChange={(e) => handleChange(item.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-teal-600"></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200 mt-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                    <FaLock className="text-red-500" />
                    <span>Vùng nguy hiểm</span>
                  </h3>
                  <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all">
                    Xóa tài khoản
                  </button>
                  <p className="text-sm text-gray-600 mt-2">
                    Hành động này không thể hoàn tác
                  </p>
                </div>
              </div>
            )}

            {/* Appearance Section */}
            {activeSection === 'appearance' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FaPalette className="text-pink-500" size={24} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Giao diện</h2>
                    <p className="text-sm text-gray-600">Tùy chỉnh giao diện ứng dụng</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">
                      Chế độ hiển thị
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'light', name: 'Sáng', icon: '☀️', gradient: 'from-amber-400 to-orange-400' },
                        { id: 'dark', name: 'Tối', icon: '🌙', gradient: 'from-slate-700 to-slate-900' },
                        { id: 'auto', name: 'Tự động', icon: '⚙️', gradient: 'from-violet-500 to-purple-600' },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => handleChange('theme', theme.id)}
                          className={`p-6 rounded-2xl font-bold transition-all border-2 ${
                            settings.theme === theme.id
                              ? 'border-violet-500 bg-violet-50'
                              : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto shadow-lg`}>
                            {theme.icon}
                          </div>
                          <div className={`${settings.theme === theme.id ? 'text-violet-600' : 'text-gray-700'}`}>
                            {theme.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4 flex items-center space-x-2">
                      <FaGlobe className="text-violet-500" />
                      <span>Ngôn ngữ</span>
                    </label>
                    <select
                      value={settings.language}
                      onChange={(e) => handleChange('language', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all font-semibold"
                    >
                      <option value="vi">Tiếng Việt</option>
                      <option value="en">English</option>
                      <option value="ja">日本語</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t-2 border-gray-100">
              <button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all flex items-center justify-center space-x-3"
              >
                <FaSave />
                <span>Lưu thay đổi</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;