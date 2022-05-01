import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as animation from 'react-animations';

const DivTag = styled.div`
position: relative;
animation: fadeInFromNone 0.3s ease-out 0s;
overflow: hidden;
z-index: 2;
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


export const Animation = ({ children, duration, delay, type, style, height, width }) => {
    const AnimationKeyFrame = keyframes`${animation[type]}`;
    const AnimationDiv = styled.div`
                position: relative;
                // sets grid inside sub node section
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                height: 100%;
                width: 100%;
                animation: ${duration} ${AnimationKeyFrame} ${delay};
                animation-fill-mode: forwards;
                `;
    return (
        <DivTag style={{
            ...style,
            height,
            width,
            display: 'flex',
            justifyContent: 'center'
        }}>
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
    height: '100%',
    width: '100%',
}
