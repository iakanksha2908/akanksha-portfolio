import React, { useRef } from 'react';
import Home from "./components/Home";
import WhatIDo from "./components/WhatIDo";
import Navbar from './components/UI/Navbar';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {

  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="scroll-smooth bg-[#eaf3fb] text-black dark:bg-[#0F172A] dark:text-white min-h-screen transition-colors duration-300">
       <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-2 bg-[#eaf3fb] dark:bg-[#0F172A]">
        <div className="text-4xl font-bold font-lovelight">&lt; Akanksha Pawar /&gt;</div>
        <Navbar scrollToSkills={scrollToSkills} />
      </header>
      <Home scrollToSkills={scrollToSkills} />
      <div ref={skillsRef}>
        <WhatIDo /></div>
        <Experiences/>
        <Education/>

    </div>
  );
}

export default App;
