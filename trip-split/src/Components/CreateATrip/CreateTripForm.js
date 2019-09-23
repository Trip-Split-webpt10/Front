import React from 'react';
import './CreateTrip.css';


function CreateATrip() {
    function hideBackground(){
        let backgroundgif = document.getElementById('backgroundhide')
        backgroundgif.style.display = 'none';
    };
    return (
        <div id="backgroundhide" className="backgroundgif">
        <button onClick={hideBackground}>Split A Trip</button>
        </div>
    );
}

export default CreateATrip;