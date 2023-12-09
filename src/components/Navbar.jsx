import './Navbar.css';
import navimg from '../assets/SA.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faDiagramProject, faBrain, faComment } from '@fortawesome/free-solid-svg-icons'

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
    return (
        <div className="h-screen w-[15%] bg-[#24282d]">
            <div className="flex flex-col items-center w-full p-1 h-1/5">
                <img src={navimg} alt="img" className="h-20 w-20 m-6" />
            </div>



            <div className="h-3/5 flex flex-col justify-center">
                <ul className="flex flex-col items-center">
                    {navdata.map((item, index) => (
                        <li className="h-full w-full flex justify-center items-center" key={index}>
                            <NavLink to={item.link}
                                // className='rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]'
                                className={({ isActive }) => {
                                    return ('rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b] '
                                        +
                                        ((isActive) ? ' bg-[#1a1b1b]' : ' bg-[#24282d]')
                                    )
                                }}
                            >
                                <FontAwesomeIcon icon={item.icon} className='h-8 w-8 text-[#eeeeee]' />
                                <p className="pl-3 text-[#eeeeee]">{item.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}