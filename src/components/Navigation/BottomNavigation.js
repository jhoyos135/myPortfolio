import React from 'react';
import './style.scss';

const BottomNavigation = ({ route }) => {
    return (
        <div className='BottomNavigation'>
            <p className='BottomNavigation__text'>
                <a target={'_blank'} href={'https://www.instagram.com/codeanywherewithjulian/'}>
                    {'@codeanywherewithjulian'}
                </a>
            </p>
        </div>
    )
}

export default BottomNavigation