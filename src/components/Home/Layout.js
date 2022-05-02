import React from 'react';

const Layout = ({
    children
}) => {
    return (
        <div className='Layout'>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout