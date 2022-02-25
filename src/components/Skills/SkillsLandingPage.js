import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const StyledHeader = styled.h1`
  color: ${colors.white};
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class SkillsLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                {...this.props}
                leftContent={[
                    {
                        background: 'pink',
                        scrollTopPosition: 0,
                        scrollBottomPosition: 499,
                        id: 'pink',
                        node: (
                            <StyledHeader>
                                {'SKILLS'}
                            </StyledHeader>
                        )
                    },
                    {
                        background: 'purple',
                        scrollTopPosition: 500,
                        scrollBottomPosition: Infinity,
                        id: 'purple',
                        node: (
                            <StyledHeader>
                                {'SKILLS'}
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

export default SkillsLandingPage