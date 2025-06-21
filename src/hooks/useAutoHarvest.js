import { useEffect } from 'react';

export default function useAutoHarvest(enabled, farmTiles, setFarmTiles, setCarrots) {
    useEffect(() => {
        if (!enabled) return;
        const interval = setInterval(() => {
            setFarmTiles(prev =>
                prev.map(tile => {
                    if (tile.step === 'harvesting') {
                        setCarrots(c => c + 10);
                        return { ...tile, step: 'clearing' };
                    }
                    return tile;
                })
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [enabled, farmTiles, setCarrots, setFarmTiles]);
}
