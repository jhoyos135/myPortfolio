import React from 'react';
import { Animation } from '../core/Animation';
import colors from '../../globalStyles.scss'

const Layout = ({
    header,
    children
}) => {
    return (
        <div className='Layout'>
            <h1 style={{
                textAlign: 'center',
                padding: '15px',
                letterSpacing: colors.letterSpacing
            }}>
                {header}
            </h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout