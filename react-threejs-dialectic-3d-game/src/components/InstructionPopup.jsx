import { useState } from 'react';

function InstructionPopup({ onContinue }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#1a1a2e',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)',
      }}>
        <h2 style={{ 
          color: '#FF6B6B',
          marginBottom: '20px',
          fontSize: '28px'
        }}>
          Cái Riêng và Cái Chung
        </h2>
        <p style={{ 
          color: 'white',
          fontSize: '18px',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Anh A (Hà Nội) và Chị B (TP.HCM) cùng học lớp Triết học. Hãy quan sát và tìm điểm chung/riêng!
        </p>
        <p style={{ 
          color: '#cccccc',
          fontSize: '16px',
          marginBottom: '30px'
        }}>
          Nhiệm vụ: Click vào từng nhân vật để xem thông tin. Sau đó trả lời các câu hỏi trắc nghiệm.
        </p>
        <p style={{ 
          color: '#FF6B6B',
          fontSize: '16px',
          marginBottom: '30px',
          fontWeight: 'bold'
        }}>
          Hoàn thành 100% sẽ mở khóa huy hiệu "Triết gia nhí"!
        </p>
        <button
          onClick={onContinue}
          style={{
            backgroundColor: '#FF6B6B',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Bắt Đầu
        </button>
      </div>
    </div>
  );
}

export default InstructionPopup; 