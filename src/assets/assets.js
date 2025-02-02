import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anuradha Liyanage',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anuradha Liyanage is dedicated to providing holistic medical care, emphasizing preventive measures and accurate diagnoses tailored to the needs of her patients.',
        fees: 50,
        address: {
            line1: 'No. 15, Galle Road',
            line2: 'Colombo 03, Sri Lanka'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Buddika Abeyarathna',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Buddika Abeyarathna specializes in women’s health, offering compassionate care and advanced solutions for gynecological issues.',
        fees: 60,
        address: {
            line1: 'No. 25, Peradeniya Road',
            line2: 'Kandy, Sri Lanka'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Jayasinghe',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sarah Jayasinghe focuses on providing modern treatments for skin conditions, ensuring healthy and glowing skin for her patients.',
        fees: 30,
        address: {
            line1: 'No. 12, Matara Road',
            line2: 'Galle, Sri Lanka'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Perera',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Perera is committed to ensuring the well-being of children, offering specialized care for infants and young ones.',
        fees: 40,
        address: {
            line1: 'No. 32, Lake Drive',
            line2: 'Nugegoda, Sri Lanka'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Fernando',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Fernando is passionate about neurological health, delivering personalized treatment plans for her patients.',
        fees: 50,
        address: {
            line1: 'No. 9, Hospital Road',
            line2: 'Negombo, Sri Lanka'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Wijesinghe',
        image: doc6,
        speciality: 'Gostroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Wijesinghe specializes in the diagnosis and treatment of neurological disorders with a patient-centered approach.',
        fees: 50,
        address: {
            line1: 'No. 14, Temple Road',
            line2: 'Kalutara, Sri Lanka'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Rajapaksha',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher Rajapaksha provides comprehensive care, focusing on early detection and treatment of various medical conditions.',
        fees: 50,
        address: {
            line1: 'No. 21, Railway Avenue',
            line2: 'Kurunegala, Sri Lanka'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy Gunasekara',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy Gunasekara is dedicated to improving women’s health with a focus on advanced gynecological treatments.',
        fees: 60,
        address: {
            line1: 'No. 18, Kandawatta Road',
            line2: 'Matara, Sri Lanka'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Wickramasinghe',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Ava Wickramasinghe helps patients achieve healthier skin with evidence-based dermatological treatments.',
        fees: 30,
        address: {
            line1: 'No. 11, Beach Road',
            line2: 'Trincomalee, Sri Lanka'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey Karunaratne',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey Karunaratne is focused on the overall growth and health of children, ensuring specialized care for his young patients.',
        fees: 40,
        address: {
            line1: 'No. 20, Hill Street',
            line2: 'Ratnapura, Sri Lanka'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe De Silva',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe De Silva offers tailored solutions for neurological concerns, improving the quality of life for her patients.',
        fees: 50,
        address: {
            line1: 'No. 5, Main Road',
            line2: 'Batticaloa, Sri Lanka'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Samarakoon',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Samarakoon excels in managing complex neurological conditions with advanced treatment protocols.',
        fees: 50,
        address: {
            line1: 'No. 7, College Lane',
            line2: 'Jaffna, Sri Lanka'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Senanayake',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Senanayake emphasizes preventive healthcare and accurate diagnoses for improved patient outcomes.',
        fees: 50,
        address: {
            line1: 'No. 8, Victoria Road',
            line2: 'Anuradhapura, Sri Lanka'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Goonetilleke',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Goonetilleke is passionate about addressing women’s health issues with compassion and expertise.',
        fees: 60,
        address: {
            line1: 'No. 19, New Bazaar Street',
            line2: 'Badulla, Sri Lanka'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Jayawardena',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Amelia Jayawardena offers modern solutions for skin-related concerns, ensuring patient confidence and satisfaction.',
        fees: 30,
        address: {
            line1: 'No. 22, Garden Road',
            line2: 'Gampaha, Sri Lanka'
        }
    }
    
]