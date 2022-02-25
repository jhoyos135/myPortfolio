import React, { Component } from 'react'
import LandingContainer from '../components/Landing/LandingContainer'
import AboutLandingPage from '../components/About/AboutLandingPage';
import ProjectsLandingPage from '../components/Projects/ProjectsLandingPage';
import LandingPageContainer from '../components/Landing/LandingPage/LandingPageContainer'
import ExperienceLandingPage from '../components/Experience/ExperienceLandingPage';
import SkillsLandingPage from '../components/Skills/SkillsLandingPage';
import ContactLandingPage from '../components/Contact/ContactLandingPage';
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
                        <Route
                            exact
                            path='/projects'
                            render={(routeProps) => (
                                <ProjectsLandingPage {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/experience'
                            render={(routeProps) => (
                                <ExperienceLandingPage {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/skills'
                            render={(routeProps) => (
                                <SkillsLandingPage {...this.props} {...routeProps} />
                            )}
                        />
                        <Route
                            exact
                            path='/contact'
                            render={(routeProps) => (
                                <ContactLandingPage {...this.props} {...routeProps} />
                            )}
                        />
                    </LandingContainer>
                </BrowserRouter>
            </>
        )
    }
}

export default Router