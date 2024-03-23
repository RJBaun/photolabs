import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favourites={props.favourites} iconFill={props.iconFill} dispatch={props.dispatch}/>
      ))}
    </ul>
  );
};

export default PhotoList;
