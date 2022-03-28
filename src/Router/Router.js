import React, { Component } from 'react'
import LandingContainer from '../components/Landing/LandingContainer'
import HomeLandingPage from '../components/Home/HomeLandingPage';
import ProjectsLandingPage from '../components/Projects/ProjectsLandingPage';
import LandingPageContainer from '../components/Landing/LandingPage/LandingPageContainer'
import ExperienceLandingPage from '../components/Experience/ExperienceLandingPage';
import PlaygroundLandingPage from '../components/Playground/PlaygroundLandingPage';
import ContactLandingPage from '../components/Contact/ContactLandingPage';
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
                        {/* <Route
                            exact
                            path='/projects'
                            render={(routeProps) => (
                                <ProjectsLandingPage  {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/experience'
                            render={(routeProps) => (
                                <ExperienceLandingPage  {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/playground'
                            render={(routeProps) => (
                                <PlaygroundLandingPage  {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/contact'
                            render={(routeProps) => (
                                <ContactLandingPage route={'contact'} {...this.props} {...routeProps} />
                            )}
                        /> */}
                    </LandingContainer>
                </BrowserRouter>
            </>
        )
    }
}

export default Router