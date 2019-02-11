import React from 'react';
import './Button.css';

export default function NumberButton(props) {
    console.log(props);
    return (
        <button className={'number-button '+props.buttonStyle}>{props.text}</button>
    );
}