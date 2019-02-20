import React from 'react';
import './Button.css';
export default function ActionButton({onClickFunction, buttonStyle, text}) {
    return (
        <button onClick={() => onClickFunction(text)} className={'large-button '+buttonStyle}>{text}</button>
    );
}