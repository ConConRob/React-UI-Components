import React from 'react';
import './Display.css';

export default function ({curVal}) {
    return (
        <div className="calculator-display">{curVal}</div>
    )
    
}