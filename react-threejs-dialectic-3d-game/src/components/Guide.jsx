"use client"

import { useState } from "react"

export default function Guide({ onClose, onLevelSelect }) {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      title: "Giới Thiệu",
      content: "Chào mừng bạn đến với Vườn Cà Phê! Trong trò chơi này, bạn sẽ học về mối quan hệ giữa tính tất nhiên và ngẫu nhiên trong canh tác cà phê."
    },
    {
        title: "Cách Chơi",
        content: "Bạn sẽ được đưa ra các tình huống và cần phân biệt đâu là tính tất nhiên, đâu là tính ngẫu nhiên. Mỗi câu trả lời đúng sẽ được cộng điểm."
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
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">{pages[currentPage].title}</h2>
          <p className="text-lg text-gray-700">{pages[currentPage].content}</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`px-6 py-2 rounded-md transition-colors ${
              currentPage === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Trước
          </button>
          
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {currentPage === pages.length - 1 ? 'Đã hiểu' : 'Tiếp tục'}
          </button>
        </div>
      </div>
    </div>
  )
} 