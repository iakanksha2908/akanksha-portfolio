import React from 'react'

interface ExperienceCardProps {
    company: string;
    role: string;
    date: string;
    points: string[];
    logo: string;
    color: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, date, points, logo, color }) => {
    return (
        <div className={`relative rounded-xl p-6 m-4 w-[100%]
  bg-white/10 backdrop-blur-md border border-white/10 shadow-md
  hover:scale-105 hover:shadow-xl transition duration-300 flex flex-col justify-between items-center text-center`}>
            <div className={`w-full text-center text-white rounded-t-lg p-10 text-2xl font-bold h-36
   ${color}/40 backdrop-blur-md border-b border-white/10`}>
                {company}
            </div>
            <div className='absolute top-[8rem]'>
                <img src={logo} className='rounded-full w-20 h-20 bg-white border-black hover:scale-125' />
            </div>
            <h3 className='text-xl font-semibold mt-12'>{role}</h3>
            <p className='text-lg'>{date}</p>
            <ul className='text-left text-lg mt-4'>
                {points.map((point, index) => (<li key={index}>🚀 {point}</li>))

                }
            </ul>
        </div>
    )
}

export default ExperienceCard