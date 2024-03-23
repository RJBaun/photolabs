import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteExists={props.favouriteExists} />
      <PhotoList photos={props.photos} favourites={props.favourites} saveFavourites={props.saveFavourites} toggleModal={props.toggleModal}/>
    </div>
  );
};

export default HomeRoute;
