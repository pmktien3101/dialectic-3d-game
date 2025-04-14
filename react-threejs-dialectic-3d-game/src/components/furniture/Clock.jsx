import { forwardRef } from "react"

export const Clock = forwardRef(function Clock({ position = [0, 0, 0], rotation = [0, 0, 0] }, ref) {
  return (
    <group position={position} rotation={rotation} ref={ref}>
      {/* Clock face */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
        <meshStandardMaterial color="#FAFAFA" roughness={0.5} />
      </mesh>

      {/* Clock border */}
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0.45, 0.5, 32]} />
        <meshStandardMaterial color="#616161" roughness={0.5} />
      </mesh>

      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6
        const x = 0.4 * Math.sin(angle)
        const y = 0.4 * Math.cos(angle)
        return (
          <mesh key={i} position={[x, y, 0.03]}>
            <boxGeometry args={[0.03, 0.03, 0.01]} />
            <meshStandardMaterial color="#212121" roughness={0.5} />
          </mesh>
        )
      })}

      {/* Clock hands */}
      <group position={[0, 0, 0.04]}>
        {/* Hour hand */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <boxGeometry args={[0.04, 0.3, 0.01]} />
          <meshStandardMaterial color="#212121" roughness={0.5} />
        </mesh>

        {/* Minute hand */}
        <mesh position={[0, 0.25, 0.01]} castShadow>
          <boxGeometry args={[0.02, 0.5, 0.01]} />
          <meshStandardMaterial color="#424242" roughness={0.5} />
        </mesh>

        {/* Second hand */}
        <mesh position={[0, 0.3, 0.02]} castShadow>
          <boxGeometry args={[0.01, 0.6, 0.01]} />
          <meshStandardMaterial color="#F44336" roughness={0.5} />
        </mesh>

        {/* Center pin */}
        <mesh position={[0, 0, 0.03]}>
          <cylinderGeometry args={[0.03, 0.03, 0.03, 16]} />
          <meshStandardMaterial color="#212121" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </group>
  )
})
