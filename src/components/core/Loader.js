import React from 'react';
import GridLoader from "react-spinners/GridLoader";


const Loader = ({ loading }) => {
    return (
        <div style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: '1000000',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <GridLoader loading={loading} />
        </div>
    )
}

export default Loader