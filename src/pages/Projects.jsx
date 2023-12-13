import './Projects.css';
import projectlist from '../assets/projectlist';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
            <div className='flex flex-col justify-center items-center px-20'>
                {projectlist.map((project) => (
                    <div className="h-screen flex justify-evenly items-center w-full" key={project.id}>

                        <motion.img
                            src={project.image} alt={project.name} className=" rounded-3xl border-2 border-[#1a1b1b] h-[55%] projectimg"
                            initial={{ x: '-100%', opacity: 0 }}
                            // animate={{ x: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{
                                x: "-100%",
                                opacity: 0,
                                transition: { duration: 0, delay: 0 },
                            }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        />

                        <motion.div className="m-2 h-[55%] flex flex-col justify-center text-[#1a1b1b] p-2"
                            initial={{ x: '100%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{
                                x: "100%",
                                opacity: 0,
                                transition: { duration: 0, delay: 0 },
                            }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        >
                            <h2 className="text-4xl text-black text-center">{project.title}</h2>
                            <p className="text-xl text-center">{project.desc}</p>
                            {/* <p className="softwares">Software Used:</p> */}
                            <ul className="flex justify-center items-center flex-wrap" >
                                {project.used.map((software, index) => (
                                    <li className="bg-[#24282d] rounded-2xl m-2 py-1 px-4 text-lg text-[#eeeeee]" key={index}>{software}</li>
                                ))}
                            </ul>
                            <div className="flex justify-center items-center mt-4">
                                <Link to={project.code} target="_blank" rel="noreferrer" className="bg-[#eeeeee] rounded-xl m-2 py-1 px-4 text-lg text-[#24282d]">View Code</Link>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}