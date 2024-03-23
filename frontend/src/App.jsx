import React, { useReducer } from 'react';
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
    dispatch
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} favouriteExists={!!state.favourites.length} favourites={state.favourites} iconFill={state.iconFill} dispatch={dispatch}/>
      <PhotoDetailsModal visible={state.modal}  photo={state.modalObj} favourites={state.favourites} iconFill={state.iconFill} dispatch={dispatch}/>
    </div>
  );
};

export default App;
