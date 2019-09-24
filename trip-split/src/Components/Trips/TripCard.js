 import React from 'react';
 import styled from 'styled-components';
 import image from './images/placeholder12.png'


 
 function  TripCard(props) {

     return (
         <TripCardStyles onClick={props.handleClick} onClick={ ()=>{props.getSingleTrip(props.trip.id)}}>
             <img src ={image} atl ={props.trip.destination} />
             <h2>{props.trip.destination}</h2>
             <h4>{props.trip.start_date}</h4>
         </TripCardStyles>
     )
 }
 
 export default TripCard
 

 const TripCardStyles = styled.div`
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px 0px;
    text-align: center;
    line-height: 1.5rem;
    font-weight: bold;
 `;