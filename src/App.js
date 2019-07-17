import React from 'react';
import Navbar from './components/layout/Navbar';
import Mainmas from './components/layout/Mainmas';
import FullPage from './components/layout/FullPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FullPage style={{ paddingTop: '-180px' }} />
      </div>
    </div>
  );
}

export default App;
