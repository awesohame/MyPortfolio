import './Navbar.css';
import pfpimg from '../assets/borderpfp1.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="h-screen w-1/6 bg-[#24282d]">
            <div className="flex flex-col items-center w-full p-1">
                <img src={pfpimg} alt="img" className="h-40 w-40 m-6" />
            </div>
            <div className="">
                <ul className="flex flex-col items-center">
                    <li className="rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]">
                        <Link to="/" className='h-full w-full flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 576 512"><path fill="#eeeeee" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                            <p className="pl-3 text-[#eeeeee]">Home</p>
                        </Link>

                    </li>

                    <li className="rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]">
                        <Link to="/about" className='h-full w-full flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 512 512"><path fill="#eeeeee" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                            <p className="pl-3 text-[#eeeeee]">About</p>
                        </Link>
                    </li>
                    <li className="rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]">
                        <Link to="/projects" className='h-full w-full flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 576 512"><path fill="#eeeeee" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" /></svg>
                            <p className="pl-3 text-[#eeeeee]">Projects</p>
                        </Link>
                    </li>
                    <li className="rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]">
                        <Link to="/skills" className='h-full w-full flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 512 512"><path fill="#eeeeee" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" /></svg>
                            <p className="pl-3 text-[#eeeeee]">Skills</p>
                        </Link>
                    </li>
                    <li className="rounded-lg text-2xl/10 p-3 m-2 w-3/4 flex items-center hover:bg-[#1a1b1b]">
                        <Link to="/contact" className='h-full w-full flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 512 512"><path fill="#eeeeee" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
                            <p className="pl-3 text-[#eeeeee]">Contact</p>
                        </Link>
                    </li>

                </ul>

            </div>


        </div >
    )
}