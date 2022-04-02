import React, { Component } from 'react';
import FloatingNav from '../../Navigation/FloatingNav';
import Navigation from '../../Navigation/Navigation';
import BottomNavigation from '../../Navigation/BottomNavigation';
import TopNavigation from '../../Navigation/TopNavigation';
import Timeline from './Timeline';
import queryString from "query-string";
import colors from '../../../globalStyles.scss'

import styled from 'styled-components'
import './style.scss'

const StyledDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`


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
        const distance = query.getBoundingClientRect().top - 50;
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
        return leftContent.map((x, index) => {
            if (x.id === currentVisiblePage) {

                return (
                    <>

                        {
                            x.id === currentVisiblePage && (
                                <>
                                    {x.node}
                                </>
                            )
                        }

                        {
                            x?.subNodes && x?.subNodes?.map(({ node, show, hide, innerStyles }, index) => (
                                // scrollTopPosition is where you want the node to start and hide where you want it to end
                                // Infinity means is the last scrollable content
                                (
                                    (
                                        ((show >= this.state.scrollPosition[currentVisiblePage]) &&
                                            ((hide <= this.state.scrollPosition[currentVisiblePage]))) ||
                                        ((show <= this.state.scrollPosition[currentVisiblePage]) &&
                                            ((hide >= this.state.scrollPosition[currentVisiblePage])))
                                    )
                                ) && (
                                    <>
                                        {node}
                                    </>
                                )
                            )
                            )
                        }
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
                        <div className='HomePageWrapper__left-content'>
                            <Navigation
                                currentVisiblePage={currentVisiblePage}
                                route={route}
                                history={history}
                            />
                            {
                                this.renderLeftContent()
                            }
                        </div>
                    </div>
                    <Timeline
                        onScroll={this.onScroll}
                        {...this.props}
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