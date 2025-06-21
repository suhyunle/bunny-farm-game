import React, { useState, useEffect } from 'react';

const BunnyDisplay = ({ action = 'idle', style }) => {
    const animationFrames = {
        idle: ['/bunnys/bunny.png'],
        'bunny-seed': ['/bunnys/bunny.png', '/bunnys/bunny-seed.png'],
        'bunny-water': ['/bunnys/bunny-water.png', '/bunnys/bunny-water.png'],
        'bunny-get': ['/bunnys/bunny-get.png', '/bunnys/bunny-get.png'],
        'bunny-sleep': ['/bunnys/bunny-sleep.png', '/bunnys/bunny-sleep.png'],
    };

    const frames = animationFrames[action] || animationFrames['idle'];
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        if (frames.length > 1) {
            const interval = setInterval(() => {
                setCurrentFrame((prev) => (prev + 1) % frames.length);
            }, 300);
            return () => clearInterval(interval);
        } else {
            setCurrentFrame(0);
        }
    }, [action, frames]);

    return (
        <img
            src={frames[currentFrame]}
            alt={action}
            style={{
                width: '120px',
                height: 'auto',
                imageRendering: 'pixelated',
                filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.2))',
                ...style,
            }}
        />
    );
};

export default BunnyDisplay;
