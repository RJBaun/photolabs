import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ visible, setVisible ] = useState(true)

  const toggleVisible = () => {
    setVisible(prev => !prev)

  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} toggleVisible={toggleVisible}/>
      <PhotoDetailsModal visible={visible} toggleVisible={toggleVisible}/>
    </div>
  );
};

export default App;
