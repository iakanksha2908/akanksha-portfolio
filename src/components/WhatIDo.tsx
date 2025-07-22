import React from 'react';
import { LiaJava } from "react-icons/lia";
import { FaAngular, FaReact, FaAws, FaSass, FaPython, FaNode, FaDocker } from "react-icons/fa";
import Lottie from 'lottie-react';
import devAnimation from '../assets/animations/dev.json';
import { SiMysql, SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const WhatIDo = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row mt-28 px-6 lg:px-20'>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <Lottie animationData={devAnimation} loop autoplay className='w-[280px] sm:w-[400px] lg:w-[550px] hover:scale-110 transition duration-300 mt-10' />
            </div>
            <div className='w-full lg:w-1/2'>
                <h3 className='text-black dark:text-white text-3xl sm:text-5xl font-semibold text-center lg:text-left'>What I Bring To The Table</h3>
                <p className='text-gray dark:text-gray-300 text-base sm:text-xl mt-8 sm:mt-12 text-center lg:text-left tracking-wide leading-relaxed'>🚀 A passionate full-stack developer with a strong foundation in backend engineering and a growing expertise in AI — focused on building scalable, resilient, and meaningful tech solutions that make a real impact.</p>
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 mt-8'>
                    {[LiaJava, FaAngular, FaReact, FaSass, FaPython, FaNode, FaDocker, SiMysql, IoLogoJavascript, FaAws, SiFastapi].map((Icon, index) => (
                        <Icon key={index} size={50} className='dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-125 transition duration-300' />
                    ))}
                </div>
                <div className="space-y-6 mt-8 pb-32">
                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">💻 Frontend Engineering</h4>
                        <p className="mt-2 text-black dark:text-white text-base sm:text-lg">Delivered responsive dashboards with React & Angular — reducing user friction and boosting engagement by 35%.</p>
                    </div>
                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">📈 Scalable Backend Systems</h4>
                        <p className="mt-2 text-black dark:text-white text-base sm:text-lg">Engineered backend microservices using FastAPI, Spring Boot, AWS & GCP — scaled to 1M+ users, improving responsiveness by 60%.</p>
                    </div>
                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">🤖 AI + GenAI Integration</h4>
                        <p className="mt-2 text-black dark:text-white text-base sm:text-lg">Integrated GenAI and ML pipelines into APIs, improving task automation 3x and boosting prediction accuracy by 95%.</p>
                    </div>
                    <div className="bg-gray-600/5 dark:bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition duration-300">
                        <h4 className="text-lg font-bold text-black dark:text-white">📊 Data Automation</h4>
                        <p className="mt-2 text-black dark:text-white text-base sm:text-lg">Developed real-time pipelines with Kafka & Spark — cut processing costs by 50% and handled 10M+ events/day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
