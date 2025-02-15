import React from 'react';
import './SalePage.css';
import perfume1 from '../assets/perfume1.png';

export default function SalePage() {
    return (
        <div className="sale-container">
            <div className="sale-item">
                <img src={perfume1} className="sale-image" />
                <p className="sale-description">Exclusive Perfume on Sale!</p>
            </div>
        </div>
    );
}