import React, { useState, useEffect } from 'react';
import Theme from './Theme';

interface NavbarProps {
    scrollToSkills: () => void;
    scrollToWorkEx: () => void;
    scrollToEducation: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSkills, scrollToWorkEx, scrollToEducation, scrollToProjects, scrollToContact }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenuAndScroll = (scrollFunc: () => void) => {
        scrollFunc();
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className="text-black dark:text-white py-4 px-4 flex justify-between items-center sticky top-0 bg-white/20 dark:bg-black backdrop-blur-md z-50">
            
            {/* Logo/Brand - Always visible */}
            {/* <div className="text-xl lg:text-2xl font-bold">
                <span className="bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    &lt;Akanksha Pawar /&gt;
                </span>
            </div> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-base lg:text-xl font-semibold items-center">
                <button className="hover:text-pink-300 transition-colors duration-200" onClick={() => scrollToSkills()}>Skills</button>
                <button className="hover:text-pink-300 transition-colors duration-200" onClick={() => scrollToWorkEx()}>Work Experience</button>
                <button className="hover:text-pink-300 transition-colors duration-200" onClick={() => scrollToEducation()}>Education</button>
                <button className="hover:text-pink-300 transition-colors duration-200" onClick={() => scrollToProjects()}>Projects</button>
                <button className="hover:text-pink-300 transition-colors duration-200" onClick={() => scrollToContact()}>Contact</button>
                <Theme />
            </div>

            {/* Mobile Menu Toggle and Theme */}
            <div className="md:hidden flex items-center gap-3 rounded-lg w-auto">
                <Theme />
                <button onClick={toggleMenu} className="focus:outline-none p-2">
                    <div className={`space-y-1 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                        <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={toggleMenu}></div>
                    
                    {/* Drawer */}
                    <div className="fixed top-0 right-0 w-80 max-w-[80vw] h-screen bg-white dark:bg-[#0F172A] flex flex-col gap-6 px-8 py-10 text-left text-lg font-semibold z-[9999] shadow-2xl transform transition-transform duration-300">
                        <button 
                            onClick={toggleMenu} 
                            className="absolute top-4 right-6 text-3xl hover:text-pink-300 transition-colors"
                        >
                            ×
                        </button>
                        
                        <div className="mt-8">
                            <button className="w-full text-left py-3 hover:text-pink-300 transition-colors border-b border-gray-200 dark:border-gray-700" onClick={() => closeMenuAndScroll(scrollToSkills)}>
                                Skills
                            </button>
                            <button className="w-full text-left py-3 hover:text-pink-300 transition-colors border-b border-gray-200 dark:border-gray-700" onClick={() => closeMenuAndScroll(scrollToWorkEx)}>
                                Work Experience
                            </button>
                            <button className="w-full text-left py-3 hover:text-pink-300 transition-colors border-b border-gray-200 dark:border-gray-700" onClick={() => closeMenuAndScroll(scrollToEducation)}>
                                Education
                            </button>
                            <button className="w-full text-left py-3 hover:text-pink-300 transition-colors border-b border-gray-200 dark:border-gray-700" onClick={() => closeMenuAndScroll(scrollToProjects)}>
                                Projects
                            </button>
                            <button className="w-full text-left py-3 hover:text-pink-300 transition-colors" onClick={() => closeMenuAndScroll(scrollToContact)}>
                                Contact
                            </button>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;