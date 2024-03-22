import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ modal, setModal ] = useState(false)

  const toggleModal = () => {
    setModal(prev => !prev)
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} toggleModal={toggleModal}/>
      <PhotoDetailsModal visible={modal} toggleModal={toggleModal}/>
    </div>
  );
};

export default App;
