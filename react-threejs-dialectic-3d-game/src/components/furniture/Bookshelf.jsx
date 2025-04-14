export function Bookshelf({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Bookshelf structure */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.5, 3, 2]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>

      {/* Shelves */}
      {[0.5, 1.5, 2.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.55, 0.05, 2]} />
          <meshStandardMaterial color="#4E342E" roughness={0.7} />
        </mesh>
      ))}

      {/* Books on shelves */}
      {/* Bottom shelf */}
      <BooksRow position={[0, 0.3, 0]} count={8} />

      {/* Middle shelf */}
      <BooksRow position={[0, 1.3, 0]} count={7} />

      {/* Top shelf */}
      <BooksRow position={[0, 2.3, 0]} count={6} />

      {/* Decorative items */}
      <mesh position={[0, 2.3, 0.7]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#2196F3" roughness={0.3} />
      </mesh>

      <mesh position={[0, 0.3, -0.7]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#FFC107" roughness={0.5} />
      </mesh>
    </group>
  )
}

function BooksRow({ position = [0, 0, 0], count = 8 }) {
  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
  ]

  const books = []
  let currentOffset = -0.9

  for (let i = 0; i < count; i++) {
    const width = 0.1 + Math.random() * 0.1
    const height = 0.3 + Math.random() * 0.2
    const color = colors[Math.floor(Math.random() * colors.length)]

    books.push(
      <mesh key={i} position={[0, position[1] + height / 2, position[2] + currentOffset + width / 2]} castShadow>
        <boxGeometry args={[0.3, height, width]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>,
    )

    currentOffset += width + 0.02
  }

  return <group position={position}>{books}</group>
}
