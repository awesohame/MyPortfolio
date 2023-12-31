import './Skills.css';
import skilllist from '../assets/skilllist';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <div className='w-full h-screen flex justify-center'>
            <div className='w-[85%] h-full'>
                {skilllist.map((skill) => (
                    <div className="border-y-2 border-[#24282d] h-1/3 flex items-center flex-col xl:flex-row py-2" key={skill.id}>
                        <div className="xl:border-r-2 xl:border-[#ffc54d] h-[85%] basis-1/5 flex justify-center items-center">
                            <p className='text-xl xl:text-2xl text-center text-[#eeeeee]'>{skill.title}</p>
                        </div>
                        <div className='w-4/5 h-[85%] flex justify-evenly items-center flex-wrap'>
                            {skill.images.map((image, index) => (
                                <motion.img
                                    className='h-[30%] xl:h-[40%] mx-1 xl:mx-6'
                                    src={image}
                                    key={index}
                                    initial={{ x: '100%', opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + (index * 0.3) }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}