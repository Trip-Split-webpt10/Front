import React from 'react';
import styled from 'styled-components';
import AboutUsCard from './Card';
import persondata from './persondata';

const Box = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    border: solid white 3px;
    border-radius: 10px;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: white;
    margin-bottom: 25%;
`;

function CardBox() {
  return (
    <Box>
      {persondata.map((person,index)=>{
        return <AboutUsCard key={index} name={person.name} position={person.position} fact={person.fact} img={person.picture}/>
      })}
    </Box>
  );
}

export default CardBox;