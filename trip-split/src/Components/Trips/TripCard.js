 import React from 'react'
 
 function TripCard({trip}) {
     return (
         <div>
             <h2>{trip.destination}</h2>
             <h4>{trip.start_date}</h4>
         </div>
     )
 }
 
 export default TripCard
 