import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  console.log(props.photo.similar_photos)

    const { id, urls, user, location } = props.photo;
    const { city, country } = location;
    const { full, regular } = urls;
    const {username, name, profile} = user;

    const photoObj = {...props.photo};

    const similarPhotos = [];
    for (const photo in props.photo.similar_photos) {
      similarPhotos.push(props.photo.similar_photos[photo])
    }
    console.log(similarPhotos)

    const handleClose = () => {
      props.toggleModal(photoObj)
    }


  return (
    <div className="photo-details-modal" style={{display: props.visible ? 'block' : 'none'}}>
      <div>
        <button className="photo-details-modal__close-button" onClick={handleClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton photo={props.photo} saveFavourites={props.saveFavourites} />
      <img className="photo-details-modal__image" src={regular} />
      <section className="photo-details-modal__header photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={profile} />
        <div className="photo-details-modal__photographer-info">
          <p>{username}</p>
          <p className="photo-details-modal__photographer-location">{city} {country}</p>
        </div>
      </section>
      <section className="photo-details-modal__images" >
        <span>Similar Photos</span>
        <PhotoList  photos={similarPhotos} />
      </section>
    </div>
  )
};

export default PhotoDetailsModal;
