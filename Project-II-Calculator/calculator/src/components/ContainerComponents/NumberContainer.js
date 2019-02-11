import React from 'react';
import './Containers.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
export default function OperationsContainer() {
    return (
        <div className="numbers-container">
            <ActionButton buttonStyle= "num-button" text="0" />
            <NumberButton buttonStyle= "num-button" text="1" />
            <NumberButton buttonStyle= "num-button" text="2" />
            <NumberButton buttonStyle= "num-button" text="3" />
            <NumberButton buttonStyle= "num-button" text="4" />
            <NumberButton buttonStyle= "num-button" text="5" />
            <NumberButton buttonStyle= "num-button" text="6" />
            <NumberButton buttonStyle= "num-button" text="7" />
            <NumberButton buttonStyle= "num-button" text="8" />
            <NumberButton buttonStyle= "num-button" text="9" />
        </div>
    )
}