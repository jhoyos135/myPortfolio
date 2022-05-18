import React from 'react';
import './style.scss';

const BottomNavigation = ({ currentVisiblePage }) => {
    return (
        <div className='BottomNavigation'>
            <p className='BottomNavigation__text'>
                {currentVisiblePage !== 'about' && (
                    <a target={'_blank'} href={'https://www.instagram.com/codeanywherewithjulian/'}>
                        {'@codeanywherewithjulian'}
                    </a>
                )}
            </p>
        </div>
    )
}

export default BottomNavigation