import React from 'react';
import NpcDialog from './NpcDialog';
import villageData from './villageData';

const VillageComponent = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>🏡 마을</h2>
            {villageData.map(npc => (
                <NpcDialog key={npc.id} npc={npc} />
            ))}
        </div>
    );
};

export default VillageComponent;
