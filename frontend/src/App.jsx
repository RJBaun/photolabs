import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {


  const [favourites, setFavourites] = useState([])

  const saveFavourites = (photo) => {
    if (!favourites.some(fav => fav.id === photo.id)) {
      setFavourites(prevPhotos => [...prevPhotos, photo])
    } else {
      setFavourites(prevPhotos => prevPhotos.filter(fav => fav.id !== photo.id))
    }
  }

  const [ modal, setModal ] = useState(false)
  const [ modalObj, setModalObj ] = useState(photos[0]);

  const toggleModal = (photoObj=photos[0]) => {
    setModal(prev => !prev)
    setModalObj(prev => photoObj)
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} favouriteExists={!!favourites.length} toggleModal={toggleModal} saveFavourites={saveFavourites}/>
      <PhotoDetailsModal visible={modal} toggleModal={toggleModal} photo={modalObj} saveFavourites={saveFavourites}/>
    </div>
  );
};

export default App;
