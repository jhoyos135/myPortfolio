import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as animation from 'react-animations';

const DivTag = styled.div`
height: '100%';
animation: fadeInFromNone 0.3s ease-out 0s;
@keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    90% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
};

`


export const Animation = ({ children, duration, delay, type }) => {
    const AnimationKeyFrame = keyframes`${animation[type]}`;
    const AnimationDiv = styled.div`
                animation: ${duration} ${AnimationKeyFrame} ${delay};
                animation-fill-mode: forwards;
                `;
    return (
        <DivTag>
            <AnimationDiv>
                {children}
            </AnimationDiv>
        </DivTag>
    )
}

Animation.defaultProps = {
    type: 'fade',
    duration: '0.3s',
    delay: '0.1s',
}

