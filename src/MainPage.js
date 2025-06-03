// MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const goToSubPage = () => {
    navigate('/sub');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>메인 페이지 콘텐츠</h2>
      <button onClick={goToSubPage} style={{ padding: '10px 20px', fontSize: '16px' }}>
        서브페이지로 이동
      </button>
    </div>
  );
}

export default MainPage;
