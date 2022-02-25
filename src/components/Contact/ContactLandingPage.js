import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/LandingPageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const StyledHeader = styled.h1`
  color: ${colors.white};
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class ContactLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                leftContent={[
                    {
                        background: 'purple',
                        scrollTopPosition: 0,
                        scrollBottomPosition: 499,
                        id: 'purple',
                        node: (
                            <StyledHeader>
                                {'CONTACT'}
                            </StyledHeader>
                        )
                    },
                    {
                        background: 'orange',
                        scrollTopPosition: 500,
                        scrollBottomPosition: Infinity,
                        id: 'orange',
                        node: (
                            <StyledHeader>
                                {'CONTACT'}
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

export default ContactLandingPage