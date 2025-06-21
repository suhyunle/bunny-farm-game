import React from 'react';

function CarrotCounter({ carrots }) {
    return (
        <div>
            🥕 현재 당근 수: {carrots}
        </div>
    );
}

export default CarrotCounter; // ✅ 이 줄 있어야 함!
