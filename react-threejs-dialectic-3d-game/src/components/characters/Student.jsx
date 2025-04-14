import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"

export function Student({ position = [0, 0, 0], rotation = [0, 0, 0], name = "Student", isFemale = false, onClick, onTooltipShown }) {
  const groupRef = useRef()
  const [showTooltip, setShowTooltip] = useState(false)

  // Hardcoded traits based on name
  const getTraits = () => {
    if (name === "Anh Nguyễn Văn A") {
      return [
        "Là sinh viên học Triết học",
        "Đến từ Hà Nội",
        "Sáng học Triết, tối lướt TikTok",
        "Nói Giọng Bắc"
      ]
    } else if (name === "Chị Nguyễn Thị B") {
      return [
        "Là sinh viên học Triết học",
        "Nói 'gì cũng được' nhưng cái gì cũng ghét",
        "Đến từ TP.HCM",
        "Nói Giọng Nam"
      ]
    }
    return ["Là con người", "Là sinh viên học Triết học"]
  }

  // Simple animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.01
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    setShowTooltip(!showTooltip)
    if (onClick) onClick(e)
    if (onTooltipShown && !showTooltip) onTooltipShown()
  }

  const renderTraits = (traits) => {
    return traits.map((trait, index) => `• ${trait}`).join('\n')
  }

  const traits = getTraits()

  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation}
      onClick={handleClick}
    >
      {/* Body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.3, 0.8, 0.2]} />
        <meshStandardMaterial color={isFemale ? "#FF69B4" : "#2196F3"} roughness={0.7} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.25, 0.5, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color={isFemale ? "#FF69B4" : "#2196F3"} roughness={0.7} />
      </mesh>
      <mesh position={[0.25, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color={isFemale ? "#FF69B4" : "#2196F3"} roughness={0.7} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.1, 0, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color={isFemale ? "#FF69B4" : "#2196F3"} roughness={0.7} />
      </mesh>
      <mesh position={[0.1, 0, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
        <meshStandardMaterial color={isFemale ? "#FF69B4" : "#2196F3"} roughness={0.7} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#FFE0B2" roughness={0.7} />
      </mesh>

      {/* Hair - Different styles for male and female */}
      {isFemale ? (
        // Female hair style
        <>
          <mesh position={[0, 1.3, 0]} castShadow>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial color="#8B4513" roughness={0.7} />
          </mesh>
          {/* Pigtails */}
          <mesh position={[-0.2, 1.3, 0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
            <meshStandardMaterial color="#8B4513" roughness={0.7} />
          </mesh>
          <mesh position={[0.2, 1.3, 0.1]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
            <meshStandardMaterial color="#8B4513" roughness={0.7} />
          </mesh>
        </>
      ) : (
        // Male hair style
        <>
          <mesh position={[0, 1.3, 0]} castShadow>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial color="#212121" roughness={0.7} />
          </mesh>
          {/* Spiky hair */}
          {[...Array(5)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 5
            const x = 0.15 * Math.sin(angle)
            const z = 0.15 * Math.cos(angle)
            return (
              <mesh key={i} position={[x, 1.4, z]} rotation={[0, angle, 0]} castShadow>
                <coneGeometry args={[0.05, 0.1, 4]} />
                <meshStandardMaterial color="#212121" roughness={0.7} />
              </mesh>
            )
          })}
        </>
      )}

      {/* Eyes */}
      <mesh position={[-0.05, 1.2, 0.2]} castShadow>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#000000" roughness={0.1} />
      </mesh>
      <mesh position={[0.05, 1.2, 0.2]} castShadow>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#000000" roughness={0.1} />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.1, 0.2]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.05, 0.01, 8, 8, Math.PI]} />
        <meshStandardMaterial color="#000000" roughness={0.1} />
      </mesh>

      {/* Tooltip */}
      {showTooltip && (
        <group position={[0, 2.5, 0]}>
          {/* Black background container */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[2.5, 1.5]} />
            <meshBasicMaterial color="black" />
          </mesh>
          
          {/* Text content */}
          <Text
            fontSize={0.12}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={2}
            textAlign="left"
            padding={0.3}
          >
            {`${name}\n\n${renderTraits(traits)}`}
          </Text>
        </group>
      )}
    </group>
  )
} 