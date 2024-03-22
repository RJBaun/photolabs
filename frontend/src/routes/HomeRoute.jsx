import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favourites, setFavourites] = useState([])

  const saveFavourites = (photo) => {
    if (!favourites.some(fav => fav.id === photo.id)) {
      setFavourites(prevPhotos => [...prevPhotos, photo])
    } else {
      setFavourites(prevPhotos => prevPhotos.filter(fav => fav.id !== photo.id))
    }
  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteExists={!!favourites.length}/>
      <PhotoList photos={props.photos} saveFavourites={saveFavourites} toggleVisible={props.toggleVisible}/>
    </div>
  );
};

export default HomeRoute;
