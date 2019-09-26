import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import modalHeader from'./../Trips/images/modalHeader.jpeg';

function Modal() {
    const [expense, setExpense] = useState({
        name: '',
        price:'',
        id: null
    })
    useEffect(() => {
    }, []);

 function handleChange(e){
     setExpense({
         ...expense, 
         [e.target.name]: e.target.value
        })
 }
 function handleSubmit(e){
     e.preventDefault();
     console.log(expense)
 }
    return (
        <ModalStyles>
           
            <form onSubmit={handleSubmit}> 
                <h2>Add an expense to your Trip</h2>
                <input type='text' placeholder='Expense Name' name='name' value = { expense.name }  onChange={ handleChange }/>
                <input type='text'  placeholder='Expense Price' name='price'  value = { expense.price } onChange={ handleChange } />
                <input type='submit' placeholder ='Submit' />

            </form>
        </ModalStyles>
    )
}

export default Modal;

const ModalStyles = styled.div`
    height: 700px;
    width: 400px;
    margin: 50px auto 0 auto;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color:#ffffff;
    text-align: center;
    img{
        width: 85%;
        margin-top: 20px;
        margin-left: 30px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 25% 10px
    }
    input{
        width: 65%;
        margin: 10px auto 10px auto;
        height: 50px;
        padding: 10px;
        font-size: 1.3rem
    }
    input[type='submit']{
        background: pink;
        color: #fff;
        border: none;
        border-radius: 5px;
        position: relative;
        height: 62px;
        font-size: 1.6em;
        /* padding: 0 2em; */
        cursor: pointer;
        transition: 800ms ease all;
        outline: none;
        font-family: 'Nunito', sans-serif;
    }
`;