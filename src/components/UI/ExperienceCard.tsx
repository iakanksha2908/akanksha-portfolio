import React, { useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";


interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  points: string[];
  logo: string;
  color: string; 
  skills: string[]// optional, can be ignored or used later
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  date,
  points,
  skills
}) => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  return (
    <div
      className='relative group rounded-3xl p-6 sm:p-8 m-4 w-full max-w-[500px]
                 bg-[#020617]
                 border border-indigo-900/60
                 shadow-[0_0_35px_rgba(15,23,42,0.9)]
                 hover:border-indigo-500/80
                 hover:shadow-[0_0_45px_rgba(67,97,238,0.55)]
                 hover:scale-[1.04] hover:-translate-y-2
                 transform-gpu
                 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                 overflow-hidden cursor-none'
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Glow trail following mouse */}
      {showGlow && (
        <div
          className='absolute z-10 w-32 h-32 rounded-full opacity-30
                     bg-indigo-500 blur-3xl pointer-events-none
                     transition-all duration-300'
          style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
        />
      )}

      {/* Date row */}
      <div className='relative z-20 flex items-center gap-2 text-xs sm:text-sm mb-4 text-indigo-200'>
        <CiCalendar className="text-indigo-300" size={18} />
        <span>{date}</span>
      </div>

      {/* Company / Role */}
      <div className='relative z-20 text-center mb-4'>
        <h3 className='text-lg sm:text-2xl font-bold text-slate-50'>
          <span
            className='relative inline-block 
                       after:absolute after:left-0 after:bottom-[-6px]
                       after:h-[2px] after:w-0
                       after:bg-indigo-400
                       after:transition-all after:duration-500 after:ease-out
                       group-hover:after:w-full'>
            {company}
          </span>
        </h3>
        {/* {role && (
          <p className='mt-1 text-xs sm:text-sm text-indigo-200/80'>
            {role}
          </p>
        )} */}
      </div>

      {/* Experience Points */}
      <ul className='relative z-20 mt-4 space-y-2 text-left'>
        {points.map((point, index) => (
          <li key={index} className='flex items-start gap-2'>
            <span
              className='mt-[2px] text-indigo-400 text-sm sm:text-base
                         drop-shadow-[0_0_8px_#4361EE]
                         transition-transform duration-300
                         group-hover:scale-110'>
              ⌬
            </span>
            <span className='text-[13px] sm:text-sm leading-relaxed text-slate-100'>
              {point}
            </span>
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap gap-2 mt-4'>
              {skills.map((skill, index) => (
                <div key={index} className='flex items-center gap-1 rounded-3xl border border-white/20 px-3 py-1 text-xs sm:text-sm bg-indigo-600/30 font-semibold dark:text-white'>
                  <FaTag /> {skill}
                </div>
              ))}
            </div>
    </div>
  );
};

export default ExperienceCard;
