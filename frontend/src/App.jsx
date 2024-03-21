import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';

//const photos = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
