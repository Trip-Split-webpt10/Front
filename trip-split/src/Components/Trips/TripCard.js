 import React from 'react';
 import styled from 'styled-components';

 
 function TripCard({trip}) {
     return (
         <TripCardStyles>
             <h2>{trip.destination}</h2>
             <h4>{trip.start_date}</h4>
         </TripCardStyles>
     )
 }
 
 export default TripCard
 

 const TripCardStyles = styled.div`
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px 0px;
 `;