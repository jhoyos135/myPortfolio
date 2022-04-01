import React from 'react';
import './style.scss';
import Icon from './Icon';

const TopNavigation = ({ history }) => {
    return (
        <div className='TopNavigation'>
            <p className='TopNavigation__text'>
                <div onClick={() => history.push('/')}>
                    <Icon
                        fontSize={'1em'}
                        classNames='fa-solid fa-home'
                        styles={{
                            fontSize: '1em'
                        }}
                    />
                </div>
            </p>
        </div>
    )
}

export default TopNavigation