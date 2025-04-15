import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function GiftBox({ position = [0, 0, 0], onClick, label = "Nội dung & Hình thức" }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [showContent, setShowContent] = useState(false)

  // Create ribbon curve for the bow
  const createRibbonCurve = (startAngle, endAngle, height) => {
    const points = []
    for (let i = startAngle; i <= endAngle; i += 0.1) {
      const x = Math.cos(i) * 0.3
      const y = height + Math.sin(i * 2) * 0.15
      const z = Math.sin(i) * 0.3
      points.push(new THREE.Vector3(x, y, z))
    }
    return new THREE.CatmullRomCurve3(points)
  }

  // Animation for box scale
  const boxScale = hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]

  // Update showContent when hovered or clicked
  useEffect(() => {
    if (hovered || clicked) {
      setShowContent(true)
    } else {
      setShowContent(false)
    }
  }, [hovered, clicked])

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.005

      // Floating effect when hovered
      if (hovered) {
        groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05
      } else {
        groupRef.current.position.y = position[1]
      }
    }
  })

  const handleBoxClick = () => {
    setClicked(true)
    if (onClick) onClick()
  }

  const handleContentClick = () => {
    setShowContent(false)
    setClicked(false)
    setHovered(false)
  }

  const getContentText = () => {
    if (clicked) {
      return `Nội dung:
• Là món quà phía bên trong
• Là thư tay bên trong
• Là ý nghĩa bên trong hộp quà`
    } else if (hovered) {
      return `Hình thức:
• Là giấy gói ở bên ngoài
• Là ruy băng
• Là hình dáng hộp`
    }
    return ""
  }

  return (
    <>
      <motion.group
        ref={groupRef}
        position={position}
        animate={{ scale: boxScale }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={handleBoxClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Box body - main part with gradient texture */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#1ac0dc"
            metalness={0.3}
            roughness={0.1}
            emissive="#1ac0dc"
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>

        {/* Decorative patterns on box sides */}
        <mesh position={[0, 0, 0.51]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.5}
            roughness={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Box lid - top part with shine */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.05, 0.2, 1.05]} />
          <meshStandardMaterial
            color="#1ac0dc"
            metalness={0.5}
            roughness={0.1}
            emissive="#1ac0dc"
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>

        {/* Vertical ribbon with gradient */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.15, 1.1, 1.05]} />
          <meshStandardMaterial
            color="#ff3b3b"
            metalness={0.5}
            roughness={0.2}
            emissive="#ff3b3b"
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>

        {/* Horizontal ribbon with gradient */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.05, 1.1, 0.15]} />
          <meshStandardMaterial
            color="#ff3b3b"
            metalness={0.5}
            roughness={0.2}
            emissive="#ff3b3b"
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>

        {/* Ribbon bow - center knot with shine */}
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[0.25, 0.15, 0.25]} />
          <meshStandardMaterial
            color="#ff3b3b"
            metalness={0.6}
            roughness={0.1}
            emissive="#ff3b3b"
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>

        {/* Ribbon bow - left tail with gradient */}
        <mesh position={[-0.1, 0.7, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.4, 0.1, 0.2]} />
          <meshStandardMaterial
            color="#ff3b3b"
            metalness={0.6}
            roughness={0.1}
            emissive="#ff3b3b"
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>

        {/* Ribbon bow - right tail with gradient */}
        <mesh position={[0.1, 0.7, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.4, 0.1, 0.2]} />
          <meshStandardMaterial
            color="#ff3b3b"
            metalness={0.6}
            roughness={0.1}
            emissive="#ff3b3b"
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>
      </motion.group>

      {/* Label text - always visible */}
      <Text
        position={[position[0], position[1] + 1.2, position[2]]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
      >
        {label}
      </Text>

      {/* Content text - visible when hovered or clicked */}
      {showContent && (
        <>
          {/* Background for content text */}
          <mesh
            position={[position[0], position[1], position[2] + 1.5]}
            onClick={handleContentClick}
          >
            <planeGeometry args={[2.2, 1.2]} />
            <meshStandardMaterial
              color="#000000"
              transparent
              opacity={0.7}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>

          {/* Content text */}
          <Text
            position={[position[0], position[1], position[2] + 1.51]}
            fontSize={0.12}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
            maxWidth={2}
            lineHeight={1.2}
            letterSpacing={0.02}
            onClick={handleContentClick}
          >
            {getContentText()}
          </Text>
        </>
      )}
    </>
  )
}

