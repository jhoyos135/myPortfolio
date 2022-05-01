import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import BottomNavigation from '../../Navigation/BottomNavigation';
import TopNavigation from '../../Navigation/TopNavigation';
import Timeline from './Timeline';
import queryString from "query-string";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleOptions } from './data';


import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './style.scss';
import colors from '../../../globalStyles.scss'


export class HomePageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0,
            currentVisiblePage: 'about'
        }
        this.scrollRef = React.createRef();
    }

    //attach our function to document event listener on scrolling whole doc
    componentDidMount() {
        const { history } = this.props;
        const { section } = queryString.parse(history.location.search);

        if (section) {
            this.scrollTo(section)
        }
        document.addEventListener("scroll", this.onScroll);
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    scrollTo = (id) => {
        const section = document.querySelector(`#${id}`);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView();
            }, 0);
        }
    }

    onScroll = (e) => {
        const { currentVisiblePage } = this.state;
        const query = document.querySelector(`#${currentVisiblePage}`);
        const distance = query.getBoundingClientRect().top - 36;
        this.setState({ scrollPosition: { [currentVisiblePage]: Math.round(distance) } })
        this.renderLeftContent();
    }

    setVisible = (current) => {
        this.setState({
            currentVisiblePage: current
        })
    }

    renderLeftContent = () => {
        const { leftContent } = this.props;
        const { currentVisiblePage } = this.state;
        const showNode = (show, hide) => {
            if (
                (
                    ((show >= this.state.scrollPosition[currentVisiblePage]) &&
                        ((hide <= this.state.scrollPosition[currentVisiblePage]))) ||
                    ((show <= this.state.scrollPosition[currentVisiblePage]) &&
                        ((hide >= this.state.scrollPosition[currentVisiblePage])))
                )
            ) {
                return true
            }
            return false
        }
        return leftContent?.map((x) => {
            if (x.id === currentVisiblePage) {
                return (
                    <>
                        <Particles
                            id="tsparticles"
                            init={async (main) => {
                                await loadFull(main);
                            }}
                            options={particleOptions(currentVisiblePage)}
                        />
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            opacity: '0.5',
                            top: '0',
                            bottom: '0',
                            left: '0',
                            right: '0',
                            background: colors.overlay,
                            zIndex: '0'
                        }} />
                        <Parallax
                            style={{ height: '100%', zIndex: '2' }}
                            rootMargin={{ top: -100, right: 100, bottom: 100, left: 100 }}
                            speed={7}
                            disabled={x?.disabledParallax}
                            easing={'easeOut'}
                            translateX={-this.state.scrollPosition[currentVisiblePage]}>
                            {
                                (x.id === currentVisiblePage || x.node) && (
                                    <>
                                        {x.node}
                                    </>
                                )
                            }
                            {
                                x?.subNodes && x?.subNodes?.map(({ node, show, hide, height }, index) => (
                                    <span style={{
                                        height,
                                        transition: 'all 0.1s ease 0s',
                                        opacity: showNode(show, hide) ? '1' : '0'
                                    }}>
                                        {node}
                                    </span>
                                )
                                )
                            }
                        </Parallax>

                    </>
                )
            }
        })
    }

    render() {
        const { route, history } = this.props;
        const { currentVisiblePage } = this.state;
        return (
            <>
                <TopNavigation route={route} history={history} />
                <div className='HomePageWrapper' style={{ position: 'relative' }}>

                    <div className='HomePageWrapper__left'>
                        <ParallaxProvider>
                            <div className='HomePageWrapper__left-content'>
                                <Navigation
                                    currentVisiblePage={currentVisiblePage}
                                    route={route}
                                    history={history}
                                />

                                <div
                                    style={{
                                        flex: 'auto',
                                        overflow: 'hidden',
                                    }}
                                >

                                    {
                                        this.renderLeftContent()
                                    }
                                </div>
                            </div>
                        </ParallaxProvider>
                    </div>
                    <Timeline
                        {...this.props}
                        onScroll={this.onScroll}
                        ref={this.scrollRef}
                        setVisible={(current) => this.setVisible(current)}
                    />
                </div >
                <BottomNavigation route={route} />
            </>
        )
    }
}

export default HomePageWrapper