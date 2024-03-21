import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {

  const [active, setActive] = useState(false)
  
  const handleClick = () => {
    setActive(prevActive => !prevActive);
    props.saveFavourites(props.photo);
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={active}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;