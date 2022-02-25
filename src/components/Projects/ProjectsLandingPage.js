import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const StyledHeader = styled.h1`
  color: ${colors.white};
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class ProjectsLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                leftContent={[
                    {
                        background: 'green',
                        scrollTopPosition: 0,
                        scrollBottomPosition: 499,
                        id: 'green',
                        node: (
                            <StyledHeader>
                                {'PROJECTS'}
                            </StyledHeader>
                        )
                    },
                    {
                        background: 'red',
                        scrollTopPosition: 500,
                        scrollBottomPosition: Infinity,
                        id: 'red',
                        node: (
                            <StyledHeader>
                                {'PROJECTS'}
                            </StyledHeader>
                        )
                    }

                ]}
                rightContent={[
                    {
                        id: 'rightContent1',
                        node: (
                            <div style={{ height: '1000px' }}>
                                {'Right Content 1'}
                            </div>
                        )
                    },
                    {
                        id: 'rightContent2',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'Right Content 2'}
                            </div>
                        )
                    },
                    {
                        id: 'rightContent3',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'Right Content 3'}
                            </div>
                        )
                    }
                ]}
            />
        )
    }
}

export default ProjectsLandingPage