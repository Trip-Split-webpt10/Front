import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './indiv.css';
import AddUserForm from './IndivForms/newFriendForm';



function IndivTrip(trip) {
    const [Trip, setTrips] = useState([])
    const [Users, setUsers] = useState([]);
    const [Cost, setCost] = useState([]);
    useEffect(() => {
        const url = `https://trip-split-api.herokuapp.com/api/trips/${trip.match.params.id}`
        Axios.get(url)
            .then(response => {
                setTrips(response.data.trip)
                setUsers(response.data.users)
                setCost(response.data.expenses);
            })
            .catch(err => {
                console.log(err)
            })
    }, [setUsers])

    function calc(){
        const totalCost = Cost.map((x)=>{
            return x.price;
        })
        return totalCost.reduce((a,b) => a + b, 0 );
    }

    function costPerPerson(amountOfUsers){
        let total = calc() / amountOfUsers;
        if (!total){
            return "No Expenses Listed"
        }
        else{
            return total;
        }
    }
    return (
        <div className="IndivContainer">
            <div className="HeaderIndiv">
                Trip Destination: {`${Trip.destination}`}
            </div>
            <div className="FlexDiv">
                <div className="Form">
                    <AddUserForm trip={trip} Users={Users}></AddUserForm>
                </div>
                <div className="UserCost">
                    <div className="UserCostHeader">Total People: {Users.length}</div>
                    {Users.map((x)=>{
                        return <div className="UsersList" key={x.id}>{x.name}</div>
                    })}
                    <div className="tripStats">Total Cost: {calc()}</div>
                    <div className="tripStats">Cost Per Person: {costPerPerson(Users.length)}</div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default IndivTrip;
