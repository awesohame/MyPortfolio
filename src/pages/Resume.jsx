import './Resume.css';
import resume from '../assets/resume.pdf';

export default function Resume() {
    return (
        <div className='w-full h-screen'>
            <embed src={resume} type="application/pdf" className='w-full h-full' />
        </div>
    )
}