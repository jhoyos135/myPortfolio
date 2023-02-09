import React from 'react';
import './style.scss';
import colors from '../../globalStyles.scss';

const BottomNavigation = ({ currentVisiblePage, hasBack, history }) => {
    return (
        <div className='BottomNavigation' style={hasBack ? { justifyContent: 'space-between' } : { justifyContent: 'end' }}>
            {hasBack && (
                <div style={{ color: 'white', fontFamily: colors.roboto }} onClick={() => history.goBack()}> {'< Back'} </div>
            )}
            <p className='BottomNavigation__text'>
                {(currentVisiblePage !== 'about' && currentVisiblePage !== 'contact') && (
                    <a target={'_blank'} href={'https://www.instagram.com/codeanywherewithjulian/'}>
                        {'@codeanywherewithjulian'}
                    </a>
                )}
            </p>
        </div>
    )
}

export default BottomNavigation