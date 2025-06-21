// BunnyDisplay.jsx
import React, { useState, useEffect } from 'react';

const BunnyDisplay = ({ action = 'idle', style }) => {
    const animationFrames = {
        idle: ['/bunnys/bunny.png'],
        'bunny-seed': ['public/bunnys/bunny.png', '/bunnys/bunny-seed.png'],
        'bunny-water': ['/bunnys/bunny-water1.png', '/bunnys/bunny-water2.png'],
        'bunny-get': ['/bunnys/bunny-get1.png', '/bunnys/bunny-get2.png'],
        'bunny-sleep': ['/bunnys/bunny-sleep1.png', '/bunnys/bunny-sleep2.png'],
    };

    const frames = animationFrames[action] || animationFrames['idle'];
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        if (frames.length > 1) {
            const interval = setInterval(() => {
                setCurrentFrame((prev) => (prev + 1) % frames.length);
            }, 300); // 300ms 간격으로 프레임 변경

            return () => clearInterval(interval);
        } else {
            setCurrentFrame(0); // 단일 프레임일 경우 초기화
        }
    }, [action]);

    const combinedStyle = (typeof style === 'object' && !Array.isArray(style)) ? style : {};

    return (
        <img
            src={frames[currentFrame]}
            alt={action}
            style={{
                width: '60px',
                height: 'auto',
                imageRendering: 'pixelated',
                ...combinedStyle,
            }}
        />
    );
};

export default BunnyDisplay;
