import React, { Component } from 'react';
import FloatingNav from '../../Navigation/FloatingNav';

import './style.scss'

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
        return leftContent.map((x, index) => {
            // scrollTopPosition is where you want the node to start and scrollBottomPosition where you want it to end
            // Infinity means is the last scrollable content
            if (
                (x.scrollTopPosition <= this.state.scrollPosition) &&
                ((x.scrollBottomPosition >= this.state.scrollPosition) || (x.scrollBottomPosition === Infinity))
            ) {
                return (
                    <div
                        key={index}
                        id={x.id}
                        style={{
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            background: x.background
                        }}>
                        {x.node}
                    </div>
                )
            }
        })
    }

    render() {
        const { rightContent } = this.props;
        return (
            <div className='LandingPageWrapper' style={{ position: 'relative' }}>
                <div className='LandingPageWrapper__left'>
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