import React from 'react';
import './Containers.css';
import GeneralButton from '../ButtonComponents/GeneralButton';

export default function OperationsContainer({onClickFunction}) {
    return (
        <div className="operations-container">
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "operation-button" text="÷" />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "operation-button" text="x" />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "operation-button" text="-" />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "operation-button" text="+" />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "operation-button" text="=" />
        </div>
    )
}