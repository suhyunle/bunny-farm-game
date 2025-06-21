import React, { useState, useEffect } from 'react';
import FarmTile from './FarmTile';

function FarmGrid({ farmTiles, setFarmTiles, setCarrots }) {
    const [nextId, setNextId] = useState(farmTiles.length + 1);
    const [filter, setFilter] = useState('전체');

    useEffect(() => {
        const saved = localStorage.getItem('farmTiles');
        const carrots = localStorage.getItem('carrots');
        if (saved) setFarmTiles(JSON.parse(saved));
        if (carrots) setCarrots(Number(carrots));
    }, []);

    useEffect(() => {
        localStorage.setItem('farmTiles', JSON.stringify(farmTiles));
    }, [farmTiles]);

    useEffect(() => {
        localStorage.setItem('carrots', setCarrots.toString());
    }, [setCarrots]);

    const addNewTile = (method) => {
        const newTile = {
            id: nextId,
            step: 'clearing',
            progress: 0,
            completed: false,
            method,
        };
        setFarmTiles(prev => [...prev, newTile]);
        setNextId(prev => prev + 1);
    };

    const filteredTiles = filter === '전체' ? farmTiles : farmTiles.filter(t => t.method === filter);

    return (
        <div style={{ marginTop: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <label style={{ marginRight: '0.5rem' }}>🌱 밭 생성 방식:</label>
                <select id="farm-method" style={{ marginRight: '1rem' }}>
                    <option value="유기농">유기농</option>
                    <option value="스마트팜">스마트팜</option>
                    <option value="전통 농법">전통 농법</option>
                </select>
                <button onClick={() => {
                    const selected = document.getElementById('farm-method').value;
                    addNewTile(selected);
                }}>➕ 밭 생성</button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <label style={{ marginRight: '0.5rem' }}>🔍 필터:</label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="전체">전체</option>
                    <option value="유기농">유기농</option>
                    <option value="스마트팜">스마트팜</option>
                    <option value="전통 농법">전통 농법</option>
                </select>
            </div>
            <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',
            }}>
                {filteredTiles.map(tile => (
                    <FarmTile
                        key={tile.id}
                        tile={tile}
                        setFarmTiles={setFarmTiles}
                        setCarrots={setCarrots}
                    />
                ))}
            </div>
        </div>
    );
}

export default FarmGrid;