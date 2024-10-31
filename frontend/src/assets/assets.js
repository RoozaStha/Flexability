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
        name: 'Dr. Ram Shrestha',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shrestha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Baluwatar',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sita Adhikari',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Adhikari is dedicated to women’s health, offering comprehensive gynecological services and preventive care.',
        fees: 60,
        address: {
            line1: 'Baneshwor',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Hari Prasad Khadka',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Khadka is committed to skin health, specializing in preventive dermatology and skin rejuvenation treatments.',
        fees: 30,
        address: {
            line1: 'Lakeside',
            line2: 'Pokhara, Nepal'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Ramesh Bhattarai',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Bhattarai offers compassionate and specialized care for children and adolescents.',
        fees: 40,
        address: {
            line1: 'Putalisadak',
            line2: 'Kathmandu, Nepal'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Laxmi Gurung',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gurung has expertise in neurological disorders and prioritizes early diagnosis and intervention.',
        fees: 50,
        address: {
            line1: 'Biratnagar',
            line2: 'Province 1, Nepal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Krishna Manandhar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Manandhar focuses on neurological care, committed to providing holistic treatment options.',
        fees: 50,
        address: {
            line1: 'Butwal',
            line2: 'Province 5, Nepal'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Nabin Singh',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Singh offers comprehensive healthcare services with a focus on preventive and primary care.',
        fees: 50,
        address: {
            line1: 'Jhapa',
            line2: 'Province 1, Nepal'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ram Tiwari',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Tiwari is passionate about women’s health and offers a range of gynecological services.',
        fees: 60,
        address: {
            line1: 'Dharan',
            line2: 'Province 1, Nepal'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Deepa Magar',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Magar is dedicated to providing quality dermatological care and skin treatments.',
        fees: 30,
        address: {
            line1: 'Lalitpur',
            line2: 'Kathmandu Valley, Nepal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Bikash Rai',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Rai specializes in pediatrics, offering attentive care to children and their families.',
        fees: 40,
        address: {
            line1: 'Nepalgunj',
            line2: 'Province 5, Nepal'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Renu Shah',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shah focuses on neurological health and advocates for preventive and lifestyle management.',
        fees: 50,
        address: {
            line1: 'Bharatpur',
            line2: 'Chitwan, Nepal'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Suraj K.C.',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. K.C. provides specialized neurological care with a commitment to patient well-being.',
        fees: 50,
        address: {
            line1: 'Dhangadhi',
            line2: 'Sudurpashchim, Nepal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Purna Lama',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Lama delivers comprehensive medical care, with a focus on preventive and holistic care.',
        fees: 50,
        address: {
            line1: 'Hetauda',
            line2: 'Bagmati Province, Nepal'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Bimal Thapa',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Thapa offers a range of services in women’s health and is dedicated to patient-centric care.',
        fees: 60,
        address: {
            line1: 'Pokhara',
            line2: 'Gandaki, Nepal'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Roja Shrestha',
        image: doc15,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Acharya provides expert Gastroenterologist care, focused on treatment and prevention.',
        fees: 30,
        address: {
            line1: 'Gongabu',
            line2: 'Kathmandu, Nepal'
        }
    },
]
