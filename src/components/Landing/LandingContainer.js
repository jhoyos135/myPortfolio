import React from "react";
import "./styles.scss";

export const LandingContainer = ({ children }) => {
    return (
        <div className='LandingContainer'>
            <div className="LandingContainer__wrapper" >
                <div className='LandingContainer__wrapper-body'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LandingContainer;