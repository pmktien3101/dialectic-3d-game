import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import ClassroomScene from "./ClassroomScene"
import InstructionPopup from "./InstructionPopup"
import Quiz from "./Quiz"
import { useState, useEffect } from "react"

function Classroom({ onReturnToLevelSelection }) {
  const [showInstruction, setShowInstruction] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizScore, setQuizScore] = useState(null)
  const [studentsClicked, setStudentsClicked] = useState(new Set())
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleBackToLevelSelection = () => {
    onReturnToLevelSelection(null)
  }

  const handleStudentClick = (studentName) => {
    setStudentsClicked(prev => {
      const newSet = new Set(prev)
      newSet.add(studentName)
      return newSet
    })
  }

  useEffect(() => {
    if (studentsClicked.size >= 2) {
      const timer = setTimeout(() => {
        setShowConfirmation(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [studentsClicked.size])

  const handleQuizComplete = (score) => {
    setQuizScore(score)
    setShowQuiz(false)
    // Return to level selection after a short delay to show the completion message
    setTimeout(() => {
      onReturnToLevelSelection(score)
    }, 1500)
  }

  // Check if both students have been clicked
  const bothStudentsClicked = studentsClicked.size >= 2

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1a1a2e" }}>
      <button
        onClick={handleBackToLevelSelection}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'linear-gradient(45deg, #FF6B6B, #FF8E8E, #FF6B6B)',
          backgroundSize: '200% 200%',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          animation: 'gradient 3s ease infinite',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
          }
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Quay lại
      </button>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      {showInstruction && (
        <InstructionPopup onContinue={() => setShowInstruction(false)} />
      )}
      {!showInstruction && bothStudentsClicked && !showQuiz && showConfirmation && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '10px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{ margin: 0, fontSize: '18px' }}>
            Bạn đã xem thông tin của cả hai sinh viên. Sẵn sàng cho bài kiểm tra?
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            style={{
              backgroundColor: '#FF6B6B',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Bắt Đầu Kiểm Tra
          </button>
        </div>
      )}
      {showQuiz && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <ClassroomScene onStudentClick={handleStudentClick} />
        <Environment preset="lobby" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} minDistance={1} maxDistance={10} />
      </Canvas>
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        <p style={{ fontSize: "14px", margin: 0 }}>
          Sử dụng chuột để nhìn xung quanh. Nhấp và kéo để xoay. Cuộn để phóng to.
        </p>
      </div>
    </div>
  )
}

export default Classroom
