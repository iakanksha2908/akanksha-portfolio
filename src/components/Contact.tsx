import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com'
import emailAnimation from '../assets/animations/email.json';
import Lottie from 'lottie-react';
import linkedin from '@/assets/linkedin.png'
import gmail from '@/assets/gmail.png'


const Contact = ({ currentTheme }: { currentTheme: string }) => {

    const darkBgColor = 0x0f172a;
    const lightBgColor = 0xeaf3fb;
    const form = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(serviceId, templateId, user_key);
        if (!form.current) return;
        if (email.length === 0)
            return;
        emailjs.sendForm(serviceId, templateId, form.current, user_key).then(() => {
            alert('Message Sent!');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }).catch((error) => {
            alert("Failed to send: " + error.text)
        })

    }

    useEffect(() => {
        if (window.VANTA && vantaRef.current) {
            if (currentTheme === 'dark') {
                vantaEffect.current = window.VANTA.NET({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x952742,
                    backgroundColor: 0x0,
                    maxDistance: 21.00,
                    spacing: 12.00
                });
            }
            else {
                if (vantaEffect.current) vantaEffect.current.destroy();
                vantaEffect.current = null;
                vantaRef.current?.removeAttribute('style');
            }
        }

        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy();
            vantaEffect.current = null;
        };
    }, [currentTheme]);


    return (
        <div ref={vantaRef} className='flex flex-col mt-8 space-y-8 px-4'>

            {/* Heading Centered */}
            <div className='flex flex-col items-center space-y-4'>
                <h2 className="text-4xl font-bold">
                    Get in <span className="text-teal-500">Touch</span>
                </h2>
                <p className='font-semibold max-w-[500px] text-center text-md'>
                    Have a question or want to work together? I'd love to hear from you.
                </p>
            </div>

            {/* Connect with Me Left Aligned */}
            <div className='flex'>
                <div className='w-[80%] mx-auto flex flex-col items-start space-y-4 ml-60'>
                    <p className="text-teal-500 font-semibold text-lg">Connect with Me</p>
                    <div className='flex gap-4'><a href="https://www.linkedin.com/in/akanksha-pawar-neu/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={linkedin}
                            width="20px"
                            height="20px"
                            className="hover:scale-125 transition duration-300"
                            alt="LinkedIn"
                        />
                    </a>
                        <a href="https://github.com/iakanksha2908" target="_blank" rel="noopener noreferrer" ><FaGithub size='20' className='hover:scale-125 transition duration-300' /></a>
                        <a href="mailto:akankshapawar25@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} width="20px" height="20px" className='hover:scale-125 transition duration-300' /></a>
                    </div><p className='font-semibold text-md'>Follow me on social media or send me an email.</p>
                    <Lottie animationData={emailAnimation} loop autoplay style={{ width: 300, height: 300 }} className=' hover:scale-110 transition duration-300 mt-16' />
                </div>
                {/* <div> */}
                {/* <Lottie animationData={emailAnimation} loop autoplay style={{ width: 300, height: 300 }} className=' hover:scale-110 transition duration-300 mt-16' /> */}
                {/* </div> */}

                {/* connect form */}
                <div className='w-[60%] rounded-xl mx-auto flex flex-col items-start space-y-4  p-4 mr-32 bg-gray-600/5 dark:bg-[#131d35] mb-24 border-2 border-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300'>

                    <form ref={form} className='w-full flex flex-col space-y-4  ' onSubmit={handleSubmit}>

                        <div className='w-full'>
                            <h3 className='mb-1 mt-2 font-semibold'>Name:</h3>
                            <input
                                type="text"
                                placeholder="Your Name" value={name}
                                className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900 mt-2"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className='w-full'>
                            <h3 className='mb-1 mt-2 font-semibold'>Email:</h3>
                            <input
                                type="email" value={email}
                                placeholder="your.email@example.com"
                                className="p-2 border rounded-md w-full mt-2 bg-gray-600/5 dark:bg-gray-900"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='w-full'>
                            <h3 className='mb-1 mt-2' font-semibold>Subject:</h3>
                            <input
                                type="text"
                                placeholder="What's it about?" value={subject}
                                className="p-2 border rounded-md w-full mt-2 bg-gray-600/5 dark:bg-gray-900"
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <h3 className='mb-1 mt-2' font-semibold>Message</h3>
                            <textarea
                                value={message}
                                placeholder="your message"
                                className="p-2 border rounded-lg w-full mt-2 h-40 bg-gray-600/5 dark:bg-gray-900" onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" mt-10 px-6 py-2 rounded-md
  bg-teal-600/30 text-black dark:text-white 
  border border-teal-300/20 
  backdrop-blur-md shadow-lg
  hover:bg-teal-400/30 hover:shadow-xl
  hover:scale-105 transition duration-300 font-semibold w-full
  "
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div></div>


        </div>
    )
}

export default Contact
