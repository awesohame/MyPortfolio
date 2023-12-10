import './Navbar.css';
import navimg from '../assets/SA.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleUser, faDiagramProject, faBrain, faComment, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
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
        <div className={`h-screen shrink-0 bg-[#24282d] ${expanded ? "basis-[15%]" : "basis-[5%]"}`}>
            <div className="flex justify-end items-center w-full h-1/5">
                {expanded && (<div className='flex justify-center items-center w-full'>
                    <img src={navimg} alt="img" className="h-20 w-20" />
                </div>)}
                <div className='p-4'>
                    <button onClick={() => {
                        setExpanded(!expanded);
                    }} className='h-10 w-10 text-[#eeeeee] cursor-pointer'>
                        {expanded ? <FontAwesomeIcon icon={faCircleChevronLeft} className='h-full w-full' /> : <FontAwesomeIcon icon={faCircleChevronRight} className='h-full w-full' />}
                    </button>

                </div>

            </div>
            <div className="h-3/5 flex flex-col justify-center">
                <ul className="flex flex-col items-center">
                    {navdata.map((item, index) => (
                        <li className="h-full w-full flex justify-center items-center" key={index}>
                            <NavLink to={item.link}
                                // className='rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]'
                                className={({ isActive }) => {
                                    return ('rounded-lg text-2xl/8 p-4 m-1 w-[80%] flex items-center hover:bg-[#1a1b1b] '
                                        + ((isActive) ? ' bg-[#1a1b1b]' : ' bg-[#24282d]')
                                    )
                                }}>
                                <FontAwesomeIcon icon={item.icon} className='h-8 w-8 text-[#eeeeee]' />
                                {expanded && (<p className="pl-3 text-[#eeeeee]">{item.name}</p>)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-1/5 w-full flex items-end justify-center">
                <NavLink to='/resume'
                    // className='rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]'
                    className={({ isActive }) => {
                        return ('h-1/2 w-full flex items-center justify-center font-extrabold text-3xl hover:bg-[#ffc54d] hover:text-[#1a1b1b] '
                            +
                            ((isActive) ? ' bg-[#ffc54d] text-[#1a1b1b]' : ' bg-[#1a1b1b] text-[#eeeeee]')
                        )
                    }}>
                    {expanded ? ('Resume') : ('R')}
                </NavLink>
            </div>
        </div >
    )
}