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
const Project: React.FC<ProjectProps> = ({ name, desc, date, tech, points }) => {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showGlow, setShowGlow] = useState(false);

  return (
    <div className='relative group rounded-xl p-6 m-4 w-[450px] bg-gray-600/5 dark:bg-[#0f172a] border border-white/10 overflow-hidden cursor-none' onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }}

      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Glow */}
      {showGlow && (
        <div
          className='absolute z-10 w-32 h-32 rounded-full opacity-30 bg-cyan-400 dark:bg-cyan-400 blur-3xl pointer-events-none'
          style={{
            top: mousePos.y - 64,
            left: mousePos.x - 64
          }}
        />
      )}
      <div className='relative z-20 text-left flex gap-1'><CiCalendar size={20} />{date}</div>
      <div className='relative mt-2 z-20 text-center  text-black dark:text-white rounded-lg p-10 text-2xl font-bold h-24 shadow-lg'>
        <span className='relative inline-block after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-500 after:ease-out group-hover:after:w-full'>
          {name}</span></div>
      <div>
        <img src="" alt='' />
      </div>
      <p className='relative z-20 text-left text-lg mt-4'>{desc}</p>
      <div className='flex gap-4 mt-2 flex-wrap'>{tech.map((tec, index) => (
        <div className='w-auto rounded-3xl border border-white/20 px-4 py-2 text-sm bg-teal-600/30 font-semibold dark:text-white transition-all duration-200 mt-2 flex whitespace-nowrap items-center justify-center gap-1'><FaTag />{tec}</div>
      ))}</div>
    </div >
  )
}

export default Project