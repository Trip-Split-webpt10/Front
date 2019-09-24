
import React, {useState} from 'react';

import styled from 'styled-components';
import axios from 'axios'
import TripList from './TripList';
import ExpensePage from '../Expenses/ExpensePage';

function Trips(props) {
    const [allTrips, setALlTrips] = useState([]);
    const [activeModal, setActiveModal ] = useState('hidden');

    const toggleModalClass = ()=>{
        let cssProperties = (activeModal === 'hidden') ? 'show' : 'hidden';
        setActiveModal(cssProperties)
    }
    useState(()=>{
        const url = 'https://trip-split-api.herokuapp.com/api/trips'
        axios.get(url)
            .then(res=>{
                setALlTrips(res.data);
            })
            .catch(err=>console.log)
    }, [allTrips, activeModal]);
    return (
        <>
        <TripsStyles>
           <TripList 
           props = {props}
            allTrips ={allTrips}
            toggleModalClass = {toggleModalClass}
           />
        </TripsStyles>
        <ExpensePage 
            activeModal ={activeModal}
            toggleModalClass = {toggleModalClass}
        />
        </>
    )
}

export default Trips


const TripsStyles = styled.div`
display: none;
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