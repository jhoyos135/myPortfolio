import { imageData } from "../../imageData";
const getImage = (section) => {
    return imageData.find(x => x.section === section).image
}

export const data = [
    { id: 1, section: 'about', route: 'home', color: 'blue', frontText: 'ABOUT', backText: 'Come in, and find out who I am' },
    { id: 2, section: 'projects', route: 'home', color: 'green', frontText: 'PROJECTS', backText: 'Take a look at some of my selected projects' },
    { id: 3, section: 'experience', route: 'home', color: 'red', frontText: 'EXPERIENCE', backText: 'Where I\'ve been, where I am and where I want to go.' },
    { id: 4, section: 'playground', route: 'home', color: 'pink', background: getImage('playground'), frontText: 'PLAYGROUND', backText: 'A collection of front-end coding. These are a mix of features from previous work, practice and side projects.' },
    { id: 5, section: 'contact', route: 'home', color: 'purple', frontText: 'CONTACT', backText: 'Can\'t wait to hear from you' }
];