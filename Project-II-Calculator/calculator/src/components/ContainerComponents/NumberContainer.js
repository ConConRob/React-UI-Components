import React from 'react';
import './Containers.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
export default function OperationsContainer({collectNumber}) {
    return (
        <div className="numbers-container">
            <ActionButton getData={collectNumber} buttonStyle= "num-button" text={0} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={1} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={2} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={3} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={4} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={5} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={6} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={7} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={8} />
            <NumberButton getData={collectNumber} buttonStyle= "num-button" text={9} />
        </div>
    )
}