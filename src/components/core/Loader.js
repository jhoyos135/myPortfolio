import React from 'react';
import GridLoader from "react-spinners/GridLoader";
import { getcolor } from '../Landing/LandingPage/data';


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
            <GridLoader color={'#fff'} loading={loading} />
        </div>
    )
}

export default Loader