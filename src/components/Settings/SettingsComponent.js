import React from 'react';
import SoundToggle from './SoundToggle';
import NicknameInput from './NicknameInput';

const SettingsComponent = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>⚙️ 설정</h2>
            <SoundToggle />
            <NicknameInput />
        </div>
    );
};

export default SettingsComponent;
