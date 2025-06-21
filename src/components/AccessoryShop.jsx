import React from 'react';
import { accessories } from '../data/accessories';

function AccessoryShop({ carrots, setCarrots, setBunnyStyle }) {
    const buyItem = (item) => {
        if (carrots >= item.cost) {
            setCarrots(prev => prev - item.cost);
            setBunnyStyle(item.id);
        } else {
            alert('당근이 부족해요!');
        }
    };

    return (
        <div>
            <h2>🎀 악세서리 상점</h2>
            {accessories.map(item => (
                <button key={item.id} onClick={() => buyItem(item)}>
                    {item.name} - {item.cost} 🥕
                </button>
            ))}
        </div>
    );
}

export default AccessoryShop; // ✅ 이 줄 없으면 App에서 불러오다 에러남
