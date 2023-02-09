import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import BottomNavigation from '../../Navigation/BottomNavigation';
import TopNavigation from '../../Navigation/TopNavigation';
import Timeline from './Timeline';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleOptions } from './data';
import { Animation } from '../../core/Animation';
import chroma from 'chroma-js';

import { getcolor } from './data';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './style.scss';
import Loader from '../../core/Loader';
import colors from '../../../globalStyles.scss'

export const gridPosition = (col, row) => {
    return {
        gridColumn: col,
        gridRow: row
    }
}


export class HomePageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            scrollPosition: 0,
            currentVisiblePage: 'about'
        }
        this.scrollRef = React.createRef();
    }

    //attach our function to document event listener on scrolling whole doc
    componentDidMount() {
        const { landingSection } = this.props;

        if (landingSection) {
            this.scrollTo(landingSection)
            this.customTimeOut(1500)
        }
        document.addEventListener("scroll", this.onScroll);
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    customTimeOut = (time) => {
        // fake waiting until it scrolls to
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, time);
    }

    scrollTo = (id) => {
        const section = document.querySelector(`#${id}`);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView();
            }, 500);
        }
    }

    onScroll = () => {
        const { currentVisiblePage } = this.state;
        const query = document.querySelector(`#${currentVisiblePage}`);
        const distance = query.getBoundingClientRect().top - 36;
        this.setState({ scrollPosition: { [currentVisiblePage]: distance } })
    }

    setVisible = (current) => {
        this.setState({
            currentVisiblePage: current
        })
    }

    renderPageNumber = () => {
        const { currentVisiblePage } = this.state;

        const page = currentVisiblePage === 'about' ? '01/05'
            : currentVisiblePage === 'projects' ? '02/05'
                : currentVisiblePage === 'blog' ? '03/05'
                    : currentVisiblePage === 'playground' ? '04/05'
                        : currentVisiblePage === 'contact' ? '05/05'
                            : ''
        return (
            <h4
                style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    zIndex: '11',
                    margin: '15px',
                    fontWeight: 'bold',
                    fontSize: '1.1em',
                    letterSpacing: colors.letterSpacing,
                    color: chroma(getcolor(this.state.currentVisiblePage)).luminance() >= 0.5 ? 'black' : 'white'

                }}
            >
                {page}
            </h4>
        )
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
                    <ParallaxProvider scrollAxis={x.direction ? 'vertical' : 'horizontal'}>
                        <>
                            <h1 style={{
                                writingMode: 'vertical-rl',
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                letterSpacing: colors.letterSpacing,
                                fontSize: '4em',
                                color: colors.third
                            }}>
                                <Animation
                                    timing={'ease-out'} duration={'0.5s'}
                                    style={{
                                        margin: '15px',
                                        padding: '10px',
                                        color: chroma(getcolor(this.state.currentVisiblePage)).luminance() >= 0.5 ? colors.black : colors.white
                                    }}
                                    animationStyle={
                                        { display: 'flex' }
                                    }
                                    type={'fadeInRight'}
                                >
                                    {x?.header}
                                </Animation>
                            </h1>
                            {
                                this.renderPageNumber()
                            }
                            <ParallaxBanner
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    opacity: '1',
                                    top: '0',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    filter: x?.disableHue ? 'none' : `hue-rotate(${this.state.scrollPosition[currentVisiblePage] / 1}deg)`
                                }}
                                layers={[{
                                    image: x.background,
                                    speed: 1,
                                    translateY: this.state.scrollPosition[currentVisiblePage] / x?.translateY
                                }]}
                                className="aspect-[2/1]"
                            />
                            <div style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                opacity: this.state.currentVisiblePage === 'about' ? '0.25' : '1',
                                top: '0',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                background: getcolor(currentVisiblePage),
                                zIndex: '0'
                            }} />
                            <Parallax
                                style={{
                                    height: '100%',
                                    zIndex: '2',
                                    width: x.width,
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr',
                                    gridTemplateRows: '1fr 1fr 1fr'
                                }}
                                rootMargin={{ top: -100, right: 100, bottom: 100, left: 100 }}
                                speed={1}
                                disabled={x?.disabledParallax}
                                easing={'easeOut'}
                                translateX={
                                    -this.state.scrollPosition[currentVisiblePage] / `${x.translateX ? x.translateX : 30}`
                                }
                            >

                                {
                                    (x.id === currentVisiblePage || x.node) && (
                                        <div style={{
                                            ...gridPosition('2', '2')
                                        }}>
                                            {x.node}
                                        </div>
                                    )
                                }
                                {
                                    x?.subNodes && x?.subNodes?.map(({ node, show, hide, height, gridCol, gridRow }, index) => (
                                        <div style={{
                                            height,
                                            zIndex: '8',
                                            transition: 'all 0.1s ease-in-out 0.1s',
                                            display: showNode(show, hide) ? 'block' : 'none',
                                            ...gridPosition(gridCol, gridRow)
                                        }}>
                                            {node}
                                        </div>
                                    )
                                    )
                                }
                            </Parallax>
                        </>
                    </ParallaxProvider>
                )
            }
        })
    }

    render() {
        const { route, history, landingSection } = this.props;
        const { currentVisiblePage } = this.state;
        return (
            <>
                <TopNavigation route={route} history={history} />
                <div className='HomePageWrapper' style={{ position: 'relative' }}>
                    {this.state.loading && (
                        <Loader currentVisiblePage={landingSection} loading={this.state.loading} />
                    )}

                    <div className='HomePageWrapper__left'>
                        <div className='HomePageWrapper__left-content'>
                            <Navigation
                                currentVisiblePage={currentVisiblePage}
                                route={route}
                                history={history}
                            />

                            <div
                                className='HomePageWrapper__left-content-wrapper'
                                style={{
                                    flex: 'auto',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* <Particles
                                    id="tsparticles"
                                    init={async (main) => {
                                        await loadFull(main);
                                    }}
                                    options={particleOptions(currentVisiblePage)}
                                /> */}
                                {
                                    this.renderLeftContent()
                                }
                            </div>
                        </div>
                    </div>
                    <Timeline
                        {...this.props}
                        onScroll={this.onScroll}
                        ref={this.scrollRef}
                        setVisible={(current) => this.setVisible(current)}
                        background={getcolor(currentVisiblePage)}
                        color={chroma(getcolor(this.state.currentVisiblePage)).luminance() >= 0.5 ? colors.black : colors.white}
                    />
                </div >
                <BottomNavigation currentVisiblePage={currentVisiblePage} />
            </>
        )
    }
}

export default HomePageWrapper