import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

    const { id, urls, user, location } = props.photo;
    const { city, country } = location;
    const { full, regular } = urls;
    const {username, name, profile} = user;

    const photoObj = {...props.photo};

    const similarPhotos = Object.values(props.photo.similar_photos)

    const handleClose = () => {
      props.toggleModal(photoObj)
    }

    const handleClick = () => {
      setActive(prevActive => !prevActive);
      props.saveFavourites(props.photo);
    };

  return (
    <div className="photo-details-modal" style={{display: props.visible ? 'block' : 'none'}}>
      <div>
        <button className="photo-details-modal__close-button" onClick={handleClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton photo={props.photo} favourites={props.favourites} saveFavourites={props.saveFavourites} onClick={handleClick}/>
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
        <PhotoList  photos={similarPhotos} favourites={props.favourites} saveFavourites={props.saveFavourites} iconFill={props.iconFill} toggleModal={props.toggleModal}/>
      </section>
    </div>
  )
};

export default PhotoDetailsModal;
