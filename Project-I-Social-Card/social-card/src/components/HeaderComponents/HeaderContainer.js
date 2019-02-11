import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import CardContainer from "../CardComponents/CardContainer.js";
export default function HeaderContainer() {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div>
        <HeaderTitle />
        <HeaderContent />
        <CardContainer />
      </div>
      
    </div>
  );
}