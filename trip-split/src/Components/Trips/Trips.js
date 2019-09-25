
import React, {useState, useEffect} from 'react';

import styled from 'styled-components';
import axios from 'axios'
import TripList from './TripList';
import ExpensePage from '../Expenses/ExpensePage';

function Trips(props) {
    const [allTrips, setALlTrips] = useState([]);
    //state for handling class toggle on clicks
    const [activeModal, setActiveModal ] = useState('hidden');
    const [singleTrip, setSingleTrip] = useState([]);
    const [tripId, setTripId ] = useState(null);

    const toggleModalClass = ()=>{
        console.log('hi')
        let cssProperties = (activeModal === 'hidden') ? 'show' : 'hidden';
        setActiveModal(cssProperties)
       
    }
    function getAllTrips (){
        const url = 'https://trip-split-api.herokuapp.com/api/trips'
        axios.get(url)
            .then(res=>{
                console.log(res)
                setALlTrips(res.data);
            })
            .catch(err=>console.log)
    }   
    useEffect(()=>{
        getAllTrips() 
    }, [tripId]);
    
    function getSingleTrip(id){
        const url = `https://trip-split-api.herokuapp.com/api/trips/${id}/expenses`
        axios.get(url)
            .then(res=>{
                setSingleTrip(res.data);
            })
            .catch(err=>console.log)
    }
    return (
        <>
      
        <TripsStyles>
           <TripList 
           props = {props}
            allTrips ={allTrips}
            toggleModalClass = {toggleModalClass}
            setTripId = { setTripId }
            getSingleTrip ={ getSingleTrip }
           />
        </TripsStyles>
        <ExpensePage 
            activeModal ={ activeModal }
            toggleModalClass = { toggleModalClass }
            singleTrip ={ singleTrip }
        />
        </>
    )
}

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
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
`;