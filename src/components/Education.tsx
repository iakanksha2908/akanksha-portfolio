import React, { useEffect, useRef } from 'react'
import neu from '@/assets/neu.png'
import davv from '@/assets/davv.jpg'
import oracle from '@/assets/Oracle_Professional_Badge_final.avif'

const Education = () => {

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (window.VANTA && vantaRef.current) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 300.00,
        minWidth: 600.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x952742,
        backgroundColor: 0x0,
        maxDistance: 21.00,
        spacing: 12.00
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div>
      <h3 className='text-black dark:text-white text-3xl sm:text-5xl font-semibold text-center sm:text-left px-6 sm:ml-20 mt-10'>Education</h3>
      <div className='flex flex-col gap-6 px-6 sm:px-20 mt-8'>

        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <img src={neu} className='rounded-full w-20 h-20' />
          <div className='text-center sm:text-left'>
            <h3 className='font-semibold text-lg sm:text-xl'>Northeastern University</h3>
            <p className='text-base'>Master of Science in Computer Software Engineering</p>
            <p className='text-sm text-gray-400'>January 2022 - May 2024</p>
          </div>
        </div>

        <hr className='w-full sm:w-1/2 mx-auto' />

        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <img src={davv} className='rounded-full w-20 h-20' />
          <div className='text-center sm:text-left'>
            <h3 className='font-semibold text-lg sm:text-xl'>Devi Ahilya Vishwavidhyalaya</h3>
            <p className='text-base'>Master of Technology in Information Technology</p>
            <p className='text-sm text-gray-400'>July 2019 - Dec 2019</p>
          </div>
        </div>

        <hr className='w-full sm:w-1/2 mx-auto' />

        <div className='flex flex-col sm:flex-row items-center gap-6'>
          <img src={oracle} className='rounded-full w-20 h-20' />
          <div className='text-center sm:text-left'>
            <h3 className='font-semibold text-lg sm:text-xl'>Oracle Certified Associate, Java SE 8 Programmer</h3>
            <p className='text-sm text-gray-400'>December 2024</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education
