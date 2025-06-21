import React, { useState } from 'react';
import { accessories } from '../../data/accessories';

const ITEMS_PER_PAGE = 8;

export default function AccessoryShop({ carrots, setCarrots, setBunnyStyle }) {
    const [page, setPage] = useState(0);

    const handleBuy = (item) => {
        if (carrots >= item.cost) {
            setCarrots((prev) => prev - item.cost);
            setBunnyStyle(item.id);
        } else {
            alert('🥕 당근이 부족해요!');
        }
    };

    const maxPage = Math.ceil(accessories.length / ITEMS_PER_PAGE);
    const visibleItems = accessories.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    return (
        <div className="accessory-shop-container">
            <h2 className="title">🛍 악세서리 상점</h2>
            {accessories.length === 0 ? (
                <p>악세서리가 없습니다.</p>
            ) : (
                <>
                    <div className="accessory-grid">
                        {visibleItems.map((item) => (
                            <div
                                key={item.id}
                                className="accessory-card"
                                onClick={() => handleBuy(item)}
                            >
                                <div className="emoji">{item.name}</div>
                                <div className="cost">{item.cost} 🥕</div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                            disabled={page === 0}
                        >
                            ◀
                        </button>
                        <span>
                            {page + 1} / {maxPage}
                        </span>
                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, maxPage - 1))}
                            disabled={page === maxPage - 1}
                        >
                            ▶
                        </button>
                    </div>
                </>
            )}
            <style jsx>{`
                .accessory-shop-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 1rem;
                }
                .title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .accessory-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1rem;
                    justify-items: center;
                }
                .accessory-card {
                    background: #fff9f0;
                    border-radius: 12px;
                    padding: 1rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    cursor: pointer;
                    transition: background-color 0.2s ease, transform 0.2s ease;
                }
                .accessory-card:hover {
                    background-color: #ffe6b3;
                    transform: translateY(-2px);
                }
                .emoji {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                }
                .cost {
                    font-size: 0.9rem;
                    color: #555;
                }
                .pagination {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }
                .pagination button {
                    padding: 0.5rem 1rem;
                    border: none;
                    background: #ffa94d;
                    color: white;
                    border-radius: 8px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .pagination button:hover:not(:disabled) {
                    background-color: #f08c00;
                }
                .pagination button:disabled {
                    opacity: 0.5;
                    cursor: default;
                }
            `}</style>
        </div>
    );
}