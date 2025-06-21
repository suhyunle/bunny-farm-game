import React, { useState, useEffect } from 'react';
import '../App.css';

import CarrotCounter from '../components/CarrotCounter';
import BunnyDisplay from '../components/BunnyDisplay';
import AccessoryShop from '../components/shop/AccessoryShop';
import UpgradeShop from '../components/UpgradeShop';
import FarmGrid from '../components/farm/FarmGrid';
import Notification from '../components/Notification';
import NicknameInput from '../components/Settings/NicknameInput';
import useAutoHarvest from '../hooks/useAutoHarvest';
import NavBar from '../components/Navbar'; // NavBar 추가

function GamePage() {
    const [carrots, setCarrots] = useState(100);
    const [bunnyStyle, setBunnyStyle] = useState(null);
    const [bunnyAction, setBunnyAction] = useState('idle');
    const [bunnyPosition, setBunnyPosition] = useState({ top: 200, left: 200 });
    const [nickname, setNickname] = useState('토끼');

    const [farmTiles, setFarmTiles] = useState([
        { id: 1, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 150 } },
        { id: 2, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 350 } },
        { id: 3, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 550 } },
    ]);

    const [autoHarvest, setAutoHarvest] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [tab, setTab] = useState('farm');
    const [backgroundIndex, setBackgroundIndex] = useState(1);

    useAutoHarvest(autoHarvest, farmTiles, setFarmTiles, setCarrots);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prev) => (prev % 4) + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarrots((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleFarmTileClick = (tileId) => {
        const tile = farmTiles.find((t) => t.id === tileId);
        if (tile) {
            setBunnyPosition(tile.position);

            const actionMap = {
                clearing: 'bunny-seed',
                watering: 'bunny-water',
                harvesting: 'bunny-get',
                resting: 'bunny-sleep',
            };

            const action = actionMap[tile.step] || 'idle';
            setBunnyAction(action);

            setTimeout(() => {
                setBunnyAction('idle');
            }, 2000);
        }
    };

    const backgroundUrl = `/background/background${backgroundIndex}.png`;

    return (
        <div
            className="App"
            style={{
                padding: '2rem',
                textAlign: 'center',
                minHeight: '100vh',
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Poor Story", sans-serif',
            }}
        >
            {/* ✅ 네비게이션 바 */}
            <NavBar currentTab={tab} onTabChange={setTab} />

            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333', textShadow: '1px 1px 0px #fff' }}>
                🐰 {nickname}의 당근 농장
            </h1>

            <CarrotCounter carrots={carrots} />

            {/* ✅ 토끼 위치 */}
            <div
                style={{
                    position: 'absolute',
                    top: bunnyPosition.top,
                    left: bunnyPosition.left,
                    transform: 'translate(-50%, -100%)',
                    transition: 'top 1s ease, left 1s ease',
                    zIndex: 10,
                }}
            >
                <BunnyDisplay
                    action={bunnyAction}
                    style={{
                        width: '120px',
                        filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.2))',
                    }}
                />
            </div>

            {/* ✅ 탭별 화면 */}
            {tab === 'farm' && (
                <FarmGrid
                    farmTiles={farmTiles}
                    setFarmTiles={setFarmTiles}
                    setCarrots={setCarrots}
                    autoHarvest={autoHarvest}
                    onTileClick={handleFarmTileClick}
                />
            )}

            {tab === 'shop' && (
                <>
                    <AccessoryShop
                        carrots={carrots}
                        setCarrots={setCarrots}
                        setBunnyStyle={setBunnyStyle}
                    />
                    <UpgradeShop
                        carrots={carrots}
                        setCarrots={setCarrots}
                        setAutoHarvest={setAutoHarvest}
                        autoHarvest={autoHarvest}
                        setNotifications={setNotifications}
                    />
                </>
            )}

            {tab === 'inventory' && <h2>🎒 인벤토리 준비 중입니다!</h2>}
            {tab === 'village' && <h2>🏡 마을 구현 예정입니다!</h2>}
            {tab === 'settings' && <NicknameInput nickname={nickname} setNickname={setNickname} />}

            <Notification notifications={notifications} setNotifications={setNotifications} />
        </div>
    );
}

export default GamePage;
