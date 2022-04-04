import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as animation from 'react-animations';

const DivTag = styled.div`
position: relative;
height: 100%;
width: 100%;
animation: fadeInFromNone 0.3s ease-out 0s;
overflow: hidden;
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


export const Animation = ({ children, duration, delay, type, style }) => {
    const AnimationKeyFrame = keyframes`${animation[type]}`;
    const AnimationDiv = styled.div`
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                animation: ${duration} ${AnimationKeyFrame} ${delay};
                animation-fill-mode: forwards;
                `;
    return (
        <DivTag style={style}>
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

