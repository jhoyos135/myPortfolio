import React from 'react';
import colors from '../../globalStyles.scss'


const EmbedCode = () => {
    return (
        <div style={{ marginBottom: '50px' }}>
            <div style={{
                fontSize: '1.5em',
                marginBottom: '30px',
                fontWeight: 'bold',
                fontFamily: colors.alegreya,
                letterSpacing: colors.letterSpacing,
                color: colors.secondary
            }}>
                {'Draggable Table Columns'}
            </div>
            <iframe src="https://codesandbox.io/embed/draggable-table-brzgz?fontsize=14"
                style={{
                    width: '100%',
                    height: '300px',
                    overflow: 'hidden'
                }}
                title="draggable-table"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    )
}

export default EmbedCode