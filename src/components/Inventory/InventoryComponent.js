import React from 'react';
import ItemCard from './ItemCard';
import inventoryData from './inventoryData';

const InventoryComponent = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>🎒 인벤토리</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {inventoryData.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default InventoryComponent;
