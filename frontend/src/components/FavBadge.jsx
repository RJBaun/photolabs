import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';



const FavBadge = (props) => {
  return (
    <div className='fav-badge'>
      <FavIcon viewFavs={props.viewFavs} displayAlert={props.favouriteExists} selected={props.favouriteExists} dispatch={props.dispatch}/>
    </div>
  ) 
};

export default FavBadge;