import React from 'react';
import './Header.css';

export default function HeaderTitle() {
    return (
        <div className='header-title-container' >
            <h2>Lambda School</h2>
            <p className="header-author">@LambdaSchool</p>
            <p className="header-date">26 Jan</p>
        </div >
    );
}