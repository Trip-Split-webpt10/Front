import React from 'react';
import './CreateTrip.css';
import CreateATripForm from './CreateTripForm';


function CreateATrip() {
    function hideBackground() {
        let backgroundgif = document.getElementById('BackgroundHide')
        backgroundgif.style.display = 'none';
        let tripform = document.getElementById('TripForm');
        tripform.style.display = 'block';
    };
    return (
        <>
            <div id="BackgroundHide" className="backgroundgif">
                <button onClick={hideBackground}>Split A Trip</button>
            </div>
            <div id="TripForm">
                <CreateATripForm />
            </div>
        </>
    );
}

export default CreateATrip;
