import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import CreateATrip from './Components/CreateATrip/CreateTrip';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

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
