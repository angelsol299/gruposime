import React from 'react';
import Navbar from './components/layout/Navbar';
import Mains from './components/layout/Mains';
import FullPage from './components/layout/FullPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Mains />
      </div>
    </div>
  );
}

export default App;
