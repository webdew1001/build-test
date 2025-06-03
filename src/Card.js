// Card.js
import React from 'react';

function Card({ title, content, buttonText, onButtonClick }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      width: '300px',
      marginTop: '20px',
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}

export default Card;
