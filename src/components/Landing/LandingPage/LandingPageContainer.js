import React, { Component } from 'react';
import classnames from 'classnames';
import { data } from "./data";
import BottomNavigation from '../../Navigation/BottomNavigation';
import Loader from '../../core/Loader';

import './style.scss';



export class LandingPageContainer extends Component {
    state = {
        categories: [],
        isActive: null,
        isSelected: null,
        color: "",
        background: '',
        transitionClass: false,
        loading: true,
        imageIsLoading: true,
        item: ''
    };

    componentDidMount() {

    }

    routeAfterTimerEnds = (item) => {
        //  simulates fetch request since this is only a client side website and there is no MW api request to wait for
        // done for animation purposes
        this.timer = setInterval(() => this.setState(() => ({ loading: false, item })), 1200);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loading !== prevState.loading) {
            this.navigateTo(this.state.item);
        }
    }

    handleMouseOver = (e, item) => {
        if (!this.state.isSelected) {
            this.setState(() => ({
                isActive: item.id,
                color: item.color,
                background: item.background
            }));
        }
    };
    handleMouseOut = (e, item) => {
        if (!this.state.isSelected) {
            this.setState(() => ({
                isActive: "",
                color: "",
                background: ''
            }));
        }
    };

    handleSelection = (e, item, id) => {
        this.setState(() => {
            return { transitionClass: true, isSelected: item.id }
        }, this.routeAfterTimerEnds(id)
        )
    }

    navigateTo = (item) => {
        const { history } = this.props;
        history.push(`/home/?section=${item}`)
    }

    renderCategories = () => {
        const { isActive, isSelected } = this.state;
        return data?.map((item) => {
            return (
                <div
                    key={item.id}
                    onClick={(e) => this.handleSelection(e, item, item.section)}
                    onMouseOver={(e) => this.handleMouseOver(e, item)}
                    onMouseLeave={(e) => this.handleMouseOut(e, item)}
                    className={classnames(item.id, {
                        "categories item": true,
                        active: item.id === isActive,
                        isSelected: item.id === isSelected,
                        hide: this.state.transitionClass && item.id !== isSelected,
                    })}
                >
                    {/* Back of the square */}
                    <p className="back-title">
                        {item.backText}
                    </p>
                    <div
                        className={'img'}
                        style={{
                            background: item.color
                        }}
                    />
                    {/* <img
                        style={!this.state.imageIsLoading ? {} : { display: 'none' }}
                        src={item.background}
                        onLoad={() => this.setState({ imageIsLoading: false })}
                        alt={''}
                    /> */}
                    {/* Front of the square */}
                    <h1 className="front-title">{item.frontText}</h1>
                    <span className="custom-border"></span>
                </div>
            );
        });
    };

    render() {
        const { isActive, background, isSelected, imageIsLoading, color } = this.state;
        const { route } = this.props;
        return (
            <>
                <div className="CategoryLandingContainer__hero">
                    <div className="CategoryLandingContainer__container">
                        <div className={classnames({
                            'CategoryLandingContainer__container-items': true,
                            'hasSelection': isSelected
                        })}>
                            {/* {imageIsLoading && (
                                <Loader loading={imageIsLoading} />
                            )} */}
                            {this.renderCategories()}
                        </div>
                        {/* Hero Image overlay */}
                        <div
                            className={classnames({
                                "overlay-image": true,
                                active: isActive,
                            })}
                        >
                            {/* large blocks */}
                            <div
                                className='img'
                                style={{
                                    background: color
                                    // backgroundImage: `url("${background}")`
                                }}
                            />
                        </div>
                    </div>
                </div>
                <BottomNavigation route={route} />
            </>
        )
    }
}

export default LandingPageContainer