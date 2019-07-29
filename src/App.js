import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Mains from './components/layout/Mains';

import FullPage from './components/layout/FullPage';

function App() {
  return (
    <Fragment className="App">
      <Navbar />
      <FullPage />
    </Fragment>
  );
}

export default App;
