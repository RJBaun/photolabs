import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  return (
    <div className="photo-details-modal" style={{display: props.visible ? 'block' : 'none'}}>
      <button className="photo-details-modal__close-button" onClick={props.toggleVisible}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
