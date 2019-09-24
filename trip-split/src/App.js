import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
// import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import CreateATrip from './Components/CreateATrip/CreateTrip';
import Trips from './Components/Trips/Trips';

function App() {
  return (
    <>
      <Header />
      <Route 
        path = '/'
        exact
        render= {props =>{

          return <CreateATrip />
        }}
      />
      <Route 
        path = '/trips'
        exact
        render= {props =>{

          return (
            <Trips 
              {...props}
            />)
        }}
      />
    </>
  );
}
export default App;
