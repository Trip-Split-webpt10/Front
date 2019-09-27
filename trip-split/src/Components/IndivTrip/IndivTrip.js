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
    },[Users])

    function calc() {
        const totalCost = Cost.map((x) => {
            return x.price;
        })
        return totalCost.reduce((a, b) => a + b, 0);
    }

    function costPerPerson(amountOfUsers) {
        let total = calc() / amountOfUsers;
        if (!total) {
            return "No Expenses Listed"
        }
        else {
            return "$"+ Math.floor(total);
        }
    }

    const addToSavedList = newUser => {
        setUsers([...Users, newUser]);
      };

    return (
        <div className="IndivContainer">
            <div className="HeaderIndiv">
                Trip Destination: {`${Trip.destination}`}
            </div>
            <div className="FlexDiv">
                <div className="Form">
                    <AddUserForm trip={trip} Users={Users} addToSavedList={addToSavedList}></AddUserForm>
                </div>
                <hr></hr>
                <div className="UserCost">
                    <div className="UserFlex">
                        <div className="UserCostHeader">Total People: {Users.length}</div>
                        {Users.map((x, index) => {
                            return <div className="UsersList" key={index}>{x.name}</div>
                        })}
                    </div>
                    <div className="UserFlex2">
                        <div className="calc"><span>Total Cost:</span>${calc()}</div>
                        <div className="calc"><span>Cost Per Person:</span> {costPerPerson(Users.length)}</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default IndivTrip;