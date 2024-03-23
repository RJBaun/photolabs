import React, { useReducer } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, urls, user, location } = props.photo;
  const { city, country } = location;
  const { full, regular } = urls;
  const {username, name, profile} = user;
  const photoObj = {...props.photo};

  return (
    <article className="photo-list__item" id={id}>
      <PhotoFavButton photo={props.photo} favourites={props.favourites} iconFill={props.iconFill} dispatch={props.dispatch}/>
      <img className="photo-list__image" src={regular} onClick={() => props.dispatch({ type: 'TOGGLE_MODAL', payload: {photoObj: photoObj}})}/>
      <footer className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{city} {country}</p>
        </div>
      </footer>
    </article>
  )
};

export default PhotoListItem;
