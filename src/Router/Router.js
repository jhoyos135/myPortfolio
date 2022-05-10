import React, { Component } from 'react'
import LandingContainer from '../components/Landing/LandingContainer'
import HomeLandingPage from '../components/Home/HomeLandingPage';
import LandingPageContainer from '../components/Landing/LandingPage/LandingPageContainer'
import { BrowserRouter, Route } from "react-router-dom";


export class Router extends Component {
    state = {
        section: 'about'
    }
    handleSection = (section) => {
        this.setState({
            section
        })
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <LandingContainer>
                        <Route
                            exact
                            path='/'
                            render={(routeProps) => (
                                <LandingPageContainer route={'landing'} {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/home*'
                            render={(routeProps) => (
                                <HomeLandingPage  {...this.props} {...routeProps} />
                            )}
                        />
                    </LandingContainer>
                </BrowserRouter>
            </>
        )
    }
}

export default Router