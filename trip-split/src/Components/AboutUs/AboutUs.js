import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CardBox from './CardBox';

const AboutUsCard = styled.div`
width: 100%;
height: 1000px;
`

function AboutUs() {
  return (
    <AboutUsCard>
        <Header/>
        <CardBox/>
    </AboutUsCard>
  );
}

export default AboutUs;
