import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text } from '@react-three/drei'
import GiftBox from './GiftBox'
import ContentAndForm from './ContentAndForm'

const contentAndFormConcepts = [
  {
    title: "Nội Dung và Hình Thức",
    icon: "concept",
    image: "/phamtruNDHT.png",
    content: [
      {
        type: "definition",
        title: "Phạm trù nội dung",
        text: "Dùng để chỉ toàn bộ các mặt, các yếu tố, quá trình cấu thành nên sự vật, hiện tượng.",
      },
      {
        type: "definition",
        title: "Phạm trù hình thức",
        text: "Dùng để chỉ phương thức tồn tại và phát triển của sự vật, hiện tượng. Là hệ thống các mối liên hệ tương giữa các yếu tố của sự vật, hiện tượng đó.",
      },
      {
        type: "definition",
        title: "Chú ý",
        text: "Hình thức không chỉ là cái biểu hiện bên ngoài. Mà chủ yếu là thể hiện cấu trúc bên trong của sự vật, hiện tượng.",
      },
    ],
  },
  {
    title: "Ví Dụ",
    icon: "example",
    image: "H2O.png",
    content: [
      {
        type: "example",
        title: "Ví dụ về phân tử nước",
        points: [
          "Nội dung: 2 nguyển tử Hidro và 1 nguyên tử Oxi",
          "Hình thức: Là cách thức liên kết hóa học của nó: H-O-H",
        ],
      },
      {
        type: "example",
        title: "Ví dụ về cơ thể người",
        points: [
          "Nội dung: Các bộ phận bên trong, cơ quan, quá trình",
          "Hình thức: Các phương thức liên kết bên trong, hoạt động liên kết với nhau của các cơ quan, quá trình.",
        ],
      },
    ],
  },
  {
    title: "Mối Quan Hệ Giữa Nội Dung - Hình Thức",
    icon: "relationship",
    image: "MQHNDHT.png",
    content: [
      {
        type: "relationship",
        points: [
          "Nội dung và hình thức có vai trò gắn bó với nhau",
          "Một nội dung có thể có nhiều hình thức, và một hình thức có thể chứa đựng nhiều nội dung khác nhau",
          "Nội dung giữ vai trò quyết định hình thức",
          "Hình thức tác động ngược lại nội dung",
        ],
      },
    ],
  },
  {
    title: "Ý Nghĩa Nội Dung - Hình Thức",
    icon: "methodology",
    image: "YNNDHT.webp",
    content: [
      {
        type: "methodology",
        points: [
          "1. Không tách rời nội dung và hình thức hoặc tuyệt đối hóa một trong hai",
          "2. Cần căn cứ trước hết vào nội dung để xét đoán sự vật",
          "3. Phát huy tính tác động tích cực của hình thức với nội dung",
        ],
      },
    ],
  },
]

export default function GiftBoxScene({ onBackClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showTheory, setShowTheory] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => {
      setShowContent(true)
    }, 2000)
  }

  const handleStartTheory = () => {
    setShowTheory(true)
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#96CEB4',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {!showTheory ? (
        <>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <Environment preset="sunset" />

            <GiftBox
              position={[0, 0, 0]}
              onClick={!isOpen ? handleOpen : undefined}
              isOpen={isOpen}
            />
          </Canvas>

          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 1,
            padding: '10px'
          }}>
            <button
              onClick={onBackClick}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}
            >
              Home
            </button>
          </div>

          {isOpen && (
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1
            }}>
              <button
                onClick={handleStartTheory}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Đi tới phần lý thuyết
              </button>
            </div>
          )}
        </>
      ) : (
        <ContentAndForm onContinue={onBackClick} concepts={contentAndFormConcepts} />
      )}
    </div>
  )
}
