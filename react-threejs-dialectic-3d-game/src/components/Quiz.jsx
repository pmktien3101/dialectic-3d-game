import { useState, useEffect } from "react"
import { useSound } from "use-sound"

// Fallback sound functions in case sound files are not available
const fallbackSound = () => {
  // Create a simple beep sound using the Web Audio API
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()
  
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  
  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  
  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.1)
}

// Try to load sound files
let correctSound, wrongSound
try {
  correctSound = require("../assets/sounds/correct.mp3")
  wrongSound = require("../assets/sounds/wrong.mp3")
} catch (error) {
  // Files not found, will use fallback sound
}

const questions = [
  {
    question: "Điểm chung giữa Anh A và Chị B là gì?",
    options: [
      "Cùng học Triết học",
      "Cùng đến từ Hà Nội",
      "Cùng có giọng Bắc",
      "Cùng là giáo viên"
    ],
    correctAnswer: 0,
    explanation: "Cả hai đều là sinh viên học Triết học, đây là điểm chung của họ."
  },
  {
    question: "Điểm riêng của Anh A là gì?",
    options: [
      "Có giọng Bắc",
      "Sáng học Triết, tối lướt TikTok",
      "Trời 28°C đã kêu 'lạnh quá'",
      "Là sinh viên học Triết học",
    ],
    correctAnswer: 0,
    explanation: "Anh A đến từ Hà Nội và có giọng Bắc, đây là điểm riêng của anh ấy."
  },
  {
    question: "Điểm riêng của Chị B là gì?",
    options: [
      "Xem phim Trung nhưng chê trai Trung đẹp girly",
      "Đến từ TP.HCM",
      "Nói 'gì cũng được' nhưng cái gì cũng ghét",
      "Có giọng Bắc"
    ],
    correctAnswer: 1,
    explanation: "Chị B đến từ TP.HCM và có giọng Nam, đây là điểm riêng của chị ấy."
  }
]

export default function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  
  // Initialize sounds
  const [playCorrect] = useSound(correctSound || fallbackSound)
  const [playWrong] = useSound(wrongSound || fallbackSound)

  const handleAnswer = (index) => {
    setSelectedAnswer(index)
    if (index === questions[currentQuestion].correctAnswer) {
      playCorrect()
      setScore(score + 1)
      setShowExplanation(true)
    } else {
      playWrong()
      setShowExplanation(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setShowResults(true)
    }
  }

  const handleContinue = () => {
    onComplete(score / questions.length * 100)
  }

  if (showResults) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: '#1a1a2e',
          padding: '40px',
          borderRadius: '20px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)',
        }}>
          <h2 style={{ 
            color: '#FF6B6B',
            marginBottom: '20px',
            fontSize: '28px'
          }}>
            Kết Quả
          </h2>
          <p style={{ 
            color: 'white',
            fontSize: '24px',
            marginBottom: '20px'
          }}>
            Bạn đã trả lời đúng {score}/{questions.length} câu ({Math.round(score / questions.length * 100)}%)
          </p>
          {score === questions.length && (
            <div style={{ marginBottom: '20px' }}>
              <p style={{ color: '#4CAF50', fontSize: '20px' }}>
                Chúc mừng! Bạn đã mở khóa huy hiệu "Triết gia nhí"!
              </p>
            </div>
          )}
          <button
            onClick={handleContinue}
            style={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Chơi xong rồi giờ thì cùng học nhé 
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#1a1a2e',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)',
      }}>
        <h2 style={{ 
          color: '#FF6B6B',
          marginBottom: '20px',
          fontSize: '28px'
        }}>
          Câu hỏi {currentQuestion + 1}/{questions.length}
        </h2>
        <p style={{ 
          color: 'white',
          fontSize: '20px',
          marginBottom: '30px'
        }}>
          {questions[currentQuestion].question}
        </p>
        <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && handleAnswer(index)}
              style={{
                backgroundColor: selectedAnswer === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? '#4CAF50'
                    : '#FF5252'
                  : 'transparent',
                color: 'white',
                border: `2px solid ${selectedAnswer === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? '#4CAF50'
                    : '#FF5252'
                  : '#FF6B6B'}`,
                padding: '15px',
                borderRadius: '10px',
                fontSize: '16px',
                cursor: showExplanation ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {showExplanation && (
          <div style={{ marginBottom: '30px' }}>
            <p style={{ 
              color: selectedAnswer === questions[currentQuestion].correctAnswer ? '#4CAF50' : '#FF5252',
              fontSize: '16px',
              marginBottom: '20px'
            }}>
              {selectedAnswer === questions[currentQuestion].correctAnswer
                ? 'Chính xác!'
                : 'Hãy nghĩ lại: Điều này có đúng với cả hai không?'}
            </p>
            <p style={{ color: '#cccccc', fontSize: '14px' }}>
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
        {showExplanation && (
          <button
            onClick={handleNext}
            style={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {currentQuestion < questions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả'}
          </button>
        )}
      </div>
    </div>
  )
} 