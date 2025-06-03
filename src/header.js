// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      backgroundColor: '#282c34',
      padding: '10px 20px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <h1>내 사이트 헤더</h1>
      <nav>
        <Link to="/" style={{ color: 'white', marginRight: 15, textDecoration: 'none' }}>메인</Link>
        <Link to="/sub" style={{ color: 'white', textDecoration: 'none' }}>서브페이지</Link>
      </nav>
    </header>
  );
}

export default Header;
