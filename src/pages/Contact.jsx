import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className='h-screen w-[85%] flex flex-col justify-center items-center'>
            <p className='text-6xl text-[#24282d] font-bold m-4'>Connect with me</p>
            <div className='flex justify-center items-center m-4'>
                <a href="https://github.com/awesohame" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faGithub} className='text-6xl mx-6' />
                </a>
                <a href="https://linkedin.com/in/sohamaversekar" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='text-6xl mx-6' />
                </a>
                <a href="https://instagram.com/awesohame" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faInstagram} className='text-6xl mx-6' />
                </a>
                <a href="mailto:sohamaversekar777@gmail.com" className='text-[#24282d] hover:text-[#ffc54d]'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-6xl mx-6' />
                </a>
            </div>
        </div>
    )
}