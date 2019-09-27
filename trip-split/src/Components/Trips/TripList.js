import React from 'react';
import styled from 'styled-components';
import image from './images/placeholder12.png'
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

const TripCardStyles = styled.div`
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px 0px;
    text-align: center;
    line-height: 1.5rem;
    font-weight: bold;
    p{
        padding: 5px;
        cursor: pointer;
    }
    p:hover{
        background: lightpink;
        transition-duration: .8s;
        border-radius: 5px;
    }
 `;