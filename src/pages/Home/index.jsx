import React from 'react';
import { FaVideo, FaFileAlt, FaImage, FaBolt, FaPalette, FaRocket, FaCheckCircle, FaStar, FaPlay, FaArrowRight, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';

const Home = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const features = [
    {
      icon: FaBolt,
      title: 'Nhanh Chóng',
      description: 'Tạo video trong vài phút với công nghệ AI tiên tiến, tiết kiệm thời gian và công sức.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: FaPalette,
      title: 'Đa Dạng Phong Cách',
      description: 'Nhiều phong cách video: Cinematic, Anime, Realistic, Cartoon và Abstract.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaImage,
      title: 'Dễ Sử Dụng',
      description: 'Giao diện trực quan, thân thiện. Không cần kinh nghiệm chỉnh sửa video.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaRocket,
      title: 'Chất Lượng Cao',
      description: 'Video đầu ra sắc nét, chuyên nghiệp với nhiều hiệu ứng đa dạng.',
      color: 'from-violet-500 to-purple-500'
    },
  ];

  const steps = [
    {
      number: '01',
      icon: FaImage,
      title: 'Nhập Nội Dung',
      description: 'Upload ảnh hoặc mô tả video bạn muốn tạo',
      color: 'violet'
    },
    {
      number: '02',
      icon: FaPalette,
      title: 'Chọn Phong Cách',
      description: 'Lựa chọn style và tùy chỉnh theo ý thích',
      color: 'blue'
    },
    {
      number: '03',
      icon: FaVideo,
      title: 'AI Xử Lý',
      description: 'Hệ thống AI tự động tạo video chất lượng',
      color: 'pink'
    },
    {
      number: '04',
      icon: FaRocket,
      title: 'Tải Xuống',
      description: 'Nhận video hoàn thiện và chia sẻ ngay',
      color: 'emerald'
    },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '0đ',
      period: '/tháng',
      features: [
        '5 video/tháng',
        'Chất lượng HD',
        'Watermark',
        'Hỗ trợ cơ bản',
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '299,000đ',
      period: '/tháng',
      features: [
        '100 video/tháng',
        'Chất lượng 4K',
        'Không watermark',
        'Ưu tiên xử lý',
        'Hỗ trợ 24/7',
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Liên hệ',
      period: '',
      features: [
        'Không giới hạn',
        'Chất lượng 4K',
        'API access',
        'Custom branding',
        'Dedicated support',
      ],
      highlighted: false
    },
  ];

  const stats = [
    { icon: FaUsers, value: '10,000+', label: 'Người dùng' },
    { icon: FaVideo, value: '50,000+', label: 'Video đã tạo' },
    { icon: FaStar, value: '4.9/5', label: 'Đánh giá' },
    { icon: FaClock, value: '< 5 phút', label: 'Thời gian trung bình' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-8">
              <FaBolt className="text-violet-500" />
              <span className="text-sm font-semibold text-gray-700">Powered by AI</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Tạo Video Chuyên Nghiệp
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Với Sức Mạnh AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Biến ý tưởng của bạn thành video chất lượng cao chỉ với vài cú click. 
              Không cần kỹ năng chỉnh sửa video phức tạp.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button 
                onClick={() => scrollToSection('cta')}
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all"
              >
                <FaPlay />
                <span>Bắt Đầu Tạo Video</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-bold shadow-sm border-2 border-gray-200 hover:border-violet-500 hover:text-violet-600 transition-all"
              >
                <span>Xem Demo</span>
                <FaPlay size={14} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <stat.icon className="text-violet-500 text-2xl mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tính Năng Nổi Bật
            </h2>
            <p className="text-xl text-gray-600">
              Những gì làm cho AI Video Creator trở nên đặc biệt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cách Thức Hoạt Động
            </h2>
            <p className="text-xl text-gray-600">
              Chỉ 4 bước đơn giản để tạo video chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-transparent -z-10"></div>
                )}
                
                <div className="text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full mb-6 relative">
                    <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="text-white text-3xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection('cta')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all"
            >
              <span>Thử ngay miễn phí</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bảng Giá
            </h2>
            <p className="text-xl text-gray-600">
              Chọn gói phù hợp với nhu cầu của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-2xl shadow-violet-500/50 scale-105'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-amber-400 text-gray-900 text-sm font-bold rounded-full">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center space-x-1">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg mb-2 ${plan.highlighted ? 'text-violet-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheckCircle className={`flex-shrink-0 mt-1 ${plan.highlighted ? 'text-white' : 'text-violet-500'}`} />
                      <span className={plan.highlighted ? 'text-violet-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-white text-violet-600 hover:shadow-xl'
                      : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/50'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Liên hệ' : 'Bắt đầu ngay'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl shadow-violet-500/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng tạo video đầu tiên?
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
              Bắt đầu miễn phí ngay hôm nay. Không cần thẻ tín dụng.
            </p>
            <button
              onClick={() => alert('Tính năng đang phát triển. Vui lòng quay lại sau!')}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-violet-600 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <FaRocket />
              <span>Bắt đầu tạo video ngay</span>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Home;