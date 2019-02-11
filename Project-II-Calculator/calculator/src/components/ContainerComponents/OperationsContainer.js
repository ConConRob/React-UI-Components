import React from 'react';
import './Containers.css';
import NumberButton from '../ButtonComponents/NumberButton';

export default function OperationsContainer({collectOperator}) {
    console.log(collectOperator);
    return (
        <div className="operations-container">
            <NumberButton getData={collectOperator} buttonStyle= "operation-button" text="÷" />
            <NumberButton getData={collectOperator} buttonStyle= "operation-button" text="x" />
            <NumberButton getData={collectOperator} buttonStyle= "operation-button" text="-" />
            <NumberButton getData={collectOperator} buttonStyle= "operation-button" text="+" />
            <NumberButton getData={collectOperator} buttonStyle= "operation-button" text="=" />
        </div>
    )
}