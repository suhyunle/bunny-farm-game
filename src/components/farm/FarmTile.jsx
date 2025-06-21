import React, { useState, useEffect } from 'react';

const stepOrder = ['clearing', 'tilling', 'planting', 'watering', 'harvesting'];
const stepLabel = {
    clearing: '🧹 잡초 제거',
    tilling: '⛏️ 땅 고르기',
    planting: '🌱 씨앗 심기',
    watering: '💧 물 주기',
    harvesting: '🥕 수확하기'
};

function FarmTile({ tile, setFarmTiles, setCarrots }) {
    const [isWorking, setIsWorking] = useState(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('');
    const audio = new Audio('/sounds/work.mp3');

    const handleWork = () => {
        if (isWorking) return;
        setIsWorking(true);
        setProgress(0);
        setStatusText(stepLabel[tile.step] + ' 중...');
        audio.play();

        let elapsed = 0;
        const interval = setInterval(() => {
            elapsed += 1;
            setProgress(elapsed * 20);
            if (elapsed >= 5) {
                clearInterval(interval);
                setIsWorking(false);
                setStatusText('');
                const currentIndex = stepOrder.indexOf(tile.step);
                const nextStep = stepOrder[currentIndex + 1];

                setFarmTiles(prev =>
                    prev.map(t =>
                        t.id === tile.id
                            ? {
                                ...t,
                                step: nextStep || 'clearing',
                                completed: nextStep === undefined,
                            }
                            : t
                    )
                );

                if (tile.step === 'harvesting') {
                    const bonus = tile.method === '스마트팜' ? 5 : 0;
                    setCarrots(prev => prev + 10 + bonus);
                }
            }
        }, 1000);
    };

    return (
        <div style={{
            border: '3px dashed #ffa94d',
            padding: '1.2rem',
            borderRadius: '16px',
            width: '200px',
            textAlign: 'center',
            background: 'linear-gradient(#fffaf3, #fff1d6)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease-in-out',
            animation: isWorking ? 'bounce 0.5s infinite alternate' : 'none'
        }}>
            <h3 style={{ marginBottom: '0.5rem' }}>🌾 밭 #{tile.id}</h3>
            <p>{stepLabel[tile.step]}</p>
            {statusText && <p style={{ fontSize: '0.85rem', color: '#888' }}>{statusText}</p>}
            {isWorking && (
                <div style={{
                    height: '8px',
                    width: '100%',
                    backgroundColor: '#eee',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    margin: '0.5rem 0'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: '#ffa94d',
                        transition: 'width 1s linear'
                    }} />
                </div>
            )}
            <button onClick={handleWork} disabled={isWorking}>
                {isWorking ? '작업 중...' : '작업하기'}
            </button>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#555' }}>🌱 {tile.method || '일반'}</p>
        </div>
    );
}

export default FarmTile;