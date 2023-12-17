import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const contacts = [
    {
        icon: faGithub,
        link: 'https://github.com/awesohame',
    },
    {
        icon: faLinkedinIn,
        link: 'https://linkedin.com/in/sohamaversekar',
    },
    {
        icon: faInstagram,
        link: 'https://instagram.com/awesohame',
    },
    {
        icon: faEnvelope,
        link: 'mailto:sohamaversekar777@gmail.com',
    },
]

export default function Contact() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'
        >
            <motion.p
                className='text-4xl xl:text-6xl text-[#24282d] font-bold m-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            >Connect with me</motion.p>

            <div className='flex justify-center items-center m-4 flex-wrap'>
                {contacts.map((contact, index) => (
                    <motion.div
                        key={index}
                        className='mx-6'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 1.6 + (index * 0.4) }}
                    >
                        <Link to={contact.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={contact.icon} className='text-5xl xl:text-6xl m-3 my-5 text-[#24282d] hover:text-[#ffc54d] hover:scale-[1.2] transition-all duration-500' />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}