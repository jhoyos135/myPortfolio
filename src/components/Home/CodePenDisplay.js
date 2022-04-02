import React from 'react'
import Codepen from "react-codepen-embed";
import colors from '../../globalStyles.scss'

const CodePenDisplay = ({ header, hash, tab, user, height }) => {
    return (
        <div className='pen' style={{
            marginBottom: '50px'
        }}
        >
            <div style={{
                fontSize: '1.5em',
                marginBottom: '30px',
                fontWeight: 'bold',
                fontFamily: colors.alegreya,
                letterSpacing: '1px',
                color: colors.secondary
            }}>
                {header}
            </div>
            <Codepen
                hash={hash}
                defaultTab={tab}
                user={user}
                height={height}
            />
        </div>
    )
}

CodePenDisplay.defaultProps = {
    user: 'jhoyos135',
    height: '300'
}

export default CodePenDisplay