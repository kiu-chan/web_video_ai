import React, { useState } from 'react';
import { FaFileAlt, FaMagic, FaCopy, FaDownload, FaRedo, FaLightbulb, FaBolt } from 'react-icons/fa';

const CreateScript = () => {
  const [topic, setTopic] = useState('');
  const [scriptType, setScriptType] = useState('short');
  const [tone, setTone] = useState('professional');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const scriptTypes = [
    { id: 'short', name: 'Video Ngắn', duration: '15-30s', icon: '⚡', color: 'violet' },
    { id: 'medium', name: 'Video Trung Bình', duration: '1-3 phút', icon: '📹', color: 'blue' },
    { id: 'long', name: 'Video Dài', duration: '5-10 phút', icon: '🎬', color: 'purple' },
  ];

  const toneOptions = [
    { id: 'professional', name: 'Chuyên nghiệp', emoji: '👔', color: 'slate' },
    { id: 'casual', name: 'Thân thiện', emoji: '😊', color: 'blue' },
    { id: 'humorous', name: 'Hài hước', emoji: '😄', color: 'orange' },
    { id: 'educational', name: 'Giáo dục', emoji: '📚', color: 'emerald' },
    { id: 'motivational', name: 'Truyền cảm hứng', emoji: '💪', color: 'pink' },
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
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Topic Input */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <FaLightbulb className="text-amber-500" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Chủ Đề Video</h3>
            </div>
            
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Nhập chủ đề hoặc mô tả nội dung video của bạn..."
              className="w-full h-40 p-6 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none text-gray-700 placeholder-gray-400"
            />

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                <FaBolt className="text-violet-500" size={14} />
                <span>Gợi ý chủ đề:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {exampleTopics.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setTopic(example)}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-violet-50 hover:text-violet-600 transition-all border border-gray-200 hover:border-violet-300"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Script */}
          {generatedScript && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <FaMagic className="text-violet-500" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Kịch Bản Đã Tạo</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-violet-50 text-violet-600 rounded-xl hover:bg-violet-100 transition-all"
                    title="Sao chép"
                  >
                    <FaCopy size={16} />
                  </button>
                  <button
                    onClick={downloadScript}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all"
                    title="Tải xuống"
                  >
                    <FaDownload size={16} />
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-all"
                    title="Tạo lại"
                  >
                    <FaRedo size={16} />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-4">Loại Kịch Bản</h4>
            <div className="space-y-2">
              {scriptTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setScriptType(type.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    scriptType === type.id
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{type.icon}</span>
                      <span className={`font-bold ${
                        scriptType === type.id ? 'text-violet-600' : 'text-gray-900'
                      }`}>
                        {type.name}
                      </span>
                    </div>
                    {scriptType === type.id && (
                      <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 ml-9">{type.duration}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h4 className="font-bold text-gray-900 mb-4">Giọng Điệu</h4>
            <div className="space-y-2">
              {toneOptions.map((toneOpt) => (
                <button
                  key={toneOpt.id}
                  onClick={() => setTone(toneOpt.id)}
                  className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between ${
                    tone === toneOpt.id
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xl">{toneOpt.emoji}</span>
                    <span>{toneOpt.name}</span>
                  </span>
                  {tone === toneOpt.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center space-x-3"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
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
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-sm border border-amber-200 p-6">
            <div className="flex items-start space-x-3">
              <FaLightbulb className="text-amber-500 text-xl mt-1 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-gray-900 mb-2">💡 Mẹo hay</h5>
                <ul className="text-sm text-gray-700 space-y-1.5">
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