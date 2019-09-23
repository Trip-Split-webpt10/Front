import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import CreateATrip from './Components/CreateATrip/CreateTrip';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <CreateATrip/>
    </>
  );
}
export default App;
