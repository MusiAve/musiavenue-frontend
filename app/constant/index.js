const IMAGE_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];
import BinaImg from '../images/bina.png';
import FluteImg from '../images/flute.png';
import MenTrumpetImg from '../images/menTrumpet.jpg';
import MenFluteImg from '../images/menFlute.jpg';
import FastDeliveryImg from '../images/fastDelivery.png';
import MoneyBackImg from '../images/moneyBack.png';
import WarrantyImg from '../images/warranty.png';
import CustomerServiceImg from '../images/customerService.png';

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

const REVIEWS = [
    {
        id: 1,
        headText: 'Etiam eu est purus.',
        longText: 'Aenean vel est sapien. Maecenas a laoreet arcu. Aenean sit amet laoreet tellus...',
        userName: 'SVEN JORDAN',
        timeSince: '3 DAYS AGO',
        stars: 5
    },
    {
        id: 2,
        headText: 'Etiam eu est purus.',
        longText: 'Aenean vel est sapien. Maecenas a laoreet arcu. Aenean sit amet laoreet tellus...',
        userName: 'SVEN JORDAN',
        timeSince: '3 DAYS AGO',
        stars: 3
    },
    {
        id: 3,
        headText: 'Etiam eu est purus.',
        longText: 'Aenean vel est sapien. Maecenas a laoreet arcu. Aenean sit amet laoreet tellus...',
        userName: 'SVEN JORDAN',
        timeSince: '3 DAYS AGO',
        stars: 4
    },
    {
        id: 4,
        headText: 'Etiam eu est purus.',
        longText: 'Aenean vel est sapien. Maecenas a laoreet arcu. Aenean sit amet laoreet tellus...',
        userName: 'SVEN JORDAN',
        timeSince: '3 DAYS AGO',
        stars: 2
    },
    {
        id: 5,
        headText: 'Etiam eu est purus.',
        longText: 'Aenean vel est sapien. Maecenas a laoreet arcu. Aenean sit amet laoreet tellus...',
        userName: 'SVEN JORDAN',
        timeSince: '3 DAYS AGO',
        stars: 2
    },
]

const KEY_FEATURES = [
    { id: 1, featureHead: 'WORLDWIDE SHIPPING', featureDesc: 'Enjoy free delivery on every order.', icon: FastDeliveryImg },
    { id: 1, featureHead: 'MONEY-BACK GUARANTEE', featureDesc: 'We offer a 30-day money back guarantee.', icon: MoneyBackImg },
    { id: 1, featureHead: 'HASSLE-FREE WARRANTY', featureDesc: 'If it isn\'t love at first listen, returns are hassle-free.', icon: WarrantyImg },
    { id: 1, featureHead: 'ONLINE CUSTOMER SERVICE', featureDesc: 'Call our expert for help creating your system.', icon: CustomerServiceImg },
]

const COUNTRY = [
    { label: 'India', value: 'india' },
    { label: 'Australia', value: 'australia' },
    { label: 'England', value: 'england' },
    { label: 'South Africa', value: 'southAfrica' },
]

const DEMO_LIST = [
    { label: 'List 1', value: 'list1' },
    { label: 'List 2', value: 'list2' },
    { label: 'List 3', value: 'list3' },
    { label: 'List 4', value: 'list4' },
]

export {
    IMAGE_FILE_TYPES,
    SLIDER_IMAGES,
    CARD_DATA,
    PRICING_METHODS_CARD,
    FEATURED_PRODUCTS,
    TOP_DEALS,
    ARTICLE_RESOURCES,
    REVIEWS,
    KEY_FEATURES,
    COUNTRY,
    DEMO_LIST
};