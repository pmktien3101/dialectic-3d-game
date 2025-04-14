"use client"

import { useState } from "react"
import { Text } from "@react-three/drei"

export function Blackboard({ position = [0, 0, 0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <group position={position}>
      {/* Board frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 2, 0.05]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>

      {/* Board surface */}
      <mesh position={[0, 0, 0.03]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[3.8, 1.8, 0.02]} />
        <meshStandardMaterial color={hovered ? "#2E7D32" : "#1B5E20"} roughness={0.9} />
      </mesh>

      {/* Chalk tray */}
      <mesh position={[0, -1.1, 0.1]} castShadow>
        <boxGeometry args={[4, 0.1, 0.2]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>

      {/* Chalk pieces */}
      {[-1.5, -1, -0.5, 0, 0.5, 1, 1.5].map((x, i) => (
        <mesh key={i} position={[x, -1.05, 0.15]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.1, 8]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.5} />
        </mesh>
      ))}

      {hovered && (
        <Text position={[0, 0, 0.1]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
          Click to write on the board
        </Text>
      )}
    </group>
  )
}
