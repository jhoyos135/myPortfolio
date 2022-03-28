import React, { Component } from 'react';
import LandingPageWrapper from '../Landing/LandingPage/HomePageWrapper';
import styled from 'styled-components';
import colors from '../../globalStyles.scss'
const StyledHeader = styled.h1`
  font-size: ${colors.heroFontSize};
  letter-spacing: ${colors.letterSpacing};
`;


export class ContactLandingPage extends Component {
    render() {
        return (
            <LandingPageWrapper
                {...this.props}
                leftStyles={{
                    background: 'purple'
                }}
                leftContent={[
                    {
                        scrollTopPosition: 0,
                        scrollBottomPosition: Infinity,
                        id: 'purple',
                        outerStyles: {
                            color: colors.white,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gridColumn: '1/4'
                        },
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