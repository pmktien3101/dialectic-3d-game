import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text, Image } from '@react-three/drei'
import ContentAndForm from './ContentAndForm'

const essenceAndPhenomenonConcepts = [
    {
        title: "Khái niệm phạm trù Bản Chất - Hiện Tượng",
        icon: "concept",
        image: "/phamtruBCHT.png",
        content: [
            {
                type: "definition",
                title: "Bản chất",
                text: "Là tổng thể những thuộc tính, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự tồn tại, vận động và phát triển của sự vật.",
            },
            {
                type: "definition",
                title: "Hiện tượng",
                text: "Là sự biểu hiện ra bên ngoài của bản chất, là hình thức mà bản chất bộc lộ ra trong những điều kiện nhất định.",
            },
            {
                type: "definition",
                title: "Có thể hiểu đơn giản",
                text: "Bản chất là cái sâu hơn, cái bên trong, tương đối ổn định. Hiện tượng là cái biểu hiện ra bên ngoài, thường xuyên biến đổi.",
            }
        ],
    },
    {
        title: "Ví Dụ",
        icon: "example",
        image: "mayden.jpg",
        content: [
            {
                type: "example",
                title: "Ví dụ về con người",
                points: [
                    "Bản chất: Người lương thiện tốt bụng.",
                    "Hiện tượng: Nhặt được của rơi sẽ tìm người trả lời, giúp đỡ người gặp khó khăn",
                ],
            },
            {
                type: "example",
                title: "Ví dụ về mây đen và mưa",
                points: [
                    "Hiện tượng: Mây đen.",
                    "Bản chất: Mây đen báo trước sự tiểm ẩn của một cơn mưa giông sắp đến",
                    "→  Nhìn hiện tượng có thể đoán trước được bản chất."
                ],
            },
        ],
    },
    {
        title: "Mối Quan Hệ Giữa Bản Chất - Hiện Tượng",
        icon: "relationship",
        image: "TNDL-BCHT.png",
        content: [
            {
                type: "relationship",
                points: [
                    "Bản chất và hiện tượng đều tồn tại khách quan, vừa thống nhất vừa đối lập với nhau",
                ],
            },
        ],
    },
    {
        title: "Sự thống nhất giữa bản chất và hiện tượng",
        icon: "relationship",
        image: "thongnhat.png",
        content: [
            {
                type: "relationship",
                points: [
                    "Bản chất bao giờ cũng bộc lộ ra thông qua hiện tượng",
                    "Hiện tượng là sự biểu hiện của bản chất",
                    "Không có bản chất nào tách rời khỏi hiện tượng và không có hiện tượng không biểu hiện bản chất",
                    "Bản chất thay đổi dẫn đến hiện tượng thay đổi, bản chất mất hiện tượng mất theo",
                ],
            },
        ],
    },
    {
        title: "Sự đối lập giữa bản chất và hiện tượng",
        icon: "relationship",
        image: "doilap.png",
        content: [
            {
                type: "relationship",
                points: [
                    "Bản chất là cái chung cái tất yếu, hiện tượng là cái riêng biệt, phong phú và đa dạng.",
                    "Bản chất là cái bên trong, hiện tượng là cái biểu hiện bên ngoài.",
                    "Bản chất là cái tương đối ổn định, hiện tượng là cái thường xuyên biến đổi.",
                    "Bản chất là cái sâu xa, hiện tượng là cái bề ngoài.",
                ],
            },
        ],
    },
    {
        title: "Ý Nghĩa Phương Pháp Luận Bản Chất - Hiện Tượng",
        icon: "methodology",
        image: "YNBCHT.webp",
        content: [
            {
                type: "methodology",
                points: [
                    "1. Muốn nhận thức đúng về sự vật, hiện tượng phải tìm hiểu bản chất của nó",
                    "2. Phải thông qua nhiều hiện tượng khác nhau mới có thể nhận thức đúng và đầy đủ về bản chất",
                    "3. Cần phải căn cứ vào bản chất để đánh giá chính xác về sự vật. Không nên chỉ căn cứ vào hiện tượng",
                ],
            },
            {
                type: "application",
                text: "Trong cuộc sống, cần nhìn nhận sự việc một cách toàn diện, không chỉ dừng lại ở vẻ bề ngoài mà phải tìm hiểu bản chất bên trong.",
            },
        ],
    },
]

export default function Level5Scene({ onBackClick }) {
    const [showTheory, setShowTheory] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FFEEAD',
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
                            url="/anhdoinghich.jpg"
                            scale={[3, 2, 1]}
                            position={[0, -0.5, 0]}
                            transparent
                            onClick={() => setShowPopup(true)}
                        />

                        <Text
                            position={[0, 2, 0]}
                            fontSize={0.5}
                            color="#228B22"
                            textAlign="center"
                            anchorX="center"
                            anchorY="middle"
                        >
                            Phạm Trù Bản Chất - Hiện Tượng
                        </Text>

                        <Text
                            position={[0, 1.2, 0]}
                            fontSize={0.2}
                            color="#228B22"
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
                            Home
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
                <ContentAndForm onContinue={onBackClick} concepts={essenceAndPhenomenonConcepts} />
            )}
        </div>
    )
} 