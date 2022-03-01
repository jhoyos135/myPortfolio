import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
animation: 1s ${fadeInAnimation};
`


export const FadeIn = ({ children, styles }) => {
    return (
        <FadeInDiv > {children} </FadeInDiv>
    )
}

