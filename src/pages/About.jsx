import './About.css';

export default function About() {
    return (
        <div className="h-screen w-[85%]">
            <div className="h-full flex flex-col justify-center items-center text-[#1a1b1b]">
                <p className='text-6xl font-extrabold m-3 w-[85%]'>
                    Hi!
                </p>
                <p className='text-6xl m-3 w-[85%]'>
                    I'm <span className='font-black text-[#ffc54d]'>Soham Aversekar</span>
                </p>
                <p className='text-2xl m-3 w-[85%]'>
                    I am an enthusiastic <span className='text-[#ffc54d]'>full stack developer</span> based in <span className='text-[#ffc54d]'>Mumbai, India</span>. I am currently in my second year of BE in Computer Engineering at Thadomal Shahani Engineering College. Committed to creating responsive, user-friendly websites while continuously expanding technical knowledge.<span className='text-[#ffc54d]'> Eager</span> to contribute my <span className='text-[#ffc54d]'>code-crushing skills</span> to an innovative team, I bring a rainbow of <span className='text-[#ffc54d]'>creativity</span> to every project.
                </p>
            </div>
        </div>
    )
}