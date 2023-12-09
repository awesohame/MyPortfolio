import './Resume.css';
import resume from '../assets/resume.pdf';

export default function Resume() {
    return (
        <div className='h-screen w-[85%]'>
            <embed src={resume} type="application/pdf" className='w-full h-full' />
        </div>
    )
}