import React from 'react'
import chroma from 'chroma-js';
import { getcolor } from '../Landing/LandingPage/data';
import styled from 'styled-components';

const StyledDiv = styled.div`
    cursor: pointer;
    background: ${(props) => getcolor(props.section)};
    color: ${(props) => chroma(getcolor(props.section)).luminance() >= 0.5 ? 'black' : 'white'};
    padding: 15px;
    display: flex;
    justify-content: center;
    transition: 0.2s all ease 0s;
    &:hover {
        box-shadow: 2px 2px 8px rgba(0,0,0,0.5);
    }
`

const Button = ({
    text,
    handleClick,
    section
}) => {
    return (
        <StyledDiv
            section={section}
            onClick={handleClick}
        >
            {text}
        </StyledDiv>
    )
}

export default Button