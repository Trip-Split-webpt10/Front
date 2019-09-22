
import React, {useState} from 'react';

import styled from 'styled-components';
import axios from 'axios'
import TripList from './TripList';

function Trips() {
    const [allTrips, setALlTrips] = useState([]);
    useState(()=>{
        const url = 'https://trip-split-api.herokuapp.com/api/trips'
        axios.get(url)
            .then(res=>{
                setALlTrips(res.data);
            })
            .catch(err=>console.log)
    }, [allTrips])
    return (
        <TripsStyles>
           <TripList 
            allTrips ={allTrips}
           />
        </TripsStyles>
    )
}

export default Trips


const TripsStyles = styled.div`
    position: relative;
    margin: 60px auto 0 auto;
    height: 100%;
    max-width: 1024px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;