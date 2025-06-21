// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

import CarrotCounter from './components/CarrotCounter';
import BunnyDisplay from './components/BunnyDisplay';
import AccessoryShop from './components/shop/AccessoryShop';
import UpgradeShop from './components/UpgradeShop';
import FarmGrid from './components/farm/FarmGrid';
import Notification from './components/Notification';
import useAutoHarvest from './hooks/useAutoHarvest';

import InventoryComponent from './components/Inventory/InventoryComponent';
import VillageComponent from './components/Village/VillageComponent';
import SettingsComponent from './components/Settings/SettingsComponent';
import NavBar from './components/Navbar';

function App() {
    const [carrots, setCarrots] = useState(100);
    const [bunnyStyle, setBunnyStyle] = useState(null);
    const [bunnyAction, setBunnyAction] = useState('idle');
    const [farmTiles, setFarmTiles] = useState([
        { id: 1, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 150 } },
        { id: 2, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 350 } },
        { id: 3, step: 'clearing', progress: 0, completed: false, position: { top: 300, left: 550 } },
    ]);
    const [autoHarvest, setAutoHarvest] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [tab, setTab] = useState('farm');
    const [backgroundIndex, setBackgroundIndex] = useState(1);
    const [bunnyPosition, setBunnyPosition] = useState({ top: 200, left: 200 });
    const [nickname, setNickname] = useState('이름 없는 토끼');

    useAutoHarvest(autoHarvest, farmTiles, setFarmTiles, setCarrots);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex(prev => (prev % 4) + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCarrots(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleFarmTileClick = (tileId) => {
        const tile = farmTiles.find(t => t.id === tileId);
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
            setTimeout(() => setBunnyAction('idle'), 2000);
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
            }}
        >
            <h1>🐰 {nickname}의 당근 농장</h1>

            <NavBar currentTab={tab} onTabChange={setTab} />

            <CarrotCounter carrots={carrots} />

            <div
                style={{
                    position: 'absolute',
                    top: bunnyPosition.top,
                    left: bunnyPosition.left,
                    transition: 'top 1s ease, left 1s ease',
                }}
            >
                <BunnyDisplay style={bunnyStyle} action={bunnyAction} />
            </div>

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

            {tab === 'inventory' && <InventoryComponent />}
            {tab === 'village' && <VillageComponent />}
            {tab === 'settings' && (
                <SettingsComponent
                    nickname={nickname}
                    setNickname={setNickname}
                />
            )}

            <Notification notifications={notifications} setNotifications={setNotifications} />
        </div>
    );
}

export default App;