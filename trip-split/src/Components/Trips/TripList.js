import React from 'react';
import styled from 'styled-components';
import image from './images/placeholder12.png'



function TripList(props ) {
    function handleClick(e){
        e.preventDefault();
        props.toggleModalClass();

    }   
    return (
        <>
            {props.allTrips.map(trip=>{
                return (
                    <TripCardStyles onClick={ (e) =>{
                        props.getSingleTrip(trip.id);
                        }} 
                        key={ trip.id } 
                    >
                        <img src ={ image } atl = { trip.destination } />
                        <h2> { trip.destination } </h2>
                        <h4> { trip.start_date } </h4>
                        <p
                            onClick={ e =>{
                                handleClick(e);
                            }}
                        >
                           <span className="fa fa-plus plus"></span>Add an expense
                        </p>
                    </TripCardStyles>
                )

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
    .plus{
        border: 2px solid #000000;
        border-radius:  50%;
        margin-right: 10px;
        padding: 5px;
    }
 `;