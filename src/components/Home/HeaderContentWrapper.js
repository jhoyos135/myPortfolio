import React from 'react'

const HeaderContentWrapper = ({ body, style, header }) => {
    return (
        <div style={style}>
            <h1>
                {header}
            </h1>
            {body}
        </div>
    )
}

export default HeaderContentWrapper