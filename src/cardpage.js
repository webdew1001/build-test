// CardPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from './Card';

function CardPage() {
  const { id } = useParams();

  const data = {
    1: { title: '첫 번째 카드', content: '첫 번째 카드 내용입니다.', buttonText: '첫 번째 버튼' },
    2: { title: '두 번째 카드', content: '두 번째 카드 내용이에요.', buttonText: '두 번째 버튼' },
    3: { title: '세 번째 카드', content: '세 번째 카드 내용입니다.', buttonText: '세 번째 버튼' },
  };

  // id에 맞는 데이터가 없으면 기본값 설정
  const cardData = data[id] || { title: '알 수 없는 카드', content: '데이터가 없습니다.', buttonText: '돌아가기' };

  const handleClick = () => {
    alert(`${cardData.title} 버튼 클릭!`);
  };

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← 메인으로 돌아가기</Link>
      <Card
        title={cardData.title}
        content={cardData.content}
        buttonText={cardData.buttonText}
        onButtonClick={handleClick}
      />
    </div>
  );
}

export default CardPage;
