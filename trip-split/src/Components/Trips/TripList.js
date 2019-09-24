import React from 'react'
import TripCard from './TripCard';

function TripList({props, allTrips}) {
    return (
        <>
            {allTrips.map(trip=>{
              return <TripCard 
                    {...props}
                    key={trip.destination}
                    trip = {trip}
                    
                 />
            })}
        </>
    )
}

export default TripList
