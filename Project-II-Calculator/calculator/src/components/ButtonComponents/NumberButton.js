import React from 'react';
import './Button.css';

export default function NumberButton({getData, buttonStyle, text}) {
    return (
        <button onClick={() => getData(text)}  className={'number-button '+buttonStyle}>{text}</button>
    );
}