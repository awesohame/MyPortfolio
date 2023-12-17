import './About.css';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="w-full h-screen">
            <div className="h-full flex flex-col justify-center items-center text-[#1a1b1b]">
                <motion.p
                    className='text-4xl xl:text-6xl font-extrabold m-3 w-[85%] mt-8 xl:mt-3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                    Hi!
                </motion.p>
                <motion.p
                    className='text-4xl xl:text-6xl m-3 w-[85%]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.4 }}
                >
                    I'm <span className='font-black text-[#ffc54d]'>Soham Aversekar</span>
                </motion.p>
                <motion.p
                    className='text-lg xl:text-2xl m-3 w-[85%]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 4.4 }}
                >
                    I am an enthusiastic <span className='text-[#ffc54d]'>full stack developer</span> based in <span className='text-[#ffc54d]'>Mumbai, India</span>. I am currently in my second year of BE in Computer Engineering at Thadomal Shahani Engineering College. Committed to creating responsive, user-friendly websites while continuously expanding technical knowledge.<span className='text-[#ffc54d]'> Eager</span> to contribute my <span className='text-[#ffc54d]'>code-crushing skills</span> to an innovative team, I bring a rainbow of <span className='text-[#ffc54d]'>creativity</span> to every project.
                </motion.p>
            </div>
        </div>
    )
}