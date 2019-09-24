import React from 'react'
import TripCard from './TripCard';

function TripList(props ) {
    function handleClick(e){
        e.preventDefault();
        props.toggleModalClass();
    }   
    return (
        <>
            {props.allTrips.map(trip=>{
              return <TripCard 
                    {...props}
                    key={trip.destination}
                    trip = {trip}
                    handleClick = {handleClick}
                 />
            })}
        </>
    )
}

export default TripList
