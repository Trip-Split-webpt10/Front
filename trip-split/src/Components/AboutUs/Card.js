import React from 'react';
import styled from 'styled-components';

const CardStyling = styled.div`
    width: 30%;
    height: 300px;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    margin: 2% 0% 2% 0%;
    border: solid #808080 2px;
    background-color: #FAFAFA;
    border-radius: 10px;
    font-family: 'Quicksand', sans-serif;
`;

const CardH1 = styled.h1`
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 2%;
`;

const CardImg = styled.img`
    margin-top: 5%;
    height: auto;
    width: 30%;
`;
const CardInfo = styled.div`
    font-size: 1rem;
    line-height: 25px;
    margin-bottom: 10%;
`;

const InfoDiv = styled.div`
    text-align: left;
    width: 65%;
    height: auto;
`;

const CardHR = styled.hr`
 background-color: white;
 color: white;
`
const InfoSpan = styled.span`
 font-weight: bold;
`
function AboutUsCard(props) {
  return (
    <CardStyling>
        <CardImg src={props.img}/>
        <InfoDiv>
        <CardH1>
            <p>{props.name}</p>
        </CardH1>
        <CardHR/>
        <CardInfo>
        <p><InfoSpan>Team Position:</InfoSpan> {props.position} </p>
        <p><InfoSpan>Fun Fact:</InfoSpan> {props.fact}</p>
        </CardInfo>
        </InfoDiv>
    </CardStyling>
  );
}

export default AboutUsCard;