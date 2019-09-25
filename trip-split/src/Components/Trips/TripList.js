import React from 'react'
import TripCard from './TripCard';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
      color: grey;
    }
    color: black;
`;

function TripList({ props, allTrips }) {
    return (
        <>
            {allTrips.map(trip => {
                return <StyledLink to={`/trips/${trip.id}`}>
                    <TripCard
                        {...props}
                        key={trip.destination}
                        trip={trip}
                    />
                </StyledLink>
            })}
        </>
    )
}

export default TripList
