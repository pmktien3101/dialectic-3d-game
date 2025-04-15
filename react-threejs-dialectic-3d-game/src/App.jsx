import { useState } from "react"
import MainMenu from "./components/MainMenu"
import LevelSelection from "./components/LevelSelection"
import Classroom from "./components/Classroom"
import DialecticalMethodology from "./components/DialecticalMethodology"
import CausalityMethodology from "./components/CausalityMethodology"
import SocialLab from "./components/Sociallab"
import GiftBoxScene from "./components/GiftBoxScene"
import Level5Scene from "./components/Level5Scene"

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
    if (levelId === 2) { // If it's the causality level
      setCurrentScreen("socialLab")
    } else if (levelId === 4) { // If it's the gift box level
      setCurrentScreen("giftBox")
    } else if (levelId === 5) {
      setCurrentScreen("level5Scene")
    } else {
      setCurrentScreen("classroom")
    }
  }

  const handleQuizComplete = (score) => {
    setLastQuizScore(score)
    setQuizScores(prev => ({
      ...prev,
      [selectedLevel]: score
    }))
    if (selectedLevel === 2) { // If it's the causality level
      setCurrentScreen("causalityMethodology")
    } else {
      setCurrentScreen("dialecticalMethodology")
    }
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
      case "socialLab":
        return <SocialLab onComplete={handleQuizComplete} />
      case "dialecticalMethodology":
        return <DialecticalMethodology score={lastQuizScore} onContinue={handleContinueAfterMethodology} />
      case "causalityMethodology":
        return <CausalityMethodology onContinue={handleContinueAfterMethodology} />
      case "giftBox":
        return <GiftBoxScene onBackClick={handleContinueAfterMethodology} />
      case "level5Scene":
        return <Level5Scene onBackClick={handleContinueAfterMethodology} />
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
