import React,  {useState} from 'react';
import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik'
import Axios from 'axios';
import login from './login';
import register  from './register'

 

function Login({history}) {
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: ''
    })

    const [isLogin, setIsLogin ] = useState(true);
    
    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }   

    const handleSubmit = (e)=>{
        e.preventDefault()
        isLogin ? login({user, history}) : register(user);
    }
    
    return (

        <LongInStyles>
            <div className='login'>
                <ul>
                    <li onClick={()=>{
                        setIsLogin(true)
                        }}>
                        Login
                    </li>
                    <li onClick={()=>{
                        setIsLogin(false)
                        }}>
                        Sing Up
                    </li>
                </ul>
                { isLogin 
                    ? 

                    <form onSubmit={handleSubmit}>
                        <div className='fieldDiv' >
                            <input
                                type='email'
                                placeholder='Email' 
                                name='username' 
                                value = {user.username} 
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div>
                            <input 
                                type='password'
                                placeholder='Password' 
                                name='password' 
                                value = {user.password} 
                                onChange={handleChange}
                                required 
                                />
                        </div>
                        {/* <input type='submit' value='Login' name='signup'/> */}
                        <button>Login</button>
                    </form> 
                    :

                    <form onSubmit={handleSubmit} >
                        <div className='fieldDiv'>
                            <input 
                                type='text'
                                placeholder='Name' 
                                name='name' 
                                value ={user.name} 
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className='fieldDiv' >
                            <input 
                                type='email' 
                                placeholder='Email' 
                                name='username' 
                                value = {user.username} 
                                onChange={handleChange}
                                required/>
                        </div>
                        <div>
                            <input 
                                type='password' 
                                placeholder='Password' 
                                name='password' 
                                value = {user.password} 
                                onChange={handleChange}
                                required
                                />
                        </div>
                        {/* <input type='submit' value='Signup' name='Submit' /> */}
                        <button>Signup</button>
                    </form>
                }
            </div>
        </LongInStyles>
    )
}
//styles
const LongInStyles = styled.div`
    margin-top: 50px;
    width: 40%;
    margin: 50px auto 0 auto;
    padding: 10px;
    ul{
        display: flex;
        width: 100%;
        padding: 15px;

    }
    li{
        margin-right: 35px;
        font-size: 2rem;
        font-weight: bolder;
        padding: 5px;
    } 
    li:hover{
        text-underline-position: below;
        border-bottom: 3px solid lightgrey
    }
    .login{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
    form{
        width: 100%;
        /* margin: 25% auto ; */
    }
    input{
        width: 80%;
        height: 25px;
        padding: 5px;
        margin: 10px 0px;
    }
    input[type='submit']{
        height: 25px;
    }
`;



export default Login;