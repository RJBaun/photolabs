import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const FavPhotosModal = (props) => {

    const { id, urls, user, location } = props.photo;
    const { city, country } = location;
    const { full, regular } = urls;
    const {username, name, profile} = user;

    const photoObj = {...props.photo};

    const similarPhotos = Object.values(props.photo.similar_photos)

  return (
    <div className="photo-details-modal" style={{display: props.visible ? 'block' : 'none'}}>
      <div>
        <button className="photo-details-modal__close-button" onClick={() => props.dispatch({ type: 'TOGGLE_MODAL', payload: {photoObj: photoObj}})}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton photo={props.photo} favourites={props.favourites} dispatch={props.dispatch}/>
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
        <PhotoList photos={similarPhotos} favourites={props.favourites} iconFill={props.iconFill} dispatch={props.dispatch}/>
      </section>
    </div>
  )
};

export default FavPhotosModal;
