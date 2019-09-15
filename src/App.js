import React, {useState} from 'react';
import './App.css';
import {Dashboard} from './components/Dashboard';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Perpetual Demotion</h2>
      </header>
      <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
