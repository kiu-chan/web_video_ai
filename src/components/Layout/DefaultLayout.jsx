import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Video Creator
              </h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-purple-600 transition">
                Trang chủ
              </a>
              <a href="/user/create-video" className="text-gray-700 hover:text-purple-600 transition">
                Tạo video
              </a>
              <a href="/library" className="text-gray-700 hover:text-purple-600 transition">
                Thư viện
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 AI Video Creator. Tạo video bằng sức mạnh AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;