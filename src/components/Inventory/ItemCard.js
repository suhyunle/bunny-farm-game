import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            width: '120px',
            textAlign: 'center',
            backgroundColor: '#fffef5'
        }}>
            <img src={item.image} alt={item.name} style={{ width: '100%' }} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemCard;
