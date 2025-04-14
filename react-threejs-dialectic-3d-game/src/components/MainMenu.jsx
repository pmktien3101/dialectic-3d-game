import { useState } from "react"
import { FaGamepad, FaBrain, FaBook, FaGraduationCap } from "react-icons/fa"

const MainMenu = ({ onStartGame }) => {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: "#1a1a2e",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: "radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(33,150,243,0.1) 100%)",
        animation: "rotate 20s linear infinite",
        zIndex: 0
      }} />
      
      <div style={{
        textAlign: "center",
        color: "white",
        zIndex: 1,
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        minWidth: "500px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem"
        }}>
          <FaBrain style={{ fontSize: "2.5rem", color: "#4CAF50", animation: "float 3s ease-in-out infinite" }} />
          <FaGamepad style={{ fontSize: "2.5rem", color: "#2196F3", animation: "float 3s ease-in-out infinite", animationDelay: "0.5s" }} />
          <FaBook style={{ fontSize: "2.5rem", color: "#FFC107", animation: "float 3s ease-in-out infinite", animationDelay: "1s" }} />
        </div>

        <h1 style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #4CAF50, #2196F3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 20px rgba(76,175,80,0.3)",
          animation: "glow 2s ease-in-out infinite alternate"
        }}>
          Triết Học 3D
        </h1>
        <p style={{
          fontSize: "1.4rem",
          opacity: 0.9,
          marginBottom: "2rem",
          fontStyle: "italic"
        }}>
          Khám phá các cặp phạm trù triết học
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
          <button
            onClick={onStartGame}
            style={{
              padding: "18px 45px",
              fontSize: "1.3rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(76,175,80,0.4)",
              fontWeight: "bold",
              letterSpacing: "1px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "auto"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#45a049";
              e.target.style.transform = "translateY(-3px) scale(1.02)";
              e.target.style.boxShadow = "0 6px 20px rgba(76,175,80,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(76,175,80,0.4)";
            }}
          >
            <FaGamepad style={{ fontSize: "1.5rem" }} />
            Bắt Đầu
          </button>
        </div>

        <div style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          opacity: 0.7
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGraduationCap style={{ color: "#FFC107" }} />
            <span>Học tập</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaBrain style={{ color: "#4CAF50" }} />
            <span>Tư duy</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaBook style={{ color: "#2196F3" }} />
            <span>Kiến thức</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes glow {
            from { text-shadow: 0 0 20px rgba(76,175,80,0.3); }
            to { text-shadow: 0 0 30px rgba(33,150,243,0.5); }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  )
}

export default MainMenu 