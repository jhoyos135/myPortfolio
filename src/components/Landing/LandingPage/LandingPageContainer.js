import React, { Component } from 'react';
import classnames from 'classnames';
import { data } from "./data";
import LandingContainer from '../LandingContainer';
import './style.scss'


export class LandingPageContainer extends Component {
    state = {
        categories: [],
        isActive: null,
        isSelected: null,
        color: "",
        transitionClass: false
    };

    handleMouseOver = (e, item) => {
        this.setState(() => ({
            isActive: item.id,
            color: item.color,
        }));
    };
    handleMouseOut = (e, item) => {
        this.setState(() => ({
            isActive: "",
            color: "",
        }));
    };

    handleSelection = (e, item) => {
        console.log(e.target, item)
        this.setState({ transitionClass: true, isSelected: item.id, isActive: item.id, color: item.color })
    }

    renderCategories = () => {
        const { categories, isActive, isSelected } = this.state;

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
                        hide: this.state.transitionClass
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
                    <p className="front-title">{item.frontText}</p>
                    <span className="custom-border"></span>
                </div>
            );
        });
    };

    render() {
        const { isActive, color } = this.state;
        return (
            <>
                <div className="CategoryLandingContainer__hero">
                    <div className="CategoryLandingContainer__container">
                        <div className="CategoryLandingContainer__container-items">
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