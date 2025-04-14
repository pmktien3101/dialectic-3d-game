export function TeacherDesk({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Desktop */}
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.08, 1]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>

      {/* Legs and structure */}
      <mesh position={[0, 0.375, 0]} castShadow>
        <boxGeometry args={[1.9, 0.75, 0.9]} />
        <meshStandardMaterial color="#4E342E" roughness={0.7} />
      </mesh>

      {/* Drawers */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <group key={i} position={[x, 0.5, 0.46]}>
          <mesh castShadow>
            <boxGeometry args={[0.55, 0.25, 0.05]} />
            <meshStandardMaterial color="#6D4C41" roughness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.03]}>
            <boxGeometry args={[0.1, 0.05, 0.05]} />
            <meshStandardMaterial color="#FFC107" metalness={0.5} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Items on desk */}
      {/* Book stack */}
      <group position={[-0.7, 0.85, -0.2]}>
        {[0, 0.03, 0.06, 0.09].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} castShadow>
            <boxGeometry args={[0.3, 0.03, 0.25]} />
            <meshStandardMaterial color={["#F44336", "#2196F3", "#4CAF50", "#FFC107"][i]} roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Apple */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#F44336" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.01, 0.01, 0.1, 8]} />
        <meshStandardMaterial color="#795548" roughness={0.7} />
      </mesh>

      {/* Pencil holder */}
      <mesh position={[0.7, 0.85, -0.2]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.15, 16]} />
        <meshStandardMaterial color="#607D8B" roughness={0.5} />
      </mesh>
      {/* Pencils */}
      {[
        [0.68, 0.95, -0.2],
        [0.72, 0.95, -0.2],
        [0.7, 0.95, -0.17],
        [0.7, 0.95, -0.23],
      ].map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0.1, 0, 0.1 * i]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
          <meshStandardMaterial color={["#FFC107", "#4CAF50", "#2196F3", "#9C27B0"][i]} roughness={0.5} />
        </mesh>
      ))}
    </group>
  )
}
