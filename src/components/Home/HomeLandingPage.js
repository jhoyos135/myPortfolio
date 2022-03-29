import React, { Component } from 'react';
import HomePageWrapper from '../Landing/LandingPage/HomePageWrapper';
import { leftContent, rightContent } from './Data';

export class HomeLandingPage extends Component {
    render() {
        return (
            <HomePageWrapper
                {...this.props}
                leftContent={leftContent}
                rightContent={rightContent}
            />
        )
    }
}

export default HomeLandingPage