import React from 'react';
import Navbar from './components/layout/Navbar';
import Mainmas from './components/layout/Mainmas';
import Presupuesto from './components/layout/Presupuesto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainmas />
      <Presupuesto />
    </div>
  );
}

export default App;
