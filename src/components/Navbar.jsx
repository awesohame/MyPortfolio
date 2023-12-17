import './Navbar.css';
import navimg from '../assets/SA.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleUser, faDiagramProject, faBrain, faComment, faCircleChevronLeft, faCircleChevronRight, faBars, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

let navdata = [
    {
        name: 'Home',
        icon: faHouse,
        link: '/',
    },
    {
        name: 'About',
        icon: faCircleUser,
        link: '/about',
    },
    {
        name: 'Projects',
        icon: faDiagramProject,
        link: '/projects',
    },
    {
        name: 'Skills',
        icon: faBrain,
        link: '/skills',
    },
    {
        name: 'Contact',
        icon: faComment,
        link: '/contact',
    }
]
export default function Navbar() {
    const [expanded, setExpanded] = useState(true);
    //h-screen shrink-0 bg-[#24282d] basis-[5%]
    return (
        <>
            <div className={`h-screen h-[100dvh] shrink-0 bg-[#24282d] z-10 absolute xl:static ${expanded ? "basis-[14rem]" : "basis-[6rem] left-[-6rem]"}`}>
                <div className="flex justify-center items-center w-full h-1/5">
                    {expanded && (<div className='flex justify-center items-center w-full'>
                        <img src={navimg} alt="img" className="h-20 w-20" />
                    </div>)}
                    <div className='p-4'>
                        <button
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                            className='h-10 w-10 text-[#eeeeee] cursor-pointer'>
                            {expanded ? <FontAwesomeIcon icon={faCircleChevronLeft} className='h-full w-full hover:scale-110 transition-all duration-400' /> : <FontAwesomeIcon icon={faCircleChevronRight} className='h-full w-full hover:scale-110 transition-all duration-400' />}
                        </button>

                    </div>
                </div>
                <div className="h-3/5 flex flex-col justify-center">
                    <ul className="flex flex-col items-center">
                        {navdata.map((item, index) => (
                            <li className="h-full w-full flex justify-center items-center" key={index}>
                                <NavLink to={item.link}
                                    onClick={() => {
                                        setExpanded(false);
                                    }}
                                    className={({ isActive }) => {
                                        return (`rounded-lg text-2xl/8 p-4 my-1 mx-4 flex items-center hover:bg-[#1a1b1b] ${expanded ? 'w-[12rem]' : 'w-[4rem]'} `
                                            + ((isActive) ? ' bg-[#1a1b1b] text-[#eeeeee]' : ' bg-[#24282d] text-[#c0c0c0]')
                                        )
                                    }}>
                                    <FontAwesomeIcon icon={item.icon} className={`h-8 w-8`} />
                                    {expanded && (<p className="pl-3">{item.name}</p>)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-1/5 w-full flex items-end justify-center">
                    <NavLink to='/resume'
                        // className='rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]'
                        className={({ isActive }) => {
                            return ('transition-all duration-[450ms] h-1/2 w-full flex items-center justify-center font-extrabold text-3xl hover:bg-[#ffc54d] hover:text-[#1a1b1b] '
                                +
                                ((isActive) ? ' bg-[#ffc54d] text-[#1a1b1b]' : ' bg-[#1a1b1b] text-[#eeeeee]')
                            )
                        }}>
                        {expanded ? ('Resume') : ('R')}
                    </NavLink>
                </div>
            </div >
            {!expanded && <button onClick={() => {
                setExpanded(!expanded);
            }} className='h-10 w-10 text-[#61677A] m-5 absolute xl:hidden z-10 border-2 rounded-[1.25rem] p-[0.5rem] bg-[#eeeeee]'>
                <FontAwesomeIcon icon={faBars} className='h-full w-full' />
            </button>}
        </>
    )
}