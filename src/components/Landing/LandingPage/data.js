import { imageData } from "../../imageData";
import colors from '../../../globalStyles.scss'
export const getImage = (section) => {
    return imageData?.find(x => x?.section === section)?.image
}

export const data = [
    { id: 1, section: 'about', route: 'home', color: '#2D60B4', frontText: 'ABOUT', backText: 'Come in, and find out who I am' },
    { id: 2, section: 'projects', route: 'home', color: '#528E63', frontText: 'PROJECTS', backText: 'Take a look at some of my selected projects' },
    { id: 3, section: 'experience', route: 'home', color: '#B5171D', frontText: 'EXPERIENCE', backText: 'Where I\'ve been, where I am and where I want to go.' },
    { id: 4, section: 'playground', route: 'home', color: '#471D5D', background: getImage('playground'), frontText: 'PLAYGROUND', backText: 'A collection of front-end coding. These are a mix of features from previous work, practice and side projects.' },
    { id: 5, section: 'contact', route: 'home', color: '#F4B02A', frontText: 'CONTACT', backText: 'Can\'t wait to hear from you' }
];

export const getcolor = (section) => {
    return data?.find(x => x?.section === section)?.color
}


export const particleOptions = (section) => {
    return {
        style: {
            position: 'relative'
        },
        fpsLimit: 120,
        particles: {
            life: {
                duration: { value: 0 }
            },
            number: {
                value: 0,
                limit: 25,
                density: {
                    enable: false,
                }
            },
            color: {
                value: ["#e3b505", "#2d60b4", "#b5171d"],
                animation: {
                    enable: false,
                    speed: 10,
                    sync: true
                }
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 1,
                    color: "#b5171d"
                },
            },
            opacity: {

                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 1,
                    sync: false
                }
            },
            size: {
                value: { min: 1, max: 3 },
                random: {
                    enable: true,
                    minimumValue: 2
                }
            },

            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: true,
                outMode: "none",
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
                    enable: false,
                    mode: "trail"
                },
                onclick: {
                    enable: true,
                    mode: "trail"
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
                    size: 0,
                    duration: 1,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 100
                },
                push: {
                    particles_nb: 0
                },
                remove: {
                    particles_nb: 1
                },
                trail: {
                    delay: 0,
                    quantity: 1
                }
            }
        },
        background: {
            color: getcolor(section),
            // image: `url('${getImage(section)}')`,
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