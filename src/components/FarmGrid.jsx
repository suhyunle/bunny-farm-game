import React from 'react';
import FarmTile from './FarmTile';

function FarmGrid({ farmTiles, setFarmTiles, setCarrots }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {farmTiles.map(tile => (
                <FarmTile
                    key={tile.id}
                    tile={tile}
                    setFarmTiles={setFarmTiles}
                    setCarrots={setCarrots}
                />
            ))}
        </div>
    );
}

export default FarmGrid;