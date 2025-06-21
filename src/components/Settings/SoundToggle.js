import React, { useState } from 'react';

const SoundToggle = () => {
    const [soundOn, setSoundOn] = useState(true);
    return (
        <div>
            <label>
                🔊 사운드:
                <input
                    type="checkbox"
                    checked={soundOn}
                    onChange={() => setSoundOn(!soundOn)}
                    style={{ marginLeft: '0.5rem' }}
                />
            </label>
        </div>
    );
};

export default SoundToggle;
