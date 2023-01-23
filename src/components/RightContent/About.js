import React from 'react';
import colors from '../../globalStyles.scss'


const About = () => {
    return (
        <div>
            <div style={{
                marginTop: '15px'
            }}>
                <div style={{
                    fontSize: '5em',
                    padding: '50px 0',
                    fontFamily: colors.openSans
                }}>
                    {'Hello,'}
                </div>
                <div style={{
                    fontSize: '3em',
                    lineHeight: colors.lineHeight
                }}
                >
                    My name is <u style={{
                        letterSpacing: colors.letterSpacing,
                        fontWeight: 'bold',
                        fontFamily: colors.roboto,
                        color: colors.third
                    }}>Julian</u>, I'm a Web/Application Developer and Digital Creator.
                </div>
                <div
                    style={{
                        fontSize: '1.5em',
                        padding: '50px',
                        lineHeight: colors.lineHeight
                    }}>
                    <div
                    >
                        My main goals is to create visual appealing and dynamic applications,
                    </div>
                    <div style={{
                        padding: '30px 0'
                    }}>
                        While maintaining the best UX possible.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About