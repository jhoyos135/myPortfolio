import React from 'react';
import { Animation } from '../core/Animation';

const Layout = ({
    header,
    children
}) => {
    return (
        <div className='Layout'>
            <h1 style={{
                textAlign: 'center',
                padding: '15px',
                letterSpacing: '4px'
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