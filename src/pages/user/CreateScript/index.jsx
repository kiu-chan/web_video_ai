import React, { useState } from 'react';
import { FaFileAlt, FaMagic, FaCopy, FaDownload, FaRedo, FaLightbulb } from 'react-icons/fa';

const CreateScript = () => {
  const [topic, setTopic] = useState('');
  const [scriptType, setScriptType] = useState('short');
  const [tone, setTone] = useState('professional');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const scriptTypes = [
    { id: 'short', name: 'Video Ngắn', duration: '15-30s', icon: '⚡' },
    { id: 'medium', name: 'Video Trung Bình', duration: '1-3 phút', icon: '📹' },
    { id: 'long', name: 'Video Dài', duration: '5-10 phút', icon: '🎬' },
  ];

  const toneOptions = [
    { id: 'professional', name: 'Chuyên nghiệp', emoji: '👔' },
    { id: 'casual', name: 'Thân thiện', emoji: '😊' },
    { id: 'humorous', name: 'Hài hước', emoji: '😄' },
    { id: 'educational', name: 'Giáo dục', emoji: '📚' },
    { id: 'motivational', name: 'Truyền cảm hứng', emoji: '💪' },
  ];

  const exampleTopics = [
    'Giới thiệu sản phẩm công nghệ mới',
    'Hướng dẫn nấu món ăn ngon',
    'Review địa điểm du lịch',
    'Chia sẻ kinh nghiệm học tập',
    'Giải thích kiến thức khoa học'
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const demoScript = `[INTRO - 5s]
Chào mọi người! Hôm nay chúng ta sẽ cùng tìm hiểu về: ${topic}

[NỘI DUNG CHÍNH - 20s]
${topic} là một chủ đề rất thú vị và quan trọng. Hãy cùng tôi khám phá những điểm chính sau:

1. Điểm quan trọng đầu tiên về ${topic}
2. Lợi ích và ứng dụng thực tế
3. Những lưu ý cần biết

[KẾT THÚC - 5s]
Cảm ơn các bạn đã theo dõi! Đừng quên like và subscribe để ủng hộ kênh nhé!

---
[GHI CHÚ DIỄN XUẤT]
- Giọng điệu: ${toneOptions.find(t => t.id === tone)?.name}
- Tốc độ: Vừa phải, rõ ràng
- Cảm xúc: Nhiệt tình, thân thiện
`;
      
      setGeneratedScript(demoScript);
      setIsGenerating(false);
    }, 2500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedScript);
    alert('Đã sao chép kịch bản!');
  };

  const downloadScript = () => {
    const blob = new Blob([generatedScript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `script-${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Tạo Kịch Bản AI
            </h1>
            <p className="text-gray-600 text-lg">
              AI viết kịch bản video chuyên nghiệp cho bạn trong vài giây
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg animate-bounce">
              <FaFileAlt className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Topic Input */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
              <FaLightbulb className="text-yellow-500" />
              <span>Chủ Đề Video</span>
            </h3>
            
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Nhập chủ đề hoặc mô tả nội dung video của bạn..."
              className="w-full h-40 p-6 border-2 border-purple-200 rounded-3xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none text-gray-700 placeholder-gray-400 text-lg"
            />

            <div className="mt-6">
              <p className="text-sm font-bold text-gray-700 mb-3">Gợi ý chủ đề:</p>
              <div className="flex flex-wrap gap-2">
                {exampleTopics.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setTopic(example)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full text-sm font-medium hover:from-purple-100 hover:to-blue-100 transition-all hover:scale-105"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Script */}
          {generatedScript && (
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-purple-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
                  <FaMagic className="text-purple-600" />
                  <span>Kịch Bản Đã Tạo</span>
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-purple-100 text-purple-600 rounded-xl hover:bg-purple-200 transition-all hover:scale-110"
                    title="Sao chép"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={downloadScript}
                    className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all hover:scale-110"
                    title="Tải xuống"
                  >
                    <FaDownload />
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="p-3 bg-green-100 text-green-600 rounded-xl hover:bg-green-200 transition-all hover:scale-110"
                    title="Tạo lại"
                  >
                    <FaRedo />
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-100">
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 leading-relaxed">
                  {generatedScript}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-6">
          {/* Script Type */}
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-purple-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Loại Kịch Bản</h4>
            <div className="space-y-3">
              {scriptTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setScriptType(type.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                    scriptType === type.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-bold">{type.name}</span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        scriptType === type.id ? 'text-purple-100' : 'text-gray-500'
                      }`}>
                        {type.duration}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-purple-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Giọng Điệu</h4>
            <div className="space-y-2">
              {toneOptions.map((toneOpt) => (
                <button
                  key={toneOpt.id}
                  onClick={() => setTone(toneOpt.id)}
                  className={`w-full px-4 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    tone === toneOpt.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">{toneOpt.emoji}</span>
                  <span>{toneOpt.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Đang tạo...</span>
              </>
            ) : (
              <>
                <FaMagic />
                <span>Tạo Kịch Bản</span>
              </>
            )}
          </button>

          {/* Tips Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-lg p-6 border border-yellow-200">
            <div className="flex items-start space-x-3">
              <FaLightbulb className="text-yellow-600 text-xl mt-1" />
              <div>
                <h5 className="font-bold text-gray-800 mb-2">💡 Mẹo hay</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mô tả chủ đề càng chi tiết càng tốt</li>
                  <li>• Chọn đúng giọng điệu phù hợp</li>
                  <li>• Có thể chỉnh sửa kịch bản sau khi tạo</li>
                  <li>• Thử nhiều lần để có kết quả tốt nhất</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateScript;