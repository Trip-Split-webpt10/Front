import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './indiv.css';
import AddUserForm from './IndivForms/newFriendForm';
import styled from 'styled-components';



function IndivTrip(trip) {
    const [Trip, setTrips] = useState([]);
    const [Users, setUsers] = useState([]);
    const [Cost, setCost] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const url = `https://trip-split-api.herokuapp.com/api/trips/${trip.match.params.id}`
        const urlAllUsers = `https://trip-split-api.herokuapp.com/api/users/`;
        Axios.get(url)
            .then(response => {
                setTrips(response.data.trip);
                setUsers(response.data.users);
                setCost(response.data.expenses);
            })
            .then(() => {
                Axios.get(urlAllUsers)
                .then(response => {
                    setAllUsers(response.data)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
            return "$" + Math.floor(total);
        }
    }

    const addToSavedList = newUser => {
        const foundUser = allUsers.find((user)=>{return user.username === newUser})
        setUsers([...Users, foundUser]);
    };

    const IndivContainer = styled.div`
        width: 75%;
        margin: 0 auto;
        margin-top: 6%;
        border: 1px solid black;
        border-radius: 10px;
        padding: 3%;
        margin-bottom: 2%;
    `;

    const HeaderIndiv = styled.div`
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        background-color: #d3d3d3;
        padding: 2%;
        border-radius: 10px;
    `;

    const FlexDiv = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
    `;

    const UserCost = styled.div`
        display: flex;
        flex-flow: row nowrap;
        width: 50%;
        text-align: center;
        align-items: center;
        justify-content: center;
    `;

    const UserFlex = styled.div`
        display: flex;
        flex-flow: column nowrap;
        width: 50%;
    `;
    const UserFlex2 = styled.div`
        display: flex;
        flex-flow: column nowrap;
        width: 50%;
    `;

    const MT50 = styled.div`
        margin-top: 5%;
    `;

    const Width75 = styled.div`
        width: 75%;
    `;
    return (
        <IndivContainer>
            <HeaderIndiv>
                Trip Destination: {`${Trip.destination}`}
            </HeaderIndiv>
            <FlexDiv>
                <Width75>
                    <AddUserForm trip={trip} allUsers={allUsers} addToSavedList={addToSavedList}></AddUserForm>
                </Width75>
                <hr></hr>
                <UserCost>
                    <UserFlex>
                        <MT50>Total People: {Users.length}</MT50>
                        {Users.map((x, index) => {
                            return <MT50 key={index}>{x.name}</MT50>
                        })}
                    </UserFlex>
                    <UserFlex2>
                        <MT50><span>Total Cost:</span>${calc()}</MT50>
                        <MT50><span>Cost Per Person:</span> {costPerPerson(Users.length)}</MT50>
                    </UserFlex2>
                </UserCost>
            </FlexDiv>
        </IndivContainer>
    );
}

export default IndivTrip;