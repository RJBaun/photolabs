import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

//const photos = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoList>
      {/*{photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}*/}
      </PhotoList>
    </div>
  );
};

export default App;
