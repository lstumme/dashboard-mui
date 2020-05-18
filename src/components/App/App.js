import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../Menu/Menu';

import Menu from '../Menu/Menu';
import MainDisplay from '../MainDisplay/MainDisplay';

function App() {
  return (
    <div className="App">
      <Menu />
      <MainDisplay />
    </div>
  );
}

export default App;
