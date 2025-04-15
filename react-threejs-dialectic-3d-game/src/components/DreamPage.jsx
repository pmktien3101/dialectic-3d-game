import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text, Image } from '@react-three/drei'
import ContentAndForm from './ContentAndForm'

const DreamPage = ({ onBackClick }) => {
  const [showTheory, setShowTheory] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#D4A5A5',
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

            <Image
              url="/uocmo.webp"
              scale={[3, 2, 1]}
              position={[0, -0.5, 0]}
              transparent
              onClick={() => setShowPopup(true)}
            />

            <Text
              position={[0, 2, 0]}
              fontSize={0.5}
              color="#ffffff"
              textAlign="center"
              anchorX="center"
              anchorY="middle"
            >
              Phạm Trù Khả Năng Và Hiện Thực
            </Text>
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.2}
              color="#ffffff"
              textAlign="center"
              anchorX="center"
              anchorY="middle"
              maxWidth={10}
            >
              Hãy cho tôi biết cảm nhận của bạn về bức ảnh bên dưới
            </Text>
          </Canvas>

          {showPopup && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              zIndex: 2,
              maxWidth: '80%',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#228B22',
                fontSize: '22px',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                <strong>Nói một cách đơn giản</strong>
              </p>
              <p style={{
                color: '#228B22',
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                <strong>Hiện tượng</strong> là cái ta dễ thấy, dễ cảm nhận – như một lớp áo khoác bên ngoài.
              </p>
              <p style={{
                color: '#228B22',
                fontSize: '18px',
                marginBottom: '20px',
                lineHeight: '1.5'
              }}>
                <strong>Bản chất</strong> là cái sâu hơn – là những đặc điểm ổn định, cốt lõi, quyết định bên trong.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  marginTop: '20px',
                  padding: '8px 16px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Đóng
              </button>
            </div>
          )}

          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 1
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
                fontWeight: 'bold'
              }}
            >
              Quay Lại
            </button>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '20px'
          }}>
            <button
              onClick={() => setShowTheory(true)}
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
              Khám phá lý thuyết
            </button>
          </div>
        </>
      ) : (
        // <ContentAndForm onContinue={onBackClick} concepts={essenceAndPhenomenonConcepts} />
        <></>
      )}
    </div>
  );
};

export default DreamPage;