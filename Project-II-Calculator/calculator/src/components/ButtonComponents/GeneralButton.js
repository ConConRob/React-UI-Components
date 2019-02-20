import React from 'react';
import './Button.css';

export default function generalButton({onClickFunction, buttonStyle, text}) {
    return (
        <button onClick={() => onClickFunction(text)}  className={'general-button '+buttonStyle}>{text}</button>
    );
}