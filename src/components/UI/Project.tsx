import React, { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";

interface ProjectProps {
  name: string,
  desc: string,
  date: string,
  tech: string[],
  points: string[],
}

const Project: React.FC<ProjectProps> = ({ name, desc, date, tech }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  return (
    <div
      className='relative group rounded-xl p-6 m-4 w-full max-w-[420px] bg-gray-600/5 dark:bg-[#0f172a] border border-white/10 overflow-hidden cursor-none'
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {showGlow && (
        <div
          className='absolute z-10 w-32 h-32 rounded-full opacity-30 bg-cyan-400 dark:bg-cyan-400 blur-3xl pointer-events-none'
          style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
        />
      )}
      <div className='relative z-20 flex gap-1 items-center text-sm sm:text-base mb-2 text-left'><CiCalendar size={18} /> {date}</div>
      <div className='relative z-20 text-center text-lg sm:text-2xl font-bold text-black dark:text-white rounded-lg p-6 sm:p-10 h-auto shadow-lg'>
        <span className='relative inline-block after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-500 after:ease-out group-hover:after:w-full'>
          {name}
        </span>
      </div>
      <p className='relative z-20 text-left text-sm sm:text-lg mt-4 text-black dark:text-white'>{desc}</p>
      <div className='flex flex-wrap gap-2 mt-4'>
        {tech.map((tec, index) => (
          <div key={index} className='flex items-center gap-1 rounded-3xl border border-white/20 px-3 py-1 text-xs sm:text-sm bg-teal-600/30 font-semibold dark:text-white'>
            <FaTag /> {tec}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project
