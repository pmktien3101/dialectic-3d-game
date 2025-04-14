"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { Desk } from "./furniture/desk"
import { Chair } from "./furniture/chair"
import { Blackboard } from "./furniture/blackboard"
import { Walls } from "./furniture/walls"
import { TeacherDesk } from "./furniture/teacher-desk"
import { Clock } from "./furniture/clock"
import { Bookshelf } from "./furniture/bookshelf"

export default function ClassroomScene() {
  const clockRef = useRef(null)

  // Animate the clock
  useFrame(({ clock }) => {
    if (clockRef.current) {
      clockRef.current.rotation.z = -clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group>
      {/* Room structure */}
      <Walls />

      {/* Blackboard area */}
      <Blackboard position={[0, 1.5, -4.8]} />
      <Text position={[0, 2.5, -4.75]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        Welcome to Class!
      </Text>

      {/* Teacher's area */}
      <TeacherDesk position={[0, 0, -3.5]} />
      <Chair position={[0, 0, -2.8]} rotation={[0, Math.PI, 0]} />

      {/* Student desks - 3 rows of 3 */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <group key={`desk-${row}-${col}`}>
            <Desk position={[(col - 1) * 2, 0, row * 2]} rotation={[0, 0, 0]} />
            <Chair position={[(col - 1) * 2, 0, row * 2 + 0.7]} rotation={[0, Math.PI, 0]} />
          </group>
        )),
      )}

      {/* Decorative elements */}
      <Clock position={[4.9, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} ref={clockRef} />
      <Bookshelf position={[-4.9, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#F5F5F5" roughness={0.5} />
      </mesh>
    </group>
  )
}
