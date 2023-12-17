import './Projects.css';
import projectlist from '../assets/projectlist';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
            <div className='flex flex-col justify-center items-center px-8 xl:px-20'>
                {projectlist.map((project) => (
                    <div className="h-screen flex justify-center xl:justify-evenly items-center w-full flex-col xl:flex-row" key={project.id}>

                        <motion.img
                            src={project.image} alt={project.name} className=" rounded-3xl border-2 border-[#1a1b1b] my-5 h-[25%] xl:h-[55%] projectimg"
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

                        <motion.div className="m-2 h-[35%] xl:h-[55%] flex flex-col justify-center text-[#1a1b1b] p-2"
                            initial={{ x: '100%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{
                                x: "100%",
                                opacity: 0,
                                transition: { duration: 0, delay: 0 },
                            }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        >
                            <h2 className="text-2xl xl:text-4xl text-[#24282d] font-black text-center">{project.title}</h2>
                            <p className="text-lg/[1.3rem] text-[#24282d] xl:text-xl text-center py-1">{project.desc}</p>
                            {/* <p className="softwares">Software Used:</p> */}
                            <ul className="flex justify-center items-center flex-wrap" >
                                {project.used.map((software, index) => (
                                    <li className="bg-[#24282d] rounded-2xl m-1 xl:m-2 py-1 px-3 xl:px-4 text-sm xl:text-lg text-[#eeeeee]" key={index}>{software}</li>
                                ))}
                            </ul>
                            <div className="flex justify-center items-center mt-4">
                                <Link to={project.code} target="_blank" rel="noreferrer" className="bg-[#eeeeee] rounded-xl m-1 xl:m-2 py-1 px-3 xl:px-4 text-sm xl:text-lg text-[#24282d]">View Code</Link>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}