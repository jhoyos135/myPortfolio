import React, { useState, useEffect } from 'react';
import './style.scss';
import colors from '../../globalStyles.scss'
import classnames from 'classnames';
import NavigationPopOver from './NavigationPopOver';
import Icon from './Icon';


const Navigation = ({ route, history, currentVisiblePage }) => {
    const [hover, setHover] = useState('');
    const [currentPage, setCurrentPage] = useState(currentVisiblePage);
    const scrollTo = (id) => {
        const section = document.querySelector(`#${id}`);
        if (section) {
            history.replace(`/home?section=${id}`)
            section.scrollIntoView();
            setTimeout(() => {
            }, 0);
        }
    }
    const onMouseEnter = (value) => {
        setHover(value)
        setCurrentPage(value)
    };
    const onMouseLeave = () => {
        setHover('')
        setCurrentPage(currentVisiblePage)
    };
    useEffect(() => {
        setCurrentPage(currentVisiblePage)
    }, [currentVisiblePage])

    const itemStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: colors.roboto,
        letterSpacing: '2px'
    }
    return (
        <div className='Navigation'>
            {
                route !== 'home' && (
                    <div
                        style={{
                            color: colors.white,
                            height: '100%'
                        }}>
                        <div className='menu'>
                            <div
                                id={'aboutItem'}
                                style={itemStyles}
                                onClick={() => scrollTo('about')}
                                onMouseEnter={() => onMouseEnter('about')}
                                onMouseLeave={() => onMouseLeave()}
                                className={classnames({
                                    'active': currentPage === 'about',
                                    'item': true,
                                    'hover': hover === 'about'
                                })}>
                                <Icon
                                    classNames='fa-solid fa-user'
                                    fontSize={'2em'}
                                    active={currentPage === 'about'}
                                    styles={{
                                        fontSize: '2em'
                                    }}
                                />
                            </div>
                            <NavigationPopOver text='ABOUT' hover={hover} target={'aboutItem'} />
                            <div
                                id={'projectsItem'}
                                style={itemStyles}
                                onMouseEnter={() => onMouseEnter('projects')}
                                onMouseLeave={() => onMouseLeave()}
                                onClick={() => scrollTo('projects')}
                                className={classnames({
                                    'active': currentPage === 'projects',
                                    'item': true,
                                    'hover': hover === 'projects'
                                })}>
                                <Icon
                                    fontSize={'2em'}
                                    active={currentPage === 'projects'}
                                    classNames='fa-solid fa-laptop-code'
                                    styles={{
                                        fontSize: '2em'
                                    }}
                                />
                            </div>
                            <NavigationPopOver text='PROJECTS' hover={hover} target={'projectsItem'} />
                            <div
                                id={'experienceItem'}
                                style={itemStyles}
                                onMouseEnter={() => onMouseEnter('experience')}
                                onMouseLeave={() => onMouseLeave()}
                                onClick={() => scrollTo('experience')}
                                className={classnames({
                                    'active': currentPage === 'experience',
                                    'item': true,
                                    'hover': hover === 'experience'
                                })}>
                                <Icon
                                    fontSize={'2em'}
                                    active={currentPage === 'experience'}
                                    classNames='fa-solid fa-briefcase'
                                    styles={{
                                        fontSize: '2em'
                                    }}
                                />
                            </div>
                            <NavigationPopOver text='EXPERIENCE' hover={hover} target={'experienceItem'} />
                            <div
                                id={'playgroundItem'}
                                style={itemStyles}
                                onMouseEnter={() => onMouseEnter('playground')}
                                onMouseLeave={() => onMouseLeave()}
                                onClick={() => scrollTo('playground')}
                                className={classnames({
                                    'active': currentPage === 'playground',
                                    'item': true,
                                    'hover': hover === 'playground'
                                })}>
                                <Icon
                                    fontSize={'2em'}
                                    active={currentPage === 'playground'}
                                    classNames='fa-solid fa-dice-d6'
                                    styles={{
                                        fontSize: '2em'
                                    }}
                                />
                            </div>
                            <NavigationPopOver text='PLAYGROUND' hover={hover} target={'playgroundItem'} />
                            <div
                                id={'contactItem'}
                                style={itemStyles}
                                onMouseEnter={() => onMouseEnter('contact')}
                                onMouseLeave={() => onMouseLeave()}
                                onClick={() => scrollTo('contact')}
                                className={classnames({
                                    'active': currentPage === 'contact',
                                    'item': true,
                                    'hover': hover === 'contact'
                                })}>
                                <Icon
                                    fontSize={'2em'}
                                    active={currentPage === 'contact'}
                                    classNames='fa-solid fa-message'
                                    styles={{
                                        fontSize: '2em'
                                    }}
                                />
                            </div>
                            <NavigationPopOver text='CONTACT' hover={hover} target={'contactItem'} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navigation