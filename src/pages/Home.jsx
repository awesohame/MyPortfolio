import pfp from '../assets/blackbgborder.png'
import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="w-full h-screen overflow-x-hidden overflow-y-hidden">
            {/* <div className="border-2 h-3/4 w-full text-6xl flex flex-col justify-center pl-16">
                <p className="m-2">Hi!</p>
                <p className="m-2">I am Soham Aversekar</p>
                <p className="m-2">Full Stack Developer</p>
                <p className="m-2">Welcome to my website!</p>
            </div> */}

            <div className="flex justify-center mt-16 h-3/5">
                <div className="flex justify-center xl:justify-between items-center w-4/5 flex-wrap-reverse xl:flex-nowrap">
                    <motion.span
                        className="text-4xl text-center xl:text-left xl:text-7xl text-[#1a1b1b] font-black"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, type: 'spring', delay: 0.3, stiffness: 110 }}
                    >
                        I create <span className="rainbow">playful</span> experiences
                    </motion.span>
                    <motion.img
                        src={pfp}
                        alt="pfp"
                        className="w-[240px] xl:w-[325px]"
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, type: 'spring', delay: 0.3, stiffness: 110 }}
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10 h-1/5">
                <motion.div
                    className="text-2xl/[2rem] xl:text-4xl/[3rem] text-[#1a1b1b] font-bold flex flex-col xl:flex-row"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, type: 'spring', delay: 1.8, stiffness: 110 }}
                >
                    <p className='px-2 h-8 xl:h-12 text-[#ffc54d] text-center'>
                        Soham Aversekar
                    </p>
                    <div className='px-2 h-8 xl:h-12 overflow-hidden text-center xl:text-left my-2 xl:my-0'>
                        <span className='relative rotate-text'>
                            Student
                            <br /> MERN Stack Developer
                            <br /> AIML Enthusiast
                            <br /> Student
                        </span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}