import React from 'react';
import Navbar from './UI/Navbar';
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaAnglesUp } from "react-icons/fa6";
import goodbye from "@/assets/goodbye.png";
import profile from "@/assets/profile_photo.jpeg";
import linkedin from "@/assets/linkedin.png";
import gmail from "@/assets/gmail.png";


interface HomeProps {
  scrollToContact: () => void;
  
}

const Home : React.FC<HomeProps>= ({scrollToContact}) => {
  return (
      <div className=" text-gray-800 dark:text-gray-300 h-auto">
      {/* 🔹 Main Section: 2 columns */}
      <div className="flex mt-0">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-start pt-28 px-16">
          {/* your content */}
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 font-tomorrow mt-10 dark:text-white">Hi, I'm Akanksha<img className="inline-block animate-wave origin-[70%_70%]" src={goodbye} width="40px" height="40px" /></h1>
          <p className="text-2xl font-semibold  mt-8 tracking-wide">
            - A curious mind fueled by code and creativity.
            I'm a Software Engineer with a knack for building intelligent, robust backend systems and a growing love for all things AI/ML.
            From designing scalable APIs to experimenting with language models, I enjoy bridging engineering with innovation.
            I believe in clean code, continuous learning, and solving real-world problems with elegance and impact.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col  items-center justify-start pt-24 px-8">
          <img
            src={profile}
            className="rounded-full w-48 h-48  mb-4 glow-border"
            alt="Akanksha"
          />
          <h2 className="text-3xl font-semibold font-ballet">Akanksha Pawar</h2>
          <p className="text-xl font-semibold">Software Engineer | Full-Stack Engineer | AI/ML</p>
          <span className='mt-4 flex gap-4'>
            <a href="https://www.linkedin.com/in/akanksha-pawar-neu/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} width="40px" height="40px" className='hover:scale-125 transition duration-300' /></a>
            <a href="https://github.com/iakanksha2908" target="_blank" rel="noopener noreferrer" ><FaGithub size='40' className='hover:scale-125 transition duration-300' /></a>
            <a href="mailto:akankshapawar25@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} width="40px" height="40px" className='hover:scale-125 transition duration-300' /></a>
            <a href="https://leetcode.com/u/iakanksha290896/" target="_blank" rel="noopener noreferrer"><SiLeetcode size='40' className='hover:scale-125 transition duration-300' /></a>
          </span>
          <span className='flex gap-10'>
            <button className="
  mt-10 px-6 py-2 rounded-md
  bg-teal-600/30 text-black dark:text-white
  border border-teal-300/20 
  backdrop-blur-md shadow-lg
  hover:bg-teal-400/30 hover:shadow-xl
  hover:scale-105 transition duration-300 font-semibold
  " onClick={() => scrollToContact()}> 
              Get in touch</button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="
  mt-10 px-6 py-2 rounded-md
  bg-teal-600/30 text-black dark:text-white 
  border border-teal-300/20 
  backdrop-blur-md shadow-lg
  hover:bg-teal-400/30 hover:shadow-xl
  hover:scale-105 transition duration-300 font-semibold
  ">
                View Resume</button></a>
                
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
