"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Game state management
export default function SocialLabGame({ onComplete }) {
  const [gameState, setGameState] = useState("intro") // intro, level1, level2, result
  const [level1Selection, setLevel1Selection] = useState(null)
  const [level1Complete, setLevel1Complete] = useState(false)
  const [level2Arrangement, setLevel2Arrangement] = useState([
    { id: "automation", label: "Automation thay thế lao động", value: 0, position: 0 },
    { id: "recession", label: "Suy thoái kinh tế", value: 0, position: 1 },
    { id: "education", label: "Đào tạo không đáp ứng thị trường", value: 0, position: 2 },
  ])
  const [level2Complete, setLevel2Complete] = useState(false)

  const handleStartGame = () => {
    setGameState("level1")
  }

  const handleLevel1Selection = (selection) => {
    setLevel1Selection(selection)

    // Simulate processing time
    setTimeout(() => {
      setLevel1Complete(true)
    }, 1000)
  }

  const handleContinueToLevel2 = () => {
    setGameState("level2")
  }

  const handleLevel2Complete = () => {
    setLevel2Complete(true)
    setGameState("result")
  }

  const handleRestart = () => {
    setGameState("intro")
    setLevel1Selection(null)
    setLevel1Complete(false)
    setLevel2Complete(false)
    setLevel2Arrangement([
      { id: "automation", label: "Automation thay thế lao động", value: 0, position: 0 },
      { id: "recession", label: "Suy thoái kinh tế", value: 0, position: 1 },
      { id: "education", label: "Đào tạo không đáp ứng thị trường", value: 0, position: 2 },
    ])
  }

  const updateLevel2Arrangement = (id, newValue) => {
    setLevel2Arrangement(level2Arrangement.map((item) => (item.id === id ? { ...item, value: newValue } : item)))
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 overflow-hidden">
      {/* Lab visualization - static image instead of 3D */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* UI Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {gameState === "intro" && <IntroScreen onStart={handleStartGame} />}

        {gameState === "level1" && !level1Complete && <Level1UI onSelection={handleLevel1Selection} />}

        {gameState === "level1" && level1Complete && (
          <Level1ResultUI selection={level1Selection} onContinue={handleContinueToLevel2} />
        )}

        {gameState === "level2" && !level2Complete && (
          <Level2UI
            arrangement={level2Arrangement}
            updateArrangement={updateLevel2Arrangement}
            onComplete={handleLevel2Complete}
          />
        )}

        {gameState === "result" && <ResultScreen onComplete={onComplete} />}
      </div>
    </div>
  )
}

// UI Components
function IntroScreen({ onStart }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/90 backdrop-blur-md p-8 rounded-xl max-w-2xl text-center border border-cyan-500/30"
      >
        <h1 className="text-4xl font-bold text-white mb-4">PHÒNG THÍ NGHIỆM</h1>
        <p className="text-cyan-300 text-xl mb-6">Khám phá mối quan hệ nhân quả trong các yếu tố xã hội</p>

        <div className="mb-8 text-gray-300 text-left space-y-4">
          <p>
            Bạn là một nhà khoa học trẻ, nhiệm vụ của bạn là thao tác với các yếu tố xã hội trong phòng thí nghiệm để
            quan sát mối quan hệ nhân quả giữa chúng.
          </p>
          <p>
            Thông qua các thí nghiệm, bạn sẽ hiểu rõ hơn về cách các quyết định chính sách có thể ảnh hưởng đến xã hội
            theo nhiều cách khác nhau.
          </p>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          Bắt đầu thí nghiệm
        </button>
      </motion.div>
    </div>
  )
}

function Level1UI({ onSelection }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto p-8">
      <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg max-w-2xl border border-cyan-500/30 w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Thí nghiệm đơn giản</h2>
        <p className="text-cyan-300 mb-6">Điều gì xảy ra nếu tăng đầu tư vào giáo dục?</p>

        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        <div className="text-gray-300 text-center mb-6">
          <p>Ngân sách giáo dục tăng 50% sẽ dẫn đến kết quả gì?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => onSelection("direct")}
            className="px-4 py-3 bg-green-600/20 border border-green-500/50 text-green-400 rounded-lg text-sm hover:bg-green-600/30 transition-colors"
          >
            Kết quả trực tiếp: "Tỷ lệ biết chữ tăng"
          </button>
          <button
            onClick={() => onSelection("indirect")}
            className="px-4 py-3 bg-blue-600/20 border border-blue-500/50 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30 transition-colors"
          >
            Kết quả gián tiếp: "GDP tăng sau 10 năm"
          </button>
          <button
            onClick={() => onSelection("reverse")}
            className="px-4 py-3 bg-red-600/20 border border-red-500/50 text-red-400 rounded-lg text-sm hover:bg-red-600/30 transition-colors"
          >
            Tác dụng ngược: "Ngân sách y tế bị cắt giảm"
          </button>
        </div>
      </div>
    </div>
  )
}

function Level1ResultUI({ selection, onContinue }) {
  let resultText = ""
  let resultClass = ""

  switch (selection) {
    case "direct":
      resultText =
        "Chính xác! Tăng ngân sách giáo dục trực tiếp dẫn đến tỷ lệ biết chữ tăng. Đây là mối quan hệ nhân quả trực tiếp dễ quan sát nhất."
      resultClass = "border-green-500/50 bg-green-900/20"
      break
    case "indirect":
      resultText =
        "Đúng một phần! Tăng ngân sách giáo dục có thể dẫn đến GDP tăng sau 10 năm, nhưng đây là kết quả gián tiếp thông qua việc nâng cao chất lượng nguồn nhân lực."
      resultClass = "border-blue-500/50 bg-blue-900/20"
      break
    case "reverse":
      resultText =
        "Không chính xác! Tăng ngân sách giáo dục không nhất thiết dẫn đến cắt giảm ngân sách y tế. Đây là một quan niệm sai lầm về mối quan hệ nhân quả."
      resultClass = "border-red-500/50 bg-red-900/20"
      break
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-gray-900/90 backdrop-blur-md p-8 rounded-xl max-w-2xl border ${resultClass}`}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Kết quả thí nghiệm</h2>
        <p className="text-gray-300 mb-6">{resultText}</p>

        <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Phân tích khoa học:</h3>
          <p className="text-gray-300 text-sm">
            Đầu tư vào giáo dục tạo ra một chuỗi tác động xã hội phức tạp. Hiệu quả trực tiếp là nâng cao trình độ dân
            trí, nhưng còn có nhiều tác động gián tiếp khác như giảm tỷ lệ tội phạm, tăng năng suất lao động, và cải
            thiện sức khỏe cộng đồng.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          Tiếp tục đến thí nghiệm tiếp theo
        </button>
      </motion.div>
    </div>
  )
}

function Level2UI({ arrangement, updateArrangement, onComplete }) {
  const isComplete = arrangement.every((item) => item.value > 0)

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto p-8">
      <div className="bg-gray-900/90 backdrop-blur-md p-6 rounded-xl max-w-2xl border border-cyan-500/30 w-full">
        <h2 className="text-2xl font-bold text-white mb-4">Phân tích đa nguyên nhân</h2>
        <p className="text-cyan-300 mb-6">Tại sao tỷ lệ thất nghiệp tăng?</p>

        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>

        <div className="text-gray-300 text-center mb-6">
          <p>Điều chỉnh mức độ ảnh hưởng của từng yếu tố đến tỷ lệ thất nghiệp</p>
        </div>

        <div className="space-y-6 mb-8">
          {arrangement.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  item.id === "automation"
                    ? "bg-purple-900/30 border border-purple-500/50"
                    : item.id === "recession"
                      ? "bg-red-900/30 border border-red-500/50"
                      : "bg-blue-900/30 border border-blue-500/50"
                }`}
              >
                {item.id === "automation" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {item.id === "recession" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                )}
                {item.id === "education" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm">{item.label}</span>
                  <span
                    className={`text-sm font-bold ${
                      item.id === "automation"
                        ? "text-purple-400"
                        : item.id === "recession"
                          ? "text-red-400"
                          : "text-blue-400"
                    }`}
                  >
                    {item.value}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.value}
                  onChange={(e) => updateArrangement(item.id, Number.parseInt(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                    item.id === "automation"
                      ? "bg-purple-900/30"
                      : item.id === "recession"
                        ? "bg-red-900/30"
                        : "bg-blue-900/30"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onComplete}
          disabled={!isComplete}
          className={`w-full px-6 py-3 rounded-lg text-lg font-medium transition-all ${
            isComplete
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Hoàn thành phân tích
        </button>
      </div>
    </div>
  )
}

function ResultScreen({ onComplete }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900/90 backdrop-blur-md p-8 rounded-xl max-w-2xl text-center border border-cyan-500/30"
      >
        <h1 className="text-3xl font-bold text-white mb-4">Thí nghiệm hoàn thành!</h1>
        <p className="text-cyan-300 text-xl mb-6">Bạn đã khám phá mối quan hệ nhân quả trong các yếu tố xã hội</p>

        <div className="mb-8 text-gray-300 text-left space-y-4">
          <p>Thông qua các thí nghiệm, bạn đã thấy được:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Tác động trực tiếp của giáo dục đến tỷ lệ biết chữ</li>
            <li>Tác động gián tiếp của giáo dục đến phát triển kinh tế</li>
            <li>Các nguyên nhân đa chiều của vấn đề thất nghiệp</li>
          </ul>
          
        </div>

        <button
          onClick={onComplete}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
          Học lý thuyết nhé
        </button>
      </motion.div>
    </div>
  )
}
