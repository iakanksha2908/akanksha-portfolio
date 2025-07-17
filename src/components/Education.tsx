import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react';



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
      <h3 className='text-black dark:text-white text-5xl font-semibold text-left m-10 ml-20'>Education</h3>
      <div>
        <div className='ml-20 flex'>
          <img src="src\assets\neu.png" className='rounded-full w-20 h-20' />
          <div className='ml-10 mt-2'>
            <h3 className='font-semibold text-md'>Northeastern University</h3>
            <p>Master of Science in Computer Software Engineering</p>
            <p>January 2022 - May 2024</p>
            <ul className='list-disc list-inside text-gray-400'><li>Coursework: </li></ul>
          </div>
        </div>
        <hr className='m-2 w-1/2' />
        <div className='ml-20 flex mt-4'>
          <img src="src\assets\davv.jpg" className='rounded-full w-20 h-20' />
          <div className='ml-10 mt-2'>
            <h3 className='font-semibold text-md'>Devi Ahilya Vishwavidhyalaya</h3>
            <p>Master of Technology in Information Technology</p>
            <p>January 2022 - May 2024</p>
            <ul className='list-disc list-inside text-gray-400'><li>Coursework: </li></ul>
          </div>
        </div>
        <hr className='m-2 w-1/2' />
        <div className='ml-20 flex mt-4'>
          <img src="src\assets\Oracle_Professional_Badge_final.avif" className='rounded-full w-20 h-27' />
          <div className='ml-10 mt-2'>
            <h3 className='font-semibold text-md'>Oracle Certified Associate, Java SE 8 Programmer</h3>
            <p>December 2024</p>
            {/* <ul className='list-disc list-inside text-gray-400'><li>Coursework: </li></ul> */}
          </div>
        </div>
      </div>


    </div>

  )
}

export default Education