import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss';
import { FadeIn } from '../core/Animation';

const StyledHeader = styled.h1`
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class AboutLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                {...this.props}
                leftStyles={{
                    background: 'blue'
                }}
                leftContent={[
                    {
                        scrollTopPosition: 0,
                        scrollBottomPosition: Infinity,
                        id: 'blue',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '1/4'
                        },
                        node: (
                            <StyledHeader>
                                {'ABOUT'}
                            </StyledHeader>
                        )
                    },
                    {
                        scrollTopPosition: 300,
                        scrollBottomPosition: Infinity,
                        id: 'blue',
                        outerStyles: {
                            color: 'white'
                        },
                        innerStyles: {
                            height: '100%'
                        },
                        node: (
                            <FadeIn>
                                {'test'}
                            </FadeIn>
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