const IMAGE_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];
import BinaImg from '../images/bina.png';
import FluteImg from '../images/flute.png';
import MenTrumpetImg from '../images/menTrumpet.jpg';
import MenFluteImg from '../images/menFlute.jpg';

const SLIDER_IMAGES = [
    'http://via.placeholder.com/1050x650/2196F3/FFFFFF/',
    'http://via.placeholder.com/1050x650/3F51B5/FFFFFF/',
    'http://via.placeholder.com/1050x650/00BCD4/FFFFFF/',
    'http://via.placeholder.com/1050x650/009688/FFFFFF/',
    'http://via.placeholder.com/1050x650/01579B/FFFFFF/',
    'http://via.placeholder.com/1050x650/0097A7/FFFFFF/',
    'http://via.placeholder.com/1050x650/43A047/FFFFFF/',
    'http://via.placeholder.com/1050x650/558B2F/FFFFFF/',
    'http://via.placeholder.com/1050x650/1DE9B6/767676/',
    'http://via.placeholder.com/1050x650/00E5FF/767676/',
]

const CARD_DATA = [
    {
        id: 1,
        label: 'FOR MUSICIANS',
        image: 'https://media.istockphoto.com/id/935128528/photo/young-guy-plaing-on-guitar-and-sits-near-the-window.jpg?s=612x612&w=0&k=20&c=IEgJ_OxY6l3QabhGDUWEmP4bhin8WI42sWdyn9zNds8='
    },
    {
        id: 2,
        label: 'DJ/PRODUCTION',
        image: 'https://wwd.com/wp-content/uploads/2022/07/JR5_9822_4634a9aa-1257-42fa-a856-fffe9abcc43e.jpg?w=1000&h=563&crop=1'
    },
    {
        id: 3,
        label: 'LIVE SOUND & STAGE',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Red_Performing_At_The_Rockbox_San_Antonio_on_June_5th%2C_2021_%28cropped%29.jpg/640px-Red_Performing_At_The_Rockbox_San_Antonio_on_June_5th%2C_2021_%28cropped%29.jpg'
    },
    {
        id: 3,
        label: 'EDUCATION',
        image: 'https://media.istockphoto.com/id/639029992/photo/young-girl-practicing-guitar.jpg?s=612x612&w=0&k=20&c=SQ9B9Jg4A59Q4DqOJyhhBCLZ64gAI9EAs-4tFzWt6X8='
    },
]

const PRICING_METHODS_CARD = [
    {
        id: 1,
        background: '#FCF3EA',
        image: 'https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png',
        headingText: 'PLAY YOUR WAY WITH PAYPAL PAY IN 4',
        subText: 'Divide your purchase into four interest-free installments with no late fees and just 25% down.'
    },
    {
        id: 2,
        background: '#E8F8F7',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Zip_Logo.svg/1200px-Zip_Logo.svg.png',
        headingText: 'OWN IT NOW, UP TO 6 MONTHS INTEREST FREE*',
        subText: 'Purchase your own new gear with Zip Money and get up to 6 months to pay with zero interest.'
    },
    {
        id: 3,
        background: '#F6F3E4',
        image: 'https://www.studio19.com.au/app/uploads/2020/03/studio-19-logo-main.svg',
        headingText: 'START PLAYING TODAY WITH EASY RENTAL',
        subText: 'Some application process & great terms. Return /upgrade after six months or but at any time.'
    }
]

const TOP_DEALS = [
    {
        id: 1,
        name: 'Marshall Code 50 Guitar Amplifier',
        price: '699.00',
        image: `${BinaImg}`,
    },
    {
        id: 2,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: `${FluteImg}`,
    },
]

const FEATURED_PRODUCTS = [
    {
        id: 1,
        name: 'Marshall Code 50 Guitar Amplifier',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 2,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 3,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 4,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 5,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 6,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 7,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
    {
        id: 8,
        name: 'Yamaha P-45B Digital Piano',
        price: '699.00',
        image: 'https://i.pinimg.com/originals/ae/3c/1b/ae3c1b75f8f662920bc0872b972e7627.png'
    },
]

const ARTICLE_RESOURCES = [
    {
        title: 'Marshall Code 50 Guitar Amplifier',
        image: `${MenFluteImg}`,
    },
    {
        title: 'what synthesis type are you',
        image: `${MenTrumpetImg}`,
    },
    {
        title: '10 reasons for live in 2023',
        image: `${MenFluteImg}`,
    },
    {
        title: 'How to reacord a podcast with multiple people',
        image: `${MenTrumpetImg}`,
    },
    {
        title: 'Marshall Code 50 Guitar Amplifier',
        image: `${MenFluteImg}`,
    },
    {
        title: '10 reasons for live in 2023',
        image: `${FluteImg}`,
    },
    {
        title: 'what synthesis type are you',
        image: `${MenTrumpetImg}`,
    },
    {
        title: 'How to reacord a podcast with multiple people',
        image: `${MenFluteImg}`,
    },
]

export { IMAGE_FILE_TYPES, SLIDER_IMAGES, CARD_DATA, PRICING_METHODS_CARD, FEATURED_PRODUCTS, TOP_DEALS, ARTICLE_RESOURCES };