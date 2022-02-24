import React, { Component } from 'react';
import classnames from 'classnames';
import { data } from "./data";
import './style.scss';


export class LandingPageContainer extends Component {
    state = {
        categories: [],
        isActive: null,
        isSelected: null,
        color: "",
        transitionClass: false,
        loading: true
    };

    routeAfterTimerEnds = (item) => {
        this.timer = setInterval(() => this.setState(() => ({ loading: false, item })), 1500);
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
            }));
        }
    };
    handleMouseOut = (e, item) => {
        if (!this.state.isSelected) {
            this.setState(() => ({
                isActive: "",
                color: "",
            }));
        }
    };

    handleSelection = (e, item) => {
        this.setState(() => {
            return { transitionClass: true, isSelected: item.id }
        }, this.routeAfterTimerEnds(item)
        )
    }

    navigateTo = (item) => {
        const { history } = this.props;
        history.push(`/${item.route}`)
    }

    renderCategories = () => {
        const { isActive, isSelected } = this.state;

        return data?.map((item) => {
            return (
                <div
                    key={item.id}
                    onClick={(e) => this.handleSelection(e, item)}
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
                        className='img'
                        style={{ backgroundColor: item.color }}
                    />
                    {/* Front of the square */}
                    <h1 className="front-title">{item.frontText}</h1>
                    <span className="custom-border"></span>
                </div>
            );
        });
    };

    render() {
        const { isActive, color, isSelected } = this.state;
        return (
            <>
                <div className="CategoryLandingContainer__hero">
                    <div className="CategoryLandingContainer__container">
                        <div className={classnames({
                            'CategoryLandingContainer__container-items': true,
                            'hasSelection': isSelected
                        })}>
                            {this.renderCategories()}
                        </div>
                        {/* Hero Image overlay */}
                        <div
                            className={classnames({
                                "overlay-image": true,
                                active: isActive,
                            })}
                        >
                            <div
                                className='img'
                                style={{ backgroundColor: color }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LandingPageContainer