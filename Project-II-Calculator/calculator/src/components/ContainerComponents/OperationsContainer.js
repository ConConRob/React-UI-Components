import React from 'react';
import './Containers.css';
import NumberButton from '../ButtonComponents/NumberButton';

export default function OperationsContainer() {
    return (
        <div className="operations-container">
            <NumberButton buttonStyle= "operation-button" text="÷" />
            <NumberButton buttonStyle= "operation-button" text="x" />
            <NumberButton buttonStyle= "operation-button" text="-" />
            <NumberButton buttonStyle= "operation-button" text="+" />
            <NumberButton buttonStyle= "operation-button" text="=" />
        </div>
    )
}