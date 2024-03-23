import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favourites={props.favourites} saveFavourites={props.saveFavourites} iconFill={props.iconFill} toggleModal={props.toggleModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
