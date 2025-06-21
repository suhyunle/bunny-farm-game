import React from 'react';

const UpgradeShop = ({ carrots, setCarrots, autoHarvest, setAutoHarvest, setNotifications }) => {
    const handleBuyAuto = () => {
        if (autoHarvest) {
            setNotifications(prev => [...prev, '이미 자동 수확기를 구입했어요!']);
            return;
        }
        if (carrots >= 300) {
            setCarrots(prev => prev - 300);
            setAutoHarvest(true);
            setNotifications(prev => [...prev, '✅ 자동 수확기를 설치했어요!']);
        } else {
            setNotifications(prev => [...prev, '🥕 당근이 부족해요!']);
        }
    };

    return (
        <div style={{ border: '1px solid #888', padding: '1rem', marginTop: '1rem', width: '250px', borderRadius: '8px', background: '#fdfdfd' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '1rem' }}>🛠️ 업그레이드 상점</h2>
            <button
                onClick={handleBuyAuto}
                disabled={autoHarvest}
                style={{
                    padding: '0.5rem',
                    width: '100%',
                    backgroundColor: autoHarvest ? '#ddd' : '#e0ffe0',
                    borderRadius: '5px',
                    cursor: autoHarvest ? 'not-allowed' : 'pointer'
                }}
            >
                자동 수확기 구매 (300 🥕)
            </button>
        </div>
    );
};

export default UpgradeShop;
