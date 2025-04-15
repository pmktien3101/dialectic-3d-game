import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text, Image } from '@react-three/drei'
import ContentAndForm from './ContentAndForm'

const essenceAndPhenomenonConcepts = [
  {
    title: "Khái niệm phạm trù Khả Năng - Hiện Thực",
    icon: "concept",
    image: "/khananghienthuc.jpg",
    content: [
      {
        type: "definition",
        title: "Hiện thực",
        text: "Là những gì hiện có, hiện đang tồn tại thực sự. Bao gồm cả hiện thực vật chất (hiện thực khách quan) và hiện thực tinh thần (hiện thực chủ quan)",
      },
      {
        type: "definition",
        title: "Khả năng",
        text: "Là những gì hiện chưa có, nhưng sẽ có, sẽ tới khi có các điều kiện tương ứng. ",
      }
    ],
  },
  {
    title: "Ví Dụ",
    icon: "example",
    image: "HTKN_VN.png",
    content: [
      {
        type: "example",
        title: "Ví dụ 1",
        points: [
          "Hiện thực: Việt Nam là một nước đang phát triển.",
          "Khả năng: Việt Nam sẽ trở thành một nước phát triển.",
        ],
      },
      {
        type: "example",
        title: "Ví dụ 2",
        points: [
          "Hiện thực: Bạn đang đang học môn Mác - Lênin và không hiểu gì hết.",
          "Khả năng: Trong tương lại bạn sẽ hiểu được môn này và đạt điểm cao trong kỳ thi.",
          "→ Khả năng này sẽ trở thành hiện thực khi bạn có các điều kiện: nỗ lực học tập, rèn luyện và một chút may mắn trong kỳ thi.",
        ],
      },
    ],
  },
  {
    title: "Mối Quan Hệ Biện Chứng Giữa Khả Năng - Hiện Thực",
    icon: "relationship",
    image: "",
    content: [
      {
        type: "relationship",
        points: [
          "Khả năng và hiện thực sẽ tồn tại trong mối quan hệ thống nhất, không tách rời, thường xuyên chuyển hoá lẫn nhau trong quá trình phát triển của sự vật.",
          "Với cùng một sự vật thì trong những điều kiện nhất định, có thể tồn tại đồng thời một số khả năng khác nhau.",
          "Muốn một khả năng biến thành hiện thực, phải có điều kiện nhất định(điều kiện khách quan, nhân tố chủ quan).",
          "Nếu xuất hiện điều kiện mới, ở sự vật sẽ xuất hiện thêm những khả năng mới, và những khả năng vốn có cũng sẽ thay đổi."
        ],
      },
    ],
  },

  {
    title: "Ý Nghĩa Phương Pháp Luận Khả Năng - Hiện Thực",
    icon: "methodology",
    image: "thienthoidialoinhanhoa.jpg",
    content: [
      {
        type: "methodology",
        points: [
          "1. Trong nhận thức và thực tiễn phải dựa vào hiện thực để nhận thức và hành động.",
          "2. Cần nhận thức các khả năng trong hiện thực để có hành động phù hợp trong từng hoàn cảnh.",
          "3. Phát huy nhân tố chủ quan trong nhận thức và hoạt động để biến khả năng thành hiện thực.",
        ],
      },
    ],
  },
]

const DreamPage = ({ onBackClick }) => {
  const [showTheory, setShowTheory] = useState(false)
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
              Ước Mơ
            </Text>
          </Canvas>

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
};

export default DreamPage;