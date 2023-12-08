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
                    I am an enthusiastic <span className='text-[#ffc54d]'>full stack developer</span> based in <span className='text-[#ffc54d]'>Mumbai, India</span>. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                    <span className='text-[#ffc54d]'> Eager</span> to contribute my <span className='text-[#ffc54d]'>code-crushing skills</span> to an innovative team, I bring a rainbow of <span className='text-[#ffc54d]'>creativity</span> to every project.
                </p>
            </div>
        </div>
    )
}