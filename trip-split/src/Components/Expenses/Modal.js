import React, { useEffect } from 'react';
import styled from 'styled-components';
import modalHeader from'./../Trips/images/modalHeader.jpeg';

function Modal() {
    useEffect(() => {
    }, [])
    return (
        <ModalStyles>
            <img src={modalHeader} alt='Modal header'/>
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
    img{
        width: 85%;
        margin-top: 20px;
        margin-left: 30px;
    }
`;