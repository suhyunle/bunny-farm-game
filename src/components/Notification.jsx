import React, { useEffect } from 'react';

function Notification({ notifications, setNotifications }) {
    useEffect(() => {
        if (notifications.length === 0) return;
        const timer = setTimeout(() => {
            setNotifications(prev => prev.slice(1));
        }, 3000);
        return () => clearTimeout(timer);
    }, [notifications, setNotifications]);

    return (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 999 }}>
            {notifications.map((msg, idx) => (
                <div key={idx} style={{ background: '#fffae6', padding: '0.5rem 1rem', marginBottom: '0.5rem', borderRadius: '6px', boxShadow: '0 0 4px rgba(0,0,0,0.1)' }}>
                    {msg}
                </div>
            ))}
        </div>
    );
}

export default Notification;