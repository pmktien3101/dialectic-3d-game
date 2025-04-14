import { useState } from "react"

const levels = [
  {
    id: 1,
    title: "Cái Riêng và Cái Chung",
    description: "Khám phá mối quan hệ giữa cái riêng và cái chung trong lớp học",
    scene: "classroom",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Nguyên Nhân và Kết Quả",
    description: "Tìm hiểu về mối quan hệ nhân quả trong cuộc sống",
    scene: "causality",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Tất Nhiên và Ngẫu Nhiên",
    description: "Phân tích sự tất nhiên và ngẫu nhiên trong các hiện tượng",
    scene: "necessity",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Nội Dung và Hình Thức",
    description: "Khám phá mối quan hệ giữa nội dung và hình thức",
    scene: "content",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Bản Chất và Hiện Tượng",
    description: "Tìm hiểu về bản chất và hiện tượng của sự vật",
    scene: "essence",
    color: "#FFEEAD",
  },
  {
    id: 6,
    title: "Khả Năng và Hiện Thực",
    description: "Phân tích mối quan hệ giữa khả năng và hiện thực",
    scene: "possibility",
    color: "#D4A5A5",
  },
]

function LevelCard({ level, selected, onClick, score }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        padding: "30px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: `2px solid ${level.color}`,
        transform: hovered ? "translateY(-10px)" : "none",
        boxShadow: hovered ? `0 10px 30px ${level.color}40` : "none",
        position: "relative",
      }}
    >
      {score !== undefined && (
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: score === 100 ? "#4CAF50" : "#FF6B6B",
          color: "white",
          padding: "5px 10px",
          borderRadius: "10px",
          fontSize: "14px",
          fontWeight: "bold",
        }}>
          {score}%
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: level.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            boxShadow: `0 0 20px ${level.color}40`,
          }}
        >
          {level.id}
        </div>
        <h2 style={{ 
          margin: 0, 
          color: "white", 
          fontSize: "28px",
          fontWeight: "bold" 
        }}>
          {level.title}
        </h2>
      </div>
      <p style={{ 
        color: "#cccccc", 
        fontSize: "18px", 
        lineHeight: "1.6",
        margin: "0 0 20px 0" 
      }}>
        {level.description}
      </p>
      <div style={{ textAlign: "right" }}>
        <button
          style={{
            backgroundColor: hovered ? level.color : "transparent",
            color: hovered ? "white" : level.color,
            border: `2px solid ${level.color}`,
            padding: "12px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Bắt Đầu
        </button>
      </div>
    </div>
  )
}

export default function LevelSelection({ onSelectLevel, quizScores }) {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a1a",
        padding: "40px",
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      <h1 style={{ 
        color: "white", 
        textAlign: "center", 
        fontSize: "48px",
        marginBottom: "60px",
        fontWeight: "bold"
      }}>
        Chọn Cặp Phạm Trù
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "40px",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 20px",
      }}>
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            level={level}
            selected={selectedLevel === level.id}
            onClick={() => {
              setSelectedLevel(level.id)
              onSelectLevel(level.id)
            }}
            score={quizScores[level.id]}
          />
        ))}
      </div>
    </div>
  )
} 