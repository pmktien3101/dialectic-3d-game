export function Desk({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Desktop */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 0.05, 0.6]} />
        <meshStandardMaterial color="#8B4513" roughness={0.7} />
      </mesh>

      {/* Legs */}
      {[
        [-0.45, 0.35, -0.25],
        [0.45, 0.35, -0.25],
        [-0.45, 0.35, 0.25],
        [0.45, 0.35, 0.25],
      ].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.05, 0.7, 0.05]} />
          <meshStandardMaterial color="#5D4037" roughness={0.7} />
        </mesh>
      ))}

      {/* Drawer */}
      <mesh position={[0, 0.55, 0.1]} castShadow>
        <boxGeometry args={[0.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#6D4C41" roughness={0.7} />
      </mesh>

      {/* Drawer handle */}
      <mesh position={[0, 0.55, 0.31]} castShadow>
        <boxGeometry args={[0.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#FFC107" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}
