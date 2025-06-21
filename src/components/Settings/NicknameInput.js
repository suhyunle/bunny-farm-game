import React, { useState } from 'react';

const NicknameInput = () => {
    const [nickname, setNickname] = useState('');

    return (
        <div style={{ marginTop: '1rem' }}>
            <label>
                닉네임 변경:
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    style={{ marginLeft: '0.5rem' }}
                />
            </label>
        </div>
    );
};

export default NicknameInput;
