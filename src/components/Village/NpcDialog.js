import React from 'react';

const NpcDialog = ({ npc }) => {
    return (
        <div style={{ marginBottom: '1.5rem', borderBottom: '1px dashed #aaa', paddingBottom: '1rem' }}>
            <h3>{npc.name}</h3>
            <p>{npc.dialog}</p>
        </div>
    );
};

export default NpcDialog;
