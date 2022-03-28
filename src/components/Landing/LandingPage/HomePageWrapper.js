import React, { Component } from 'react';
import FloatingNav from '../../Navigation/FloatingNav';
import TopNavigation from '../../Navigation/TopNavigation';
import BottomNavigation from '../../Navigation/BottomNavigation';
import Timeline from './Timeline';
import queryString from "query-string";


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
            }, 10);
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
                    <StyledDiv
                        key={index}
                        style={{ ...x.outerStyles }}
                    >

                        {
                            x.id === currentVisiblePage && (
                                <div
                                    style={
                                        {
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex',
                                            zIndex: '10'
                                        }}>
                                    {x.node}
                                </div>
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
                                    <div
                                        // key={index}
                                        // id={id}
                                        style={
                                            {
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                // display: 'flex',
                                                zIndex: '10',
                                                ...innerStyles
                                            }}
                                    >
                                        {node}
                                    </div>
                                )
                            )
                            )
                        }
                    </StyledDiv>
                )
            }



        })
    }

    render() {
        const { rightContent, leftStyles, route, history } = this.props;
        const { currentVisiblePage } = this.state;
        return (
            <>
                <div className='HomePageWrapper' style={{ position: 'relative' }}>
                    <div className='HomePageWrapper__left' style={{ ...leftStyles }}>
                        <div className='HomePageWrapper__left-content'>
                            <TopNavigation
                                currentVisiblePage={currentVisiblePage}
                                route={route}
                                history={history}
                            />
                            {
                                this.renderLeftContent()
                            }
                        </div>
                        {/* <FloatingNav {...this.props} /> */}
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