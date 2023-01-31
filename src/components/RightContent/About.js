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
                    {'Hi There,'}
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
                    }}>Julian</u>
                </div>
                <div
                    style={{
                        fontSize: '1.5em',
                        padding: '50px',
                        lineHeight: '2'
                    }}>
                    <div
                    >
                        {'I am a Full-Stack Developer with a focus on front-end development. With over 7 years of experience in the industry, I have honed my skills and developed a passion for creating beautiful and user-friendly applications/websites.'}
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '1.5em',
                        padding: '50px',
                        lineHeight: '2'
                    }}>
                    <div
                    >
                        {"I understand that a website is more than just a collection of lines of code. It's a representation of a brand, a business, or an individual. That's why I always strive to create websites that not only look good, but also provide an exceptional user experience. My unique ability to write complex code while keeping it user-friendly has been tested and proven in various environments, including working in fast-paced, agile teams of all sizes."}
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '1.5em',
                        padding: '50px',
                        lineHeight: '2'
                    }}>
                    <div
                    >
                        {"I have a strong technical background and am proficient in a range of technologies. I also have a keen eye for design and believe in the importance of good UX/UI practices."}
                    </div>
                </div>
                <div
                    style={{
                        fontSize: '1.5em',
                        padding: '50px',
                        lineHeight: '2'
                    }}>
                    <div
                    >
                        {"In my free time, I enjoy staying up to date on the latest tech trends and finding new ways to improve the user experience. I believe that a well-designed application/website has the power to make a lasting impression on its users and I strive to bring that to every project I work on. Whether you're a small business looking to establish an online presence or a large corporation in need of a comprehensive web solution, I would love the opportunity to help bring your vision to life."}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About