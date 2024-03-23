import React, { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    saveFavourites,
    toggleModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} favouriteExists={!!state.favourites.length} toggleModal={toggleModal} favourites={state.favourites} saveFavourites={saveFavourites} iconFill={state.iconFill}/>
      <PhotoDetailsModal visible={state.modal} toggleModal={toggleModal} photo={state.modalObj} favourites={state.favourites} saveFavourites={saveFavourites} iconFill={state.iconFill}/>
    </div>
  );
};

export default App;
