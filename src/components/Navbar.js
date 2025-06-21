import React from 'react';

const NavBar = ({ currentTab, onTabChange }) => {
    const tabs = [
        { key: 'farm', label: '🌾 농장' },
        { key: 'shop', label: '🛍 상점' },
        { key: 'inventory', label: '🎒 인벤토리' },
        { key: 'village', label: '🏡 마을' },
        { key: 'settings', label: '⚙️ 설정' },
    ];

    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                backgroundColor: '#fff8dc',
                padding: '1rem',
                borderLeft: '2px solid #e0c097',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        padding: '0.6rem 1rem',
                        borderRadius: '999px',
                        border: 'none',
                        backgroundColor: currentTab === tab.key ? '#ffb703' : '#ffeeb2',
                        color: '#333',
                        cursor: 'pointer',
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default NavBar;
