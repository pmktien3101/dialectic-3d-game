"use client"

import { useState } from "react"

export default function Guide({ onClose, onLevelSelect }) {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      title: "Giới Thiệu",
      content: "Chào mừng bạn đến với Vườn Cà Phê! Trong trò chơi này, bạn sẽ học về mối quan hệ giữa tính tất nhiên và ngẫu nhiên."
    },
    {
      title: "Tính Tất Nhiên",
      content: "Tính tất nhiên là những yếu tố có thể dự đoán và kiểm soát được trong quá trình canh tác cà phê. Ví dụ:",
      examples: [
        "Lượng nước tưới cần thiết cho cây",
        "Thời gian thu hoạch cà phê",
        "Cách chăm sóc cây theo mùa"
      ]
    },
    {
      title: "Tính Ngẫu Nhiên",
      content: "Tính ngẫu nhiên là những yếu tố không thể dự đoán trước và khó kiểm soát. Ví dụ:",
      examples: [
        "Thời tiết thay đổi đột ngột",
        "Sâu bệnh xuất hiện bất ngờ",
        "Giá cà phê biến động trên thị trường"
      ]
    },
    {
      title: "Cách Chơi",
      content: "Bạn sẽ được đưa ra các tình huống và cần phân biệt đâu là tính tất nhiên. Mỗi câu trả lời đúng sẽ được cộng điểm."
    }
  ]

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      onClose()
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative shadow-2xl">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{pages[currentPage].title}</h2>
          <p className="text-lg text-gray-700 mb-4">{pages[currentPage].content}</p>
          
          {pages[currentPage].image && (
            <div className="my-6">
              <img 
                src={pages[currentPage].image.src} 
                alt={pages[currentPage].image.alt}
                className="mx-auto max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
          
          {pages[currentPage].examples && (
            <div className="mt-6 space-y-3">
              {pages[currentPage].examples.map((example, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-left">
                  <p className="text-blue-800">• {example}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentPage === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Trước
          </button>
          
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentPage === pages.length - 1 ? 'Bắt đầu' : 'Tiếp tục'}
          </button>
        </div>
      </div>
    </div>
  )
} 