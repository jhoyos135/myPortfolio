import { imageData } from "../../imageData";
import colors from '../../../globalStyles.scss'
export const getImage = (section) => {
    return imageData?.find(x => x?.section === section)?.image
}

export const data = [
    { id: 1, section: 'about', route: 'home', color: 'blue', frontText: 'ABOUT', backText: 'Come in, and find out who I am' },
    { id: 2, section: 'projects', route: 'home', color: 'green', frontText: 'PROJECTS', backText: 'Take a look at some of my selected projects' },
    { id: 3, section: 'experience', route: 'home', color: 'red', frontText: 'EXPERIENCE', backText: 'Where I\'ve been, where I am and where I want to go.' },
    { id: 4, section: 'playground', route: 'home', color: 'pink', background: getImage('playground'), frontText: 'PLAYGROUND', backText: 'A collection of front-end coding. These are a mix of features from previous work, practice and side projects.' },
    { id: 5, section: 'contact', route: 'home', color: 'purple', frontText: 'CONTACT', backText: 'Can\'t wait to hear from you' }
];

export const particleOptions = (section) => {
    return {
        style: {
            position: 'relative'
        },
        fpsLimit: 120,
        particles: {
            number: {
                value: 0,
                density: {
                    enable: true,
                }
            },
            color: {
                value: "#333",
                animation: {
                    enable: false,
                    speed: 10,
                    sync: true
                }
            },
            shape: {
                type: "square",
                stroke: {
                    width: 1,
                    color: "#b5171d"
                },
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.9,
                    sync: false
                }
            },

            size: {
                value: { min: 50, max: 150 },
                random: {
                    enable: false,
                    minimumValue: 40
                }
            },

            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outMode: "destroy",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "trail"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: false
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 1,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 100
                },
                push: {
                    particles_nb: 1
                },
                remove: {
                    particles_nb: 1
                },
                trail: {
                    delay: 0.098,
                    quantity: 1
                }
            }
        },
        background: {
            color: "#000000",
            image: `url('${getImage(section)}')`,
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
        },
        backgroundMask: {
            opacity: 1,
            enable: true,
            cover: {
                color: colors.white
            }
        },
        BackgroundMaskCover: {
            cover: {
                color: colors.white
            }
        }
    }
}