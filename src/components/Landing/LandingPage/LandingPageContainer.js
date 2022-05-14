import React, { Component } from 'react';
import classnames from 'classnames';
import { data } from "./data";
import BottomNavigation from '../../Navigation/BottomNavigation';
import colors from '../../../globalStyles.scss'
import './style.scss';



export class LandingPageContainer extends Component {
    state = {
        categories: [],
        isActive: null,
        isSelected: null,
        color: "",
        background: '',
        header: '',
        transitionClass: false,
        loading: true,
        imageIsLoading: true,
        item: ''
    };

    routeAfterTimerEnds = (item) => {
        //  simulates fetch request since this is only a client side website and there is no MW api request to wait for
        // done for animation purposes
        this.timer = setInterval(() => this.setState(() => ({ loading: false, item })), 500);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loading !== prevState.loading) {
            this.navigateTo();
        }
    }

    handleMouseOver = (e, item) => {
        if (!this.state.isSelected) {
            this.setState(() => ({
                isActive: item.id,
                color: item.color,
                background: item.background,
                header: item.frontText
            }));
        }
    };
    handleMouseOut = (e, item) => {
        if (!this.state.isSelected) {
            this.setState(() => ({
                isActive: "",
                color: "",
                background: "",
                header: ""
            }));
        }
    };

    handleSelection = (e, item, id) => {

        this.setState(() => {
            return { transitionClass: true, isSelected: item.id }
        }, () => {
            this.props.handleSection(item.section)
            this.routeAfterTimerEnds(id)
        }
        )
    }

    navigateTo = () => {
        const { history } = this.props;
        history.push(`/home`)
    }

    renderHeader = (item) => {
        console.log(item)
        const gridPlacement = item === 'ABOUT' ? { gridColumn: '2/4', gridRow: '1/2' } :
            item === 'PROJECTS' ? { gridColumn: '2/3', gridRow: '2/3' } :
                item === 'EXPERIENCE' ? { gridColumn: '1/3', gridRow: '1/3' } :
                    item === 'PLAYGROUND' ? { gridColumn: '1/4', gridRow: '1/2' } :
                        { gridColumn: '1/4', gridRow: '1/2' }
        return (
            <div style={{
                color: colors.white,
                zIndex: 10,
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    ...gridPlacement,
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '5em'
                }}>
                    {item}
                </h1>
            </div>
        )
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
        const { isActive, background, isSelected, header, color } = this.state;
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
                            >
                                {this.renderHeader(header)}
                            </div>
                        </div>
                    </div>
                </div>
                <BottomNavigation route={route} />
            </>
        )
    }
}

export default LandingPageContainer