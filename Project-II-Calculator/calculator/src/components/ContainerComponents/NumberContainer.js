import React from 'react';
import './Containers.css';
import GeneralButton from '../ButtonComponents/GeneralButton';
import ActionButton from '../ButtonComponents/ActionButton';
export default function OperationsContainer({onClickFunction}) {
    return (
        <div className="numbers-container">
            <ActionButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={0} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={1} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={2} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={3} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={4} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={5} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={6} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={7} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={8} />
            <GeneralButton onClickFunction={onClickFunction} buttonStyle= "num-button" text={9} />
        </div>
    )
}