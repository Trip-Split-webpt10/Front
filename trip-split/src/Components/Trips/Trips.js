
import React, {useState} from 'react';

import styled from 'styled-components';
import axios from 'axios'
import TripList from './TripList';

function Trips(props) {
    const [allTrips, setALlTrips] = useState([]);
    useState(()=>{
        const url = 'https://trip-split-api.herokuapp.com/api/trips'
        axios.get(url)
            .then(res=>{
                setALlTrips(res.data);
            })
            .catch(err=>console.log)
    }, [allTrips]);
    return (
        <TripsStyles>
           <TripList 
           props = {props}
            allTrips ={allTrips}
           />
        </TripsStyles>
    )
}

// Onboarding process for a new user to create a profile.
// - Ability to create a trip, including number of people on the trip, names of people on the trip, destination, and dates. Ability to edit or delete this information.
// - Ability to create a trip expense item title, price, who paid for it, number of people that paid for it, and names of people that paid for it.
// - Ability to ‘close’ trip and total it out. Ability to view a trip summary page that gives a final total that each person owes or is owed (look at the total trip expenses, divide by the total number of people, and balance that with the total amount each person already paid).
// - Homepage to see list of current or past trips.
export default Trips


const TripsStyles = styled.div`
    position: relative;
    margin: 60px auto 0 auto;
    height: 100%;
    max-width: 1024px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    justify-content: space-evenly;
    align-content: center; 
    align-items: center;
`;