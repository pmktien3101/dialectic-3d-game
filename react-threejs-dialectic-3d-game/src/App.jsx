import { useState } from "react"
import MainMenu from "./components/MainMenu"
import LevelSelection from "./components/LevelSelection"
import Classroom from "./components/Classroom"
import DialecticalMethodology from "./components/DialecticalMethodology"

function App() {
  const [currentScreen, setCurrentScreen] = useState("mainMenu")
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [quizScores, setQuizScores] = useState({})
  const [lastQuizScore, setLastQuizScore] = useState(null)

  const handleStartGame = () => {
    setCurrentScreen("levelSelection")
  }

  const handleSelectLevel = (levelId) => {
    setSelectedLevel(levelId)
    setCurrentScreen("classroom")
  }

  const handleQuizComplete = (score) => {
    setLastQuizScore(score)
    setQuizScores(prev => ({
      ...prev,
      [selectedLevel]: score
    }))
    setCurrentScreen("dialecticalMethodology")
  }

  const handleContinueAfterMethodology = () => {
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
      case "dialecticalMethodology":
        return <DialecticalMethodology score={lastQuizScore} onContinue={handleContinueAfterMethodology} />
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
