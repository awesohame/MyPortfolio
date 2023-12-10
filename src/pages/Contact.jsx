import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className='w-full h-screen grow-1 flex flex-col justify-center items-center'>
            <p className='text-6xl text-[#24282d] font-bold m-4'>Connect with me</p>
            <div className='flex justify-center items-center m-4'>
                <Link to="https://github.com/awesohame" target="_blank" rel="noreferrer" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faGithub} className='text-6xl mx-6' />
                </Link>
                <Link to="https://linkedin.com/in/sohamaversekar" target="_blank" rel="noreferrer" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='text-6xl mx-6' />
                </Link>
                <Link to="https://instagram.com/awesohame" target="_blank" rel="noreferrer" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faInstagram} className='text-6xl mx-6' />
                </Link>
                <Link to="mailto:sohamaversekar777@gmail.com" target="_blank" rel="noreferrer" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-6xl mx-6' />
                </Link>
            </div>
        </div>
    )
}