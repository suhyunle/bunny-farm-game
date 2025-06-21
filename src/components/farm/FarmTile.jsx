import React from 'react';

const stepOrder = ['clearing', 'tilling', 'planting', 'watering', 'harvesting'];
const stepLabel = {
    clearing: '잡초 제거',
    tilling: '땅 고르기',
    planting: '씨앗 심기',
    watering: '물 주기',
    harvesting: '수확하기'
};

function FarmTile({ tile, setFarmTiles, setCarrots }) {
    const handleWork = () => {
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
            setCarrots(prev => prev + 10);
        }
    };

    return (
        <div style={{ border: '2px solid #888', padding: '1rem', borderRadius: '8px', width: '150px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <h3>밭 #{tile.id}</h3>
            <p>{stepLabel[tile.step]}</p>
            <button onClick={handleWork} style={{ marginTop: '0.5rem' }}>작업하기</button>
        </div>
    );
}

export default FarmTile;