import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteExists={props.favouriteExists} dispatch={props.dispatch}/>
      <PhotoList photos={props.photos} favourites={props.favourites} dispatch={props.dispatch}/>
    </div>
  );
};

export default HomeRoute;
