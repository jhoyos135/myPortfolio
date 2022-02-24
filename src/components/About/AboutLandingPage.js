import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const DIV = styled.h1`
  color: ${colors.white};
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class AboutLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                leftContent={[
                    {
                        background: 'blue',
                        scrollTopPosition: 0,
                        scrollBottomPosition: 99,
                        id: 'blue',
                        node: (
                            <DIV>
                                {'ABOUT ME'}
                            </DIV>
                        )
                    },
                    {
                        background: 'green',
                        scrollTopPosition: 100,
                        scrollBottomPosition: Infinity,
                        id: 'green',
                        node: (
                            <DIV>
                                {'ABOUT ME'}
                            </DIV>
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

export default AboutLandingPage