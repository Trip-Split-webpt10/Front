import React, {useEffect, useState}from 'react';
import styled from 'styled-components';

import axios from 'axios'
import Carousel from './Carousel';
import SuggestionCards from '../SugestionCards/SuggestionCards';

function Jumbotron() {
    const [randomImages, setRandomImages ] = useState([])
    useEffect(()=>{
        var API_KEY = '13685655-0e6f690b36aca03be604bf4d3';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('restaurants');
        axios.get(URL).then(res=>{
            setRandomImages(res.data.hits)

        }).catch(console.log);
        
    }, [])
    
    
    return (
        <JumbotronStyles>
            <Carousel randomImages = {randomImages} />
            <div className='suggestionContainer'>
                <h2>Inspiration For Your Next Trip</h2>
                <SuggestionCards />
            </div>
        </JumbotronStyles>
    )
}

export default Jumbotron
const JumbotronStyles = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 10 10px;
    min-height: 700px;
    padding: 1em 0em;

    .suggestionContainer{
        margin-top: 20px;
        text-align: center; 
        h2{
            font-size: 1.5em;
            line-height: 1.41176471;
            font-weight: bold;
        }
    }

`;