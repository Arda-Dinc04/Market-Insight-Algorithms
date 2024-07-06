import React from 'react';
import './App.css';
import Clock from './Components/Clock';
import CardRow from './Components/CardRow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <CardRow />
      </header>
      
    </div>
    
  );
}

export default App;