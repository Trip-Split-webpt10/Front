import React from 'react';
import {Link} from 'react-router-dom'
import logo from './../../images/logo.jpg'
import styled from 'styled-components';

function Header() {
    return (
        <HeaderStyles>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt='logo'/>
                </Link>
                </div>
            <div className='links'>
                <ul>
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/recentTrips'>Recent Trips</Link></li>
                    <li><Link to ='/createtrip'>Create Trip</Link></li>
                    <li><Link to ='/login'>Login</Link></li>
                </ul>
            </div>
        </HeaderStyles>
    )
}

export default Header

const HeaderStyles = styled.div`
    width : 100%;
    margin: 0; 
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    .links{
        margin-right: 25px;
    }
    ul{
        list-style-type: none;
        display: flex;
       
    }
    li{
        margin: 5px 15px;
        padding: 7px 20px;
        border-radius: 15px;
    }
    li:hover{
        background: lightgrey;
        transition-duration: 0.8s;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 1.02rem;
        font-weight: bolder;
        font-family: Roboto monospace;    }

    img{
        width: 25%;
        left: 0
    }
    .logo{

    }
`;
