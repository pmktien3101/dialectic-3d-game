"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Sky, Html, Text } from "@react-three/drei"
import { Vector3 } from "three"
import Guide from "./Guide"
import QuizLevel3 from "./QuizLevel3"
import TatNhienVaNganNhien from "./TatNhienVaNganNhien"

export default function Farm3D({ onReturnToLevelSelection }) {
  const [showInstructions, setShowInstructions] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)
  const [showButtons, setShowButtons] = useState(true)
  const [showTheory, setShowTheory] = useState(false)

  const handleCloseInstructions = () => {
    setShowInstructions(false)
    setShowButtons(true)
  }

  const handleCloseQuestions = () => {
    setShowQuestions(false)
    setShowButtons(true)
    setShowTheory(true)
  }

  const handleBackToLevelSelection = () => {
    onReturnToLevelSelection(null)
  }

  if (showTheory) {
    return <TatNhienVaNganNhien onReturnToLevelSelection={onReturnToLevelSelection} />
  }

  return (
    <div className="w-full h-screen relative">
      <button
        onClick={handleBackToLevelSelection}
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Quay lại
      </button>
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
        <Suspense
        >
          <Sky sunPosition={new Vector3(100, 10, 100)} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[10, 10, 10]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <group position={[0, -1, 0]}>
            <Terrain />
            <CoffeeTrees />
            <InteractiveElements 
              setShowInstructions={setShowInstructions}
              setShowQuestions={setShowQuestions}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
            />
          </group>
          <Environment preset="sunset" />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.5}
            minDistance={5}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>

      {/* Regular React components outside of Canvas */}
      {showInstructions && <Guide onClose={handleCloseInstructions} />}
      {showQuestions && <QuizLevel3 onClose={handleCloseQuestions} />}
    </div>
  )
}

function Terrain() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#5d4037" />
    </mesh>
  )
}

function CoffeeTrees() {
  const positions = [
    [-5, 0, -5],
    [-5, 0, 0],
    [-5, 0, 5],
    [0, 0, -5],
    [0, 0, 0],
    [0, 0, 5],
    [5, 0, -5],
    [5, 0, 0],
    [5, 0, 5],
  ]

  return (
    <group>
      {positions.map((position, index) => (
        <CoffeeTree key={index} position={position} />
      ))}
    </group>
  )
}

function CoffeeTree({ position }) {
  const treeRef = useRef()

  useFrame((state) => {
    // Gentle swaying motion for the trees
    if (treeRef.current) {
      treeRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  return (
    <group position={position} ref={treeRef}>
      {/* Tree trunk */}
      <mesh castShadow position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2, 8]} />
        <meshStandardMaterial color="#3E2723" />
      </mesh>

      {/* Tree foliage */}
      <mesh castShadow position={[0, 2.5, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#2E7D32" />
      </mesh>

      {/* Coffee beans/cherries */}
      <group>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const radius = 1
          const x = Math.cos(angle) * radius * 0.8
          const z = Math.sin(angle) * radius * 0.8
          const y = 2 + Math.random() * 0.5

          return (
            <mesh key={i} castShadow position={[x, y, z]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#C62828" />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

function InteractiveElements({ setShowInstructions, setShowQuestions, showButtons, setShowButtons }) {
  const handleShowInstructions = () => {
    setShowButtons(false)
    setShowInstructions(true)
  }

  const handleShowQuestions = () => {
    setShowButtons(false)
    setShowQuestions(true)
  }

  return (
    <>
      <Html position={[0, 0, 0]}>
        {showButtons && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <button 
              onClick={handleShowInstructions} 
              className="px-4 py-2 text-white rounded-md relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-blue-500 group-hover:from-green-500 group-hover:to-blue-600 transition-all duration-300"></div>
              <div className="absolute inset-[2px] bg-gray-900 rounded-md group-hover:bg-gray-800 transition-all duration-300"></div>
              <span className="relative z-10">Hướng Dẫn</span>
            </button>
            <button 
              onClick={handleShowQuestions} 
              className="px-4 py-2 text-white rounded-md relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300"></div>
              <div className="absolute inset-[2px] bg-gray-900 rounded-md group-hover:bg-gray-800 transition-all duration-300"></div>
              <span className="relative z-10">Bắt Đầu</span>
            </button>
          </div>
        )}
      </Html>

      <Text
        position={[0, 7, 0]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        Vườn Cà Phê
      </Text>
    </>
  )
}
