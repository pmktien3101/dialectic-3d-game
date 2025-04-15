"use client"

import { useState } from "react"

const situations = [
  {
    id: 1,
    situation: "Cây cần nước, ánh sáng và phân bón để phát triển",
    answer: "TẤT NHIÊN",
    explanation: "Đây là yếu tố bên trong – bản chất sinh trưởng của cây."
  },
  {
    id: 2,
    situation: "Tuần này mưa lớn gây úng cây",
    answer: "NGẪU NHIÊN",
    explanation: "Mưa là yếu tố ngoại cảnh, có thể có hoặc không xảy ra."
  },
  {
    id: 3,
    situation: "Bón phân đầy đủ nên cây phát triển xanh tốt",
    answer: "TẤT NHIÊN",
    explanation: "Sự chăm sóc đúng cách thuộc về quy luật phát triển – nguyên nhân bên trong."
  },
  {
    id: 4,
    situation: "Có dịch bệnh bất ngờ do sâu từ vườn bên cạnh bay qua",
    answer: "NGẪU NHIÊN",
    explanation: "Sâu bệnh là do yếu tố ngoại cảnh tác động – không bản chất."
  }
 
]

export default function QuizLevel3({ onClose }) {
  const [currentSituation, setCurrentSituation] = useState(0)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
    const correct = answer === situations[currentSituation].answer
    setIsCorrect(correct)
    setShowExplanation(true)
    
    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentSituation < situations.length - 1) {
      setCurrentSituation(currentSituation + 1)
      setShowExplanation(false)
      setSelectedAnswer(null)
      setIsCorrect(null)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Tình Huống {currentSituation + 1}/{situations.length}</h2>
          <p className="text-lg mb-4">{situations[currentSituation].situation}</p>
          <p className="text-sm text-gray-600">Điểm: {score}</p>
        </div>

        {!showExplanation ? (
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => handleAnswer("TẤT NHIÊN")}
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              TẤT NHIÊN
            </button>
            <button
              onClick={() => handleAnswer("NGẪU NHIÊN")}
              className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
            >
              NGẪU NHIÊN
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="font-semibold mb-2">
                {isCorrect ? 'Chính xác! 🎉' : 'Chưa đúng! 😢'}
              </p>
              <p className="text-gray-700">{situations[currentSituation].explanation}</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {currentSituation < situations.length - 1 ? 'Tiếp tục' : 'Học lý thuyết thôi'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 