export function Walls() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 2, -5]} receiveShadow>
        <boxGeometry args={[10, 4, 0.1]} />
        <meshStandardMaterial color="#E0E0E0" roughness={0.8} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[10, 4, 0.1]} />
        <meshStandardMaterial color="#EEEEEE" roughness={0.8} />
      </mesh>

      {/* Right wall */}
      <mesh position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[10, 4, 0.1]} />
        <meshStandardMaterial color="#EEEEEE" roughness={0.8} />
      </mesh>

      {/* Front wall with door */}
      <group position={[0, 2, 5]}>
        {/* Wall sections */}
        <mesh position={[-3, 0, 0]} receiveShadow>
          <boxGeometry args={[4, 4, 0.1]} />
          <meshStandardMaterial color="#E0E0E0" roughness={0.8} />
        </mesh>
        <mesh position={[3, 0, 0]} receiveShadow>
          <boxGeometry args={[4, 4, 0.1]} />
          <meshStandardMaterial color="#E0E0E0" roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.5, 0]} receiveShadow>
          <boxGeometry args={[2, 1, 0.1]} />
          <meshStandardMaterial color="#E0E0E0" roughness={0.8} />
        </mesh>

        {/* Door */}
        <mesh position={[0, -0.5, -0.05]} receiveShadow>
          <boxGeometry args={[1.8, 3, 0.05]} />
          <meshStandardMaterial color="#8D6E63" roughness={0.7} />
        </mesh>

        {/* Door handle */}
        <mesh position={[0.7, -0.5, -0.1]} receiveShadow>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#FFC107" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Windows on right wall */}
      {[-2, 2].map((z, i) => (
        <group key={i} position={[4.95, 2, z]} rotation={[0, -Math.PI / 2, 0]}>
          {/* Window frame */}
          <mesh receiveShadow>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial color="#BDBDBD" roughness={0.5} />
          </mesh>

          {/* Window glass */}
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[1.8, 1.3, 0.02]} />
            <meshPhysicalMaterial color="#B3E5FC" transmission={0.9} roughness={0.05} ior={1.5} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
