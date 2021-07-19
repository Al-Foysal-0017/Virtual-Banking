import img1 from '../../images/svg-2.svg'
import img2 from '../../images/logIn.svg'
import img3 from '../../images/create.svg'


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel:'Get started',
    imgStart: false, // if we true there than the svg img will be on left
    img: img1,
    alt:'Car',
    dark: true,
    primary: true,
    darkText: false,
}


export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located.All you need is an internet connection and a phone or computer.',
    buttonLabel:'Learn More',
    imgStart: true, 
    img: img2,
    alt:'PiggyBank',
    dark: false,
    primary: false,
    darkText: true,
}


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel:'Start Now',
    imgStart: false, // if we true there than the svg img will be on left
    img: img3,
    alt:'Paper',
    dark: false,
    primary: false,
    darkText: true,
}