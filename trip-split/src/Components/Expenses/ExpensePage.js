import React, {useEffect} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function ExpensePage(props) {
    return (
        <ExpensePageStyles className ={`${props.activeModal}`} >=
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

    &.show{
        display: block;
    }
    &.hidden{
        display : none;
    }

`;