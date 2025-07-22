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
        <div className={`relative rounded-xl p-6 m-4 w-full max-w-[360px] sm:max-w-[400px] 
        bg-white/10 backdrop-blur-md border border-white/10 shadow-md 
        hover:scale-105 hover:shadow-xl transition duration-300 flex flex-col items-center`}>
            
            {/* Header */}
            <div className={`w-full text-center text-white rounded-t-lg p-8 sm:p-10 text-xl sm:text-2xl font-bold h-32 sm:h-36 
            ${color}/40 backdrop-blur-md border-b border-white/10`}>
                {company}
            </div>

            {/* Logo */}
            <div className='absolute top-[6.5rem] sm:top-[8rem]'>
                <img 
                    src={logo} 
                    alt={`${company} logo`} 
                    className='rounded-full w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gray-300 hover:scale-125 transition duration-300' 
                />
            </div>

            {/* Body */}
            <div className='flex flex-col items-center justify-start pt-24 flex-grow w-full text-center'>
                <h3 className='text-lg sm:text-xl font-semibold text-black dark:text-white'>{role}</h3>
                <p className='text-base sm:text-lg text-black dark:text-white mb-4'>{date}</p>
                <ul className='text-left text-sm sm:text-[15px] leading-[20px] sm:leading-[22px] text-black dark:text-white px-4 space-y-1'>
                    {points.map((point, index) => (
                        <li key={index}>🚀 {point}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard
