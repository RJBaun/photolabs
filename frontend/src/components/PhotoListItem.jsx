import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, imageSource, profile, username, location } = props.photo;
  const { city, country } = location;

  return (
    <article id={id}>
      <img src={imageSource} alt="Photo" />
      <img src={profile} alt="Profile" />
      <p>{username}</p>
      <p>{city} {country}</p>
    </article>
  )
};

export default PhotoListItem;
