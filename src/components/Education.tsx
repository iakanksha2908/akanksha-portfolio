import React from 'react'
import Lottie from 'lottie-react';

const Education = () => {
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
      </div>
     

    </div>

  )
}

export default Education