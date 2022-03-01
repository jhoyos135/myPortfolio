import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const StyledHeader = styled.h1`
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class ExperienceLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                {...this.props}
                leftStyles={{
                    background: 'red'
                }}
                leftContent={[
                    {
                        background: 'red',
                        scrollTopPosition: 0,
                        scrollBottomPosition: Infinity,
                        id: 'red',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '1/4'
                        },
                        node: (
                            <StyledHeader>
                                {'EXPERIENCE'}
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

export default ExperienceLandingPage