import React from 'react';
import './Footer.css'

export default function Footer() {
    return(
        <div className="footer-container">
        <div className="footer-item">
        <ion-icon name="chatbubbles"></ion-icon>
        
        </div>
        <div className="footer-item">
        <ion-icon name="refresh"></ion-icon>
        <p>6</p>
        </div>
        <div className="footer-item">
        <ion-icon name="heart-empty"></ion-icon>
        <p>4</p>
        </div>
        <div className="footer-item">
        <ion-icon name="mail"></ion-icon>
        </div>
        </div>
    )
    
}