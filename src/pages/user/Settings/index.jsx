import React, { useState } from 'react';
import { FaUser, FaBell, FaLock, FaPalette, FaSave, FaGlobe } from 'react-icons/fa';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    // Profile
    fullName: 'Người dùng',
    email: 'user@example.com',
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
    { id: 'profile', name: 'Thông tin cá nhân', icon: FaUser },
    { id: 'notifications', name: 'Thông báo', icon: FaBell },
    { id: 'privacy', name: 'Quyền riêng tư', icon: FaLock },
    { id: 'appearance', name: 'Giao diện', icon: FaPalette },
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
          <div className="bg-white rounded-3xl shadow-lg p-4 border border-purple-100 sticky top-6">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
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
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
            {/* Profile Section */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
                    <FaUser className="text-purple-600" />
                    <span>Thông tin cá nhân</span>
                  </h2>
                  <p className="text-gray-600">Cập nhật thông tin tài khoản của bạn</p>
                </div>

                {/* Avatar */}
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    U
                  </div>
                  <div>
                    <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-xl font-semibold hover:bg-purple-200 transition-all">
                      Đổi ảnh đại diện
                    </button>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG. Tối đa 2MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      value={settings.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
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
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
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
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
                    <FaBell className="text-purple-600" />
                    <span>Thông báo</span>
                  </h2>
                  <p className="text-gray-600">Tùy chỉnh cách bạn nhận thông báo</p>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'emailNotifications', label: 'Nhận thông báo qua email', description: 'Thông báo chung về hệ thống' },
                    { id: 'videoCompleted', label: 'Video hoàn thành', description: 'Thông báo khi video tạo xong' },
                    { id: 'weeklyReport', label: 'Báo cáo hàng tuần', description: 'Tổng hợp hoạt động của bạn' },
                    { id: 'marketingEmails', label: 'Email marketing', description: 'Nhận thông tin về tính năng mới' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl">
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[item.id]}
                          onChange={(e) => handleChange(item.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Privacy Section */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
                    <FaLock className="text-purple-600" />
                    <span>Quyền riêng tư</span>
                  </h2>
                  <p className="text-gray-600">Kiểm soát quyền riêng tư của bạn</p>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'publicProfile', label: 'Hồ sơ công khai', description: 'Cho phép người khác xem hồ sơ của bạn' },
                    { id: 'showEmail', label: 'Hiển thị email', description: 'Email sẽ hiển thị trên hồ sơ công khai' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl">
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[item.id]}
                          onChange={(e) => handleChange(item.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-600 peer-checked:to-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border-2 border-red-200">
                  <h3 className="font-bold text-gray-800 mb-3">Vùng nguy hiểm</h3>
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
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center space-x-3">
                    <FaPalette className="text-purple-600" />
                    <span>Giao diện</span>
                  </h2>
                  <p className="text-gray-600">Tùy chỉnh giao diện ứng dụng</p>
                </div>

                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Chế độ hiển thị
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'light', name: 'Sáng', emoji: '☀️' },
                        { id: 'dark', name: 'Tối', emoji: '🌙' },
                        { id: 'auto', name: 'Tự động', emoji: '⚙️' },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => handleChange('theme', theme.id)}
                          className={`p-6 rounded-2xl font-bold transition-all ${
                            settings.theme === theme.id
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <div className="text-3xl mb-2">{theme.emoji}</div>
                          <div>{theme.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center space-x-2">
                      <FaGlobe className="text-purple-600" />
                      <span>Ngôn ngữ</span>
                    </label>
                    <select
                      value={settings.language}
                      onChange={(e) => handleChange('language', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-semibold"
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
            <div className="mt-8 pt-6 border-t-2 border-purple-100">
              <button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3"
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