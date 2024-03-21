import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';

//const photos = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
