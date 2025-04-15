import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text, Image } from '@react-three/drei'
import ContentAndForm from './ContentAndForm'

const essenceAndPhenomenonConcepts = [
    {
        title: "Khái niệm phạm trù Bản Chất - Hiện Tượng",
        icon: "concept",
        image: "/banchathientuong.jpg",
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
        image: "",
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
    const [showTheory, setShowTheory] = useState(false);
    const [showPopup, setShowPopup] = useState(true); // Thay đổi giá trị mặc định thành true
    const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);

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
                                Chọn câu ca dao tục ngữ phù hợp:
                            </p>
                            <img
                                src="/bietmatkbietlong.jpg"
                                alt="Phạm Trù Bản Chất - Hiện Tượng"
                                style={{
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'contain',
                                    marginBottom: '20px',
                                    border: '5px solid #228B22',
                                    borderRadius: '10px'
                                }}
                            />
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '10px',
                            }}>
                                <button
                                    onClick={(e) => {
                                        e.target.style.backgroundColor = '#f44336';
                                        e.target.style.color = 'white';
                                    }}
                                    style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    A. "Tốt gỗ hơn tốt nước sơn"
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.target.style.backgroundColor = '#f44336';
                                        e.target.style.color = 'white';
                                    }}
                                    style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    B. "Một con ngựa đau cả tàu bỏ cỏ"
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.target.style.backgroundColor = '#4CAF50';
                                        e.target.style.color = 'white';
                                        setCorrectAnswerSelected(true);
                                    }}
                                    style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    C. "Biết người biết mặt, khó biết lòng
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.target.style.backgroundColor = '#f44336';
                                        e.target.style.color = 'white';
                                    }}
                                    style={{
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    D. "Ăn quả nhớ kẻ trồng cây"
                                </button>
                            </div>
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
                <ContentAndForm onContinue={onBackClick} concepts={essenceAndPhenomenonConcepts} />
            )}
        </div>
    );
}
