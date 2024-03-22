import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, urls, user, location } = props.photo;
  const { city, country } = location;
  const { full, regular } = urls;
  const {username, name, profile} = user;
  return (
    <article className="photo-list__item" id={id}>
      <PhotoFavButton photo={props.photo} saveFavourites={props.saveFavourites}/>
      <img className="photo-list__image" src={regular} onClick={props.toggleModal}/>
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
