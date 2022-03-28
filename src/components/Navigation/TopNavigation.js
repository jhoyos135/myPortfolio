import React, { useState } from 'react';
import './style.scss';
import colors from '../../globalStyles.scss'
import classnames from 'classnames'

const TopNavigation = ({ route, history, currentVisiblePage }) => {
    const scrollTo = (id) => {
        const section = document.querySelector(`#${id}`);
        if (section) {
            setTimeout(() => {
                history.push(`/home?section=${id}`)
                section.scrollIntoView();
            }, 10);
        }
    }
    const itemStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: colors.roboto,
        letterSpacing: '2px'
    }
    return (
        <div className='TopNavigation'>
            {
                route !== 'home' && (
                    <span
                        style={{
                            display: 'flex',
                            color: colors.white,
                            width: '100%',
                            height: '100%'

                        }}>
                        <div className='menu'>
                            <span
                                style={itemStyles}
                                onClick={() => scrollTo('about')}
                                className={classnames({
                                    'active': currentVisiblePage === 'about',
                                    'item': true
                                })}>
                                {'ABOUT'}
                            </span>
                            <span
                                style={itemStyles}
                                onClick={() => scrollTo('projects')}
                                className={classnames({
                                    'active': currentVisiblePage === 'projects',
                                    'item': true
                                })}>
                                {'PROJECTS'}
                            </span>
                            <span
                                style={itemStyles}
                                onClick={() => scrollTo('experience')}
                                className={classnames({
                                    'active': currentVisiblePage === 'experience',
                                    'item': true
                                })}>
                                {'EXPERIENCE'}
                            </span>
                            <span
                                style={itemStyles}
                                onClick={() => scrollTo('playground')}
                                className={classnames({
                                    'active': currentVisiblePage === 'playground',
                                    'item': true
                                })}>
                                {'PLAYGROUND'}
                            </span>
                            <span
                                style={itemStyles}
                                onClick={() => scrollTo('contact')}
                                className={classnames({
                                    'active': currentVisiblePage === 'contact',
                                    'item': true
                                })}>
                                {'CONTACT'}
                            </span>
                        </div>
                    </span>
                )
            }
        </div>
    )
}

export default TopNavigation