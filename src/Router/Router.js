import React, { Component } from 'react'
import LandingContainer from '../components/Landing/LandingContainer'
import AboutLandingPage from '../components/About/AboutLandingPage';
import LandingPageContainer from '../components/Landing/LandingPage/LandingPageContainer'
import { BrowserRouter, Route } from "react-router-dom";


export class Router extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <BrowserRouter>
                    <LandingContainer>
                        <Route
                            exact
                            path='/'
                            render={(routeProps) => (
                                <LandingPageContainer {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/about'
                            render={(routeProps) => (
                                <AboutLandingPage {...this.props} {...routeProps} />
                            )}
                        />
                    </LandingContainer>
                </BrowserRouter>
            </>
        )
    }
}

export default Router