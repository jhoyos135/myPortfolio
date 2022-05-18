import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as animation from 'react-animations';

const DivTag = styled.div`
position: relative;
animation: fadeInFromNone 0.2s ease-out 0s;
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
`;
const AnimationDiv = styled.div`
position: relative;
// sets grid inside sub node section
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
height: 100%;
width: 100%;
animation-name: ${(props) => props.AnimationKeyFrame};
animation-duration: ${(props) => props.duration};
animation-delay: ${(props) => props.delay};
animation-timing-function: ${(props) => props.timing};
animation-fill-mode: forwards;
`;


export const Animation = ({ children, duration, delay, type, style, height, width, timing, animationStyle }) => {
    const AnimationKeyFrame = keyframes`${animation[type]}`;
    return (
        <DivTag style={{
            height,
            width,
            display: 'flex',
            justifyContent: 'center',
            ...style
        }}>
            <AnimationDiv
                AnimationKeyFrame={AnimationKeyFrame}
                delay={delay}
                duration={duration}
                timing={timing}
                style={{
                    position: 'relative',
                    // sets grid inside sub node section
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr 1fr',
                    height: '100%',
                    width: '100%',
                    animationFillMode: 'forwards',
                    ...animationStyle
                }}>
                {children}
            </AnimationDiv>
        </DivTag>
    )
}

Animation.defaultProps = {
    type: 'fade',
    duration: '0.2s',
    timing: 'ease-in-out',
    delay: '0.1s',
    height: '100%',
    width: '100%',
}

