import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, imageSource, profile, username, location } = props.photo;
  const { city, country } = location;

  return (
    <article className="photo-list__item" id={id}>
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} />
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
