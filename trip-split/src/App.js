import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import CreateATrip from './Components/CreateATrip/CreateTrip';
import Trips from './Components/Trips/Trips'
import AboutUs from './Components/AboutUs/AboutUs'
import Jumbotron from './Components/HomePage/Jumbotron/Jumbotron'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import IndivTrip from './Components/IndivTrip/IndivTrip';

function App() {
  return (
    <>
      <Header />
      <Route 
        path = '/'
        exact
        render= {props =>{
          return <Jumbotron />
        }}
      />
      <Route 
        path = '/createtrip'
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
      <Route 
        path = '/aboutus'
        exact
        render= {props =>{

          return (
            <AboutUs
              {...props}
            />)
        }}
      />
      <Route 
        path = '/login'
        exact
        render= {props =>{

          return (
            <Login
              {...props}
            />)
        }}
      />
      <Route 
        path = '/trips/:id'
        exact
        render= {props =>{

          return (
            <IndivTrip
                path = '/trips/:id'
                exact
              {...props}
            />)
        }}
      />
    </>
  );
}
export default App;
