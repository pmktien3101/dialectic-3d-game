import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import ClassroomScene from "./ClassroomScene"

function Classroom() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#1a1a2e" }}>
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: 60 }}>
        <ClassroomScene />
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
          Use mouse to look around. Click and drag to rotate. Scroll to zoom.
        </p>
      </div>
    </div>
  )
}

export default Classroom
