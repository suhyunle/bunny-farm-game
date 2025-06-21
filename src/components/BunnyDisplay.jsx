// BunnyDisplay.jsx
import React from 'react';

const BunnyDisplay = ({ action }) => {
    const actionMap = {
        idle: '/bunnys/bunny.png',
        'bunny-seed': '/bunnys/bunny-seed.png',
        'bunny-water': '/bunnys/bunny-water.png',
        'bunny-get': '/bunnys/bunny-get.png',
        'bunny-sleep': '/bunnys/bunny-sleep.png',
    };

    const imageUrl = actionMap[action] || actionMap['idle'];

    return (
        <img
            src={imageUrl}
            alt={action}
            style={{ width: '60px', height: 'auto' }}
        />
    );
};

export default BunnyDisplay;
