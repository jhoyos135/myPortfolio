import React from 'react';
import GridLoader from "react-spinners/GridLoader";
import { getcolor } from '../Landing/LandingPage/data';
import chroma from 'chroma-js';



const Loader = ({ loading, currentVisiblePage }) => {
    return (
        <div style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: '1000000',
            background: getcolor(currentVisiblePage),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <GridLoader color={chroma(getcolor(currentVisiblePage)).luminance() >= 0.5 ? 'black' : 'white'} loading={loading} />
        </div>
    )
}

export default Loader