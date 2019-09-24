import React from 'react';
import styled from 'styled-components';

function ExpensePage(props) {
    console.log(props.activeModal)
    return (
        <ExpensePageStyles className ={`${props.activeModal}`} >
            <h1 onClick={props.toggleModalClass}>Close</h1>
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
    }
    &.show{
        display: block;
    }
    &.hidden{
        display : none;
    }

`;