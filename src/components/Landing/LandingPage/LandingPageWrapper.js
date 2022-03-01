import React, { Component } from 'react';
import FloatingNav from '../../Navigation/FloatingNav';

import styled from 'styled-components'
import './style.scss'

const StyledDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`


export class LandingPageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0
        }
        this.scrollRef = React.createRef()
    }

    //attach our function to document event listener on scrolling whole doc
    componentDidMount() {
        document.addEventListener("scroll", this.onScroll);
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    onScroll = (e) => {
        this.setState({ scrollPosition: this.scrollRef.current.scrollTop })
        this.renderLeftContent();
    }

    renderLeftContent = () => {
        const { leftContent } = this.props;
        return leftContent.map((x, index) => (
            <StyledDiv
                style={{ ...x.outerStyles }}
            >
                {
                    // scrollTopPosition is where you want the node to start and scrollBottomPosition where you want it to end
                    // Infinity means is the last scrollable content
                    (
                        (x.scrollTopPosition <= this.state.scrollPosition) &&
                        ((x.scrollBottomPosition >= this.state.scrollPosition) || (x.scrollBottomPosition === Infinity))
                    ) && (
                        <div
                            key={index}
                            id={x.id}
                            style={
                                {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    zIndex: '10',
                                    ...x.innerStyles
                                }}>
                            {x.node}
                        </div>
                    )
                }
            </StyledDiv>

        ))
    }

    render() {
        const { rightContent, leftStyles } = this.props;
        return (
            <div className='LandingPageWrapper' style={{ position: 'relative' }}>
                <div className='LandingPageWrapper__left' style={{ ...leftStyles }}>
                    <div className='LandingPageWrapper__left-content'>
                        {
                            this.renderLeftContent()
                        }
                    </div>
                    <FloatingNav {...this.props} />
                </div>
                <div
                    className='LandingPageWrapper__right custom-scroller'
                    style={{ height: '100%' }}
                    onScroll={this.onScroll}
                    ref={this.scrollRef}
                >
                    {
                        rightContent.map((x, index) => {
                            return (
                                <div key={index} id={x.id} className='LandingPageWrapper__right-content'>
                                    {x.node}
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default LandingPageWrapper