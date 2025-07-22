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

const Home: React.FC<HomeProps> = ({ scrollToContact }) => {
  return (
    <div className="text-gray-800 dark:text-gray-300 h-auto">
      <div className="flex flex-col-reverse sm:flex-row mt-0">

        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-start px-6 sm:px-16 py-10 sm:pt-28">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 flex items-center gap-2 font-tomorrow dark:text-white text-center sm:text-left">
            Hi, I'm Akanksha
            <img className="inline-block animate-wave origin-[70%_70%]" src={goodbye} width="40px" height="40px" />
          </h1>
          <p className="text-lg sm:text-2xl font-semibold tracking-wide text-center sm:text-left leading-relaxed">
            - Software Engineer passionate about backend systems, scalable APIs, and AI/ML. I love transforming ideas into high-impact products while focusing on clean code, learning, and solving meaningful problems.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-start pt-10 sm:pt-24 px-6 sm:px-8">
          <img
            src={profile}
            className="rounded-full w-36 h-36 sm:w-48 sm:h-48 mb-4 glow-border"
            alt="Akanksha"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold font-ballet text-center">Akanksha Pawar</h2>
          <p className="text-lg sm:text-xl font-semibold text-center">Software Engineer | Full-Stack Engineer | AI/ML</p>

          <span className='mt-4 flex gap-4 flex-wrap justify-center'>
            <a href="https://www.linkedin.com/in/akanksha-pawar-neu/" target="_blank"><img src={linkedin} width="40" /></a>
            <a href="https://github.com/iakanksha2908" target="_blank"><FaGithub size={40} /></a>
            <a href="mailto:akankshapawar25@gmail.com" target="_blank"><img src={gmail} width="40" /></a>
            <a href="https://leetcode.com/u/iakanksha290896/" target="_blank"><SiLeetcode size={40} /></a>
          </span>

          <span className='flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center sm:justify-start'>
            <button
              className="px-6 py-2 rounded-md bg-teal-600/30 text-black dark:text-white border border-teal-300/20 backdrop-blur-md shadow-lg hover:bg-teal-400/30 hover:shadow-xl hover:scale-105 transition duration-300 font-semibold"
              onClick={() => scrollToContact()}>Get in touch</button>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-2 rounded-md bg-teal-600/30 text-black dark:text-white border border-teal-300/20 backdrop-blur-md shadow-lg hover:bg-teal-400/30 hover:shadow-xl hover:scale-105 transition duration-300 font-semibold">
                View Resume
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
