import React from 'react';
import Navbar from './components/layout/Navbar';
import Mains from './components/layout/Mains';
import Presupuesto from './components/layout/Presupuesto';

import FullPage from './components/layout/FullPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FullPage />
    </div>
  );
}

export default App;
