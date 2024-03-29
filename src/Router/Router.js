import React, { Component } from 'react'
import LandingContainer from '../components/Landing/LandingContainer'
import HomeLandingPage from '../components/Home/HomeLandingPage';
import LandingPageContainer from '../components/Landing/LandingPage/LandingPageContainer'
import BlogContainer from '../components/Blog/BlogContainer';
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
                                <LandingPageContainer
                                    route={'landing'}
                                    handleSection={this.handleSection}
                                    {...this.props}
                                    {...routeProps}
                                />
                            )}
                        />
                        <Route
                            exact
                            path='/home'
                            render={(routeProps) => (
                                <HomeLandingPage
                                    landingSection={this.state.section}
                                    {...this.props}
                                    {...routeProps}
                                />
                            )}
                        />
                        <Route
                            exact
                            path='/blog'
                            render={(routeProps) => (
                                <BlogContainer
                                    {...this.props}
                                    {...routeProps}
                                />
                            )}
                        />
                    </LandingContainer>
                </BrowserRouter>
            </>
        )
    }
}

export default Router