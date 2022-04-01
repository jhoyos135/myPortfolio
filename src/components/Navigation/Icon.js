import React from 'react'

const Icon = ({ classNames, styles, active, fontSize }) => {
    return (
        <div>
            <i class={classNames} style={{
                ...styles,
                fontSize: active ? '2.1em' : fontSize
            }} />
        </div>
    )
}

export default Icon