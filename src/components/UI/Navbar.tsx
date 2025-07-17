import React, { useState } from 'react';
import Theme from './Theme';


interface NavbarProps {
    scrollToSkills: () => void;
    scrollToWorkEx: () => void;
    scrollToEducation: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
 }


const Navbar: React.FC<NavbarProps> = ({scrollToSkills, scrollToWorkEx, scrollToEducation, scrollToProjects, scrollToContact}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className=" text-black dark:text-white py-4 flex justify-between items-center">


            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-xl">
                <button  className="hover:text-pink-300" onClick={() => {scrollToSkills(); toggleMenu(); }}>Skills</button>
                {/* <a href="#about" className="hover:text-pink-300">Skills</a> */}
                <button  className="hover:text-pink-300" onClick={() => {scrollToWorkEx(); toggleMenu(); }}>Work Experiences</button>
                <button  className="hover:text-pink-300" onClick={() => {scrollToEducation(); toggleMenu(); }}>Education</button>
                <button  className="hover:text-pink-300" onClick={() => {scrollToProjects(); toggleMenu(); }}>Projects</button>
                <button  className="hover:text-pink-300" onClick={() => {scrollToContact(); toggleMenu(); }}>Contact</button>
               
                {/* <a href="#projects" className="hover:text-pink-300">Work Experiences</a> */}
                {/* <a href="#contact" className="hover:text-pink-300">Education</a> */}
                {/* <a href="#contact" className="hover:text-pink-300">Achievements</a> */}
                {/* <a href="#contact" className="hover:text-pink-300">Contact Me</a> */}
                {/* <label
                    htmlFor="AcceptConditions"
                    className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-green-500 dark:bg-gray-600 dark:has-checked:bg-green-600"
                >
                    <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

                    <span
                        className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-gray-900"
                    ></span>
                </label> */}
                <Theme />

            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#0F172A] flex flex-col gap-4 px-6 py-4 text-lg md:hidden z-10">
                    <button onClick={() => {scrollToSkills(); toggleMenu(); }}>Skills</button>
                    {/* <a href="#about" className="hover:text-orange-400" onClick={toggleMenu}>Skills</a> */}
                    <a href="#projects" className="hover:text-orange-400" onClick={toggleMenu}>Work Experiences</a>
                    <a href="#contact" className="hover:text-orange-400" onClick={toggleMenu}>Education</a>
                    <a href="#contact" className="hover:text-orange-400" onClick={toggleMenu}>Achievements</a>
                    <a href="#contact" className="hover:text-orange-400" onClick={toggleMenu}>Contact Me</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
