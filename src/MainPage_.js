// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>메인 화면</h1>
      <ul>
        <li><Link to="/card/1">카드 1 보기</Link></li>
        <li><Link to="/card/2">카드 2 보기</Link></li>
        <li><Link to="/card/3">카드 3 보기</Link></li>
      </ul>
    </div>
  );
}

export default MainPage;
