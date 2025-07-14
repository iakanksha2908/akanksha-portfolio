import React from 'react';
import { LiaJava } from "react-icons/lia";
import { FaAngular, FaReact, FaAws, FaSass, FaPython, FaNode, FaDocker } from "react-icons/fa";
import Lottie from 'lottie-react';
import devAnimation from '../assets/animations/dev.json';
import { SiMysql, SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";


const WhatIDo = () => {
    return (
        <div className='flex mt-28 '>
            <div className='w-1/2'><Lottie animationData={devAnimation} loop autoplay style={{ width: 600, height: 600 }} className=' hover:scale-110 transition duration-300 mt-16' /></div>
            <div className='w-1/2'>
                <h3 className='text-black dark:text-white text-5xl font-semibold text-left'>What I Bring To The Table</h3>
                <p className=' text-gray dark:text-gray-300 text-xl  mt-12 w-[90%] text-left tracking-wide'>🚀 A passionate full-stack developer with a strong foundation in backend engineering and a growing expertise in AI — focused on building scalable, resilient, and meaningful tech solutions that make a real impact.</p>
                <p className='flex mr-20'>
                    <LiaJava size={70} className=' dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaAngular size={70} className='mt-2 p-2  dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaReact size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaSass size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaPython size={70} className='mt-2 p-2  dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaNode size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaDocker size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <SiMysql size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <IoLogoJavascript size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    <FaAws size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:scale-125 duration-300' />
                    <SiFastapi size={70} className='mt-2 p-2 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                </p>
                <div className="space-y-6 mt-8 pb-32">
                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow w-[90%] hover:scale-110 transition duration-300 backdrop-blur-md border-white/20 hover:shadow-lg">
                        <h4 className="text-lg font-bold text-black dark:text-white">📈 Scalable Backend Systems</h4>
                        <p className="text-black dark:text-white text-lg">Engineered backend microservices using FastAPI, Spring Boot, AWS & GCP — scaled to 1M+ users, improving responsiveness by 60%.</p>
                    </div>

                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow w-[90%] hover:scale-110 transition duration-300">
                        <h4 className="text-lg font-bold  text-black dark:text-white">🤖 AI + GenAI Integration</h4>
                        <p className=" mt-2 text-black dark:text-white text-lg">Integrated GenAI and ML pipelines into APIs, improving task automation 3x and boosting prediction accuracy by 95%.</p>
                    </div>

                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow w-[90%] hover:scale-110 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">💻 Frontend Engineering</h4>
                        <p className="mt-2 text-black dark:text-white text-lg">Delivered responsive dashboards with React & Angular — reducing user friction and boosting engagement by 35%.</p>
                    </div>

                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow w-[90%] hover:scale-110 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">📊 Data Automation</h4>
                        <p className="mt-2 text-black dark:text-white text-lg">Developed real-time pipelines with Kafka & Spark — cut processing costs by 50% and handled 10M+ events/day.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatIDo;
