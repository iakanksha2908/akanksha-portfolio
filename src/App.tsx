import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import Home from "./components/Home";
import WhatIDo from "./components/WhatIDo";
import Navbar from './components/UI/Navbar';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/UI/ScrollToTop';
import PortfolioLoader from './components/UI/PortfolioLoader';
import DotGridBackground from "./DotGridBackground"; // ✨ new import

function App() {

  const skillsRef = useRef<HTMLDivElement>(null);
  const workExRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToWorkEx = () => workExRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToEducation = () => educationRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  const [currentTheme, setCurrentTheme] = useState<string>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <PortfolioLoader onLoadComplete={() => setIsLoading(false)} duration={3000} />
      ) : (
        <div className="relative overflow-hidden z-0 scroll-smooth bg-[#eaf3fb] text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300 perspective-1000">

          {/* ✨ Animated Dotted Background (Dark Mode Only) */}
          {/* <div className="absolute inset-0 hidden dark:block opacity-40 transition-opacity duration-700">
            <DotGridBackground />
          </div> */}

          {/* ✅ Navbar */}
          <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-2 bg-[#eaf3fb] dark:bg-black">
            <div
              className="text-4xl font-bold font-lovelight cursor-pointer"
              onClick={() => setIsLoading(true)}
            >
              &lt; Akanksha Pawar /&gt;
            </div>
            <Navbar
              scrollToSkills={scrollToSkills}
              scrollToWorkEx={scrollToWorkEx}
              scrollToEducation={scrollToEducation}
              scrollToProjects={scrollToProjects}
              scrollToContact={scrollToContact}
            />
          </header>

          {/* ✅ Home (Vanta background section) */}
          <div id="vanta-bg" className="relative z-0">
            <Home scrollToContact={scrollToContact} />
          </div>

          {/* ✅ All Other Sections */}
          <div className="relative z-10">
            <motion.div
              ref={skillsRef}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ amount: 0.3 }}
            >
              <WhatIDo />
            </motion.div>

            <div ref={workExRef}>
              <Experiences />
            </div>

            <motion.div
              ref={educationRef}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ amount: 0.3 }}
            >
              <Education />
            </motion.div>

            <div ref={projectRef}>
              <Projects />
            </div>

            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ amount: 0.3 }}
            >
              <Contact currentTheme={currentTheme} />
            </motion.div>
          </div>

          {/* ✅ Scroll to Top Button */}
          <div className="fixed bottom-4 right-4 z-50">
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
