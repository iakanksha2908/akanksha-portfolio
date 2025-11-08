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
  skills: string[];
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
                 bg-white/80 border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                 text-slate-900

                 dark:bg-[#020617]
                 dark:border-indigo-900/60
                 dark:shadow-[0_0_35px_rgba(15,23,42,0.9)]
                 dark:text-slate-100

                 hover:scale-[1.02] hover:-translate-y-1
                 dark:hover:border-indigo-500/80
                 dark:hover:shadow-[0_0_45px_rgba(67,97,238,0.55)]

                 transform-gpu
                 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                 overflow-hidden'
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Glow trail – subtle in light, stronger in dark */}
      {showGlow && (
        <div
          className='absolute z-10 w-32 h-32 rounded-full pointer-events-none
                     opacity-10 bg-indigo-800 blur-xl
                     dark:opacity-30 dark:bg-indigo-400'
          style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
        />
      )}

      {/* Date row */}
      <div className='relative z-20 flex items-center gap-2 text-base sm:text-base mb-4
                      text-slate-500 dark:text-indigo-200'>
        <CiCalendar className="text-slate-500 dark:text-indigo-300" size={18} />
        <span>{date}</span>
      </div>

      {/* Company */}
      <div className='relative z-20 text-center mb-4'>
        <h3 className='text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-50'>
          <span
            className='relative inline-block 
                       after:absolute after:left-0 after:bottom-[-6px]
                       after:h-[2px] after:w-0
                       after:bg-indigo-500
                       dark:after:bg-indigo-400
                       after:transition-all after:duration-500 after:ease-out
                       group-hover:after:w-full'>
            {company}
          </span>
        </h3>
      </div>

      {/* Experience Points */}
      <ul className='relative z-20 mt-4 space-y-2 text-left'>
        {points.map((point, index) => (
          <li key={index} className='flex items-start gap-2'>
            <span
              className='mt-[2px] text-indigo-600 dark:text-indigo-400
                         text-sm sm:text-base
                         drop-shadow-[0_0_4px_rgba(13,148,136,0.4)]
                         dark:drop-shadow-[0_0_8px_#4361EE]
                         transition-transform duration-300
                         group-hover:scale-110'>
              ⌬
            </span>
            <span className='text-[13px] sm:text-sm leading-relaxed text-slate-800 dark:text-slate-100'>
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className='relative z-20 flex flex-wrap gap-2 mt-4'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex items-center gap-1 rounded-3xl px-3 py-1 text-xs sm:text-sm
                       border border-slate-200 bg-indigo-500/10 text-slate-900
                       shadow-sm

                       dark:border-indigo-400/30
                       dark:bg-indigo-600/30
                       dark:text-indigo-50

                       font-semibold
                       hover:bg-indigo-500/20 dark:hover:bg-indigo-500/40
                       transition-all duration-300'
          >
            <FaTag className='text-slate-700 dark:text-indigo-300 text-xs' />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
