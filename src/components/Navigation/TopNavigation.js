import React from 'react';
import './style.scss';

const TopNavigation = ({ history }) => {
    return (
        <div className='TopNavigation'>
            <p className='TopNavigation__text'>
                <div onClick={() => history.push('/')}>
                    {'Home'}
                </div>
            </p>
        </div>
    )
}

export default TopNavigation