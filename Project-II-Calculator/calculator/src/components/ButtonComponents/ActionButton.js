import React from 'react';
import './Button.css';
export default function ActionButton(props) {
    return (
        <button className={'large-button '+props.buttonStyle}>{props.text}</button>
    );
}