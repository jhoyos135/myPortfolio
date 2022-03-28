import React, { Component } from 'react';
import HomePageWrapper from '../Landing/LandingPage/HomePageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss';
import { FadeIn } from '../core/Animation';


const StyledHeader = styled.h1`
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class HomeLandingPage extends Component {
    render() {
        return (
            <HomePageWrapper
                {...this.props}
                leftStyles={{
                    background: 'blue'
                }}
                leftContent={[
                    {
                        id: 'about',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '2/4'
                        },
                        node: (
                            <FadeIn>
                                {'About'}
                            </FadeIn>
                        ),
                    },
                    {
                        id: 'projects',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '2/4'
                        },
                        node: (
                            <FadeIn>
                                {'Projects'}
                            </FadeIn>
                        ),
                        subNodes: [
                            {
                                show: -100,
                                hide: 100,
                                node: (
                                    <div>
                                        {'test'}
                                    </div>
                                )
                            },
                            {
                                show: 0,
                                hide: -400,
                                node: (
                                    <div>
                                        {'test 2'}
                                    </div>
                                )
                            },

                        ]
                    },
                    {
                        id: 'experience',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '2/4'
                        },
                        node: (
                            <FadeIn>
                                {'Experience'}
                            </FadeIn>
                        ),
                    },
                    {
                        id: 'playground',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '2/4'
                        },
                        node: (
                            <FadeIn>
                                {'Playground'}
                            </FadeIn>
                        ),
                    },
                    {
                        id: 'contact',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '2/4'
                        },
                        node: (
                            <FadeIn>
                                {'Contact'}
                            </FadeIn>
                        ),
                    },

                ]}
                rightContent={[
                    {
                        id: 0,
                        route: 'about',
                        node: (
                            <div style={{ height: '1000px' }}>
                                {'About'}
                            </div>
                        )
                    },
                    {
                        id: 1,
                        route: 'projects',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'Projects'}
                            </div>
                        )
                    },
                    {
                        id: 2,
                        route: 'experience',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'Experience'}
                            </div>
                        )
                    },
                    {
                        id: 3,
                        route: 'playground',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'PLayground'}
                            </div>
                        )
                    },
                    {
                        id: 4,
                        route: 'contact',
                        node: (
                            <div style={{ height: '2000px' }}>
                                {'Contact'}
                            </div>
                        )
                    },
                ]}
            />
        )
    }
}

export default HomeLandingPage