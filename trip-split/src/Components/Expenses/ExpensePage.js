import React, {useEffect} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function ExpensePage(props) {
    console.log(props)
    return (
        <ExpensePageStyles className ={`${props.activeModal}`} >
            <h1 onClick={props.toggleModalClass}>Close</h1>
            <Modal 
            tripId = { props.tripId }
            history = { props.history }
            toggleModalClass = { props.toggleModalClass }
            />
        </ExpensePageStyles>
    )
}

export default ExpensePage

const ExpensePageStyles = styled.div`
    top: 0px;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    h1{
        float: right;
        cursor: pointer;
        color: #000000;
        font-weight: bolder;
        font-size: 1.5rem;
        margin-right: 15px;
        }
    &.show{
        display: block;
    }
    &.hidden{
        display : none;
    }

`;