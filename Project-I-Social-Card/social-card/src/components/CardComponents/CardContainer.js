import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

export default function CardContainer () {
    return (
        <div className="card-container" onClick={()=>window.open('https://www.codexworld.com', '_blank')} >
            <CardBanner />
            <CardContent />
        </div>
    )
}