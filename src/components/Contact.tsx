import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com'
import emailAnimation from '../assets/animations/email.json';
import Lottie from 'lottie-react';
import linkedin from '@/assets/linkedin.png'
import gmail from '@/assets/gmail.png'

const Contact = ({ currentTheme }: { currentTheme: string }) => {

    const form = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current || email.length === 0) return;
        emailjs.sendForm(serviceId, templateId, form.current, user_key).then(() => {
            alert('Message Sent!');
            setName(''); setEmail(''); setSubject(''); setMessage('');
        }).catch((error) => {
            alert("Failed to send: " + error.text)
        })
    }

    return (
        <div className='flex flex-col space-y-8 px-4 mt-8'>
            <div className='flex flex-col items-center space-y-4'>
                <h2 className="text-3xl sm:text-4xl font-bold text-center">Get in <span className="text-teal-500">Touch</span></h2>
                <p className='font-semibold max-w-[500px] text-center text-sm sm:text-md'>Have a question or want to work together? I'd love to hear from you.</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 px-4'>

                <div className='flex flex-col gap-4 w-full max-w-md'>
                    <p className="text-teal-500 font-semibold text-lg">Connect with Me</p>
                    <div className='flex gap-4'>
                        <a href="https://www.linkedin.com/in/akanksha-pawar-neu/" target="_blank"><img src={linkedin} width="30" /></a>
                        <a href="https://github.com/iakanksha2908" target="_blank"><FaGithub size={30} /></a>
                        <a href="mailto:akankshapawar25@gmail.com" target="_blank"><img src={gmail} width="30" /></a>
                    </div>
                    <p className='font-semibold text-sm'>Follow me on social media or send me an email.</p>
                    <Lottie animationData={emailAnimation} loop autoplay className='w-60 mx-auto lg:mx-0' />
                </div>

                <div className='w-full max-w-md p-6 rounded-xl bg-gray-600/5 dark:bg-[#131d35] border-2 border-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300'>
                    <form ref={form} onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                        <div>
                            <h3 className='font-semibold mb-1'>Name:</h3>
                            <input type="text" value={name} placeholder="Your Name" className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <h3 className='font-semibold mb-1'>Email:</h3>
                            <input type="email" value={email} placeholder="your.email@example.com" className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <h3 className='font-semibold mb-1'>Subject:</h3>
                            <input type="text" value={subject} placeholder="What's it about?" className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900" onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div>
                            <h3 className='font-semibold mb-1'>Message:</h3>
                            <textarea value={message} placeholder="Your message" className="p-2 border rounded-lg w-full h-32 bg-gray-600/5 dark:bg-gray-900" onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button type="submit" className="px-6 py-2 rounded-md bg-teal-600/30 text-black dark:text-white border border-teal-300/20 backdrop-blur-md shadow-lg hover:bg-teal-400/30 hover:shadow-xl hover:scale-105 transition duration-300 font-semibold w-full">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
