"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import ClassroomScene from "./classroom-scene"

export default function Classroom() {
  return (
    <div className="w-full h-screen bg-slate-900">
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ClassroomScene />
          <Environment preset="lobby" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
          <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} minDistance={1} maxDistance={10} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded-md">
        <p className="text-sm">Use mouse to look around. Click and drag to rotate. Scroll to zoom.</p>
      </div>
    </div>
  )
}
