import pfp from '../assets/blackbgborder.png'
import './Home.css';

export default function Home() {
    return (
        <div className="h-screen w-[85%]">
            {/* <div className="border-2 h-3/4 w-full text-6xl flex flex-col justify-center pl-16">
                <p className="m-2">Hi!</p>
                <p className="m-2">I am Soham Aversekar</p>
                <p className="m-2">Full Stack Developer</p>
                <p className="m-2">Welcome to my website!</p>
            </div> */}

            <div className="flex justify-center mt-16 h-3/5">
                <div className="flex justify-between items-center w-4/5">
                    <span className="text-7xl text-[#1a1b1b] font-black">I create <span className="rainbow">playful</span> experiences</span>
                    <img src={pfp} alt="pfp" className="w-[325px]" />
                </div>
            </div>
            <div className="flex justify-center mt-10 h-1/5">
                <span className="text-4xl text-[#1a1b1b] font-bold">Soham Aversekar | Full Stack Developer</span>
            </div>
        </div>
    )
}