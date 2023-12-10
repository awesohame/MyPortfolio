import './Skills.css';
import skilllist from '../assets/skilllist';

export default function Skills() {
    return (
        <div className='w-full h-screen grow-1 flex justify-center'>
            <div className='w-[85%] h-full'>
                {skilllist.map((skill) => (
                    <div className="border-y-2 border-[#24282d] h-1/3 flex items-center" key={skill.id}>
                        <div className="border-r-2 border-[#ffc54d] h-[85%] w-1/5 flex justify-center items-center">
                            <p className='text-2xl text-center text-[#eeeeee]'>{skill.title}</p>
                        </div>
                        <div className='w-4/5 h-[85%] flex justify-evenly items-center flex-wrap'>
                            {skill.images.map((image, index) => (
                                <img className='h-[40%] mx-6' src={image} key={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}