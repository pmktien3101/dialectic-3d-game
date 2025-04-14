import { useState } from "react"
import MainMenu from "./components/MainMenu"
import LevelSelection from "./components/LevelSelection"
import Classroom from "./components/Classroom"

function App() {
  const [currentScreen, setCurrentScreen] = useState("mainMenu")
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [quizScores, setQuizScores] = useState({})

  const handleStartGame = () => {
    setCurrentScreen("levelSelection")
  }

  const handleSelectLevel = (levelId) => {
    setSelectedLevel(levelId)
    setCurrentScreen("classroom")
  }

  const handleQuizComplete = (score) => {
    // Save the score for the current level
    setQuizScores(prev => ({
      ...prev,
      [selectedLevel]: score
    }))
    // Return to level selection
    setCurrentScreen("levelSelection")
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case "mainMenu":
        return <MainMenu onStartGame={handleStartGame} />
      case "levelSelection":
        return <LevelSelection onSelectLevel={handleSelectLevel} quizScores={quizScores} />
      case "classroom":
        return <Classroom onReturnToLevelSelection={handleQuizComplete} />
      default:
        return <MainMenu onStartGame={handleStartGame} />
    }
  }

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      {renderScreen()}
    </div>
  )
}

export default App
