import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import Jumbotron from './Components/HomePage/Jumbotron/Jumbotron';
import Cards from './Components/HomePage/SugestionCards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Cards />
    </div>
  );
}

export default App;
