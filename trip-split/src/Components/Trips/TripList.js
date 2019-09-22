import React from 'react'
import TripCard from './TripCard';

function TripList({allTrips}) {
    return (
        <>
            {allTrips.map(trip=>{
              return <TripCard 
                    key={trip.destination}
                    trip = {trip}
                 />
            })}
        </>
    )
}

export default TripList
