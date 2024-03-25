import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {

  const isFavourited = (id=props.photo.id, favs=props.favourites) => {
    return favs.some(photo => photo.id === id)
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => props.dispatch({ type: 'UPDATE_FAVOURITES', payload: {photo: props.photo, favourites: props.favourites}})}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited() ? true : false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;