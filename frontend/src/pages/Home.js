import React from 'react';
import Clock from '../Components/Clock';
import CardRow from '../Components/CardRow';


function Home() {
  return (
    <div className="centered-container">
      <Clock />
      <CardRow />
    </div>
  );
}

export default Home;
