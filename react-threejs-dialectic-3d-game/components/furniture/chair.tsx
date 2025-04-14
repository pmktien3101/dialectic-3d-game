export function Chair({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Seat */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.05, 0.5]} />
        <meshStandardMaterial color="#A1887F" roughness={0.7} />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0.85, -0.225]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.8, 0.05]} />
        <meshStandardMaterial color="#A1887F" roughness={0.7} />
      </mesh>

      {/* Legs */}
      {[
        [-0.22, 0.225, -0.22],
        [0.22, 0.225, -0.22],
        [-0.22, 0.225, 0.22],
        [0.22, 0.225, 0.22],
      ].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.04, 0.45, 0.04]} />
          <meshStandardMaterial color="#5D4037" roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}
