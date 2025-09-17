import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import emailAnimation from '../assets/animations/email.json';
import Lottie from 'lottie-react';
import linkedin from '@/assets/linkedin.png';
import gmail from '@/assets/gmail.png';

const Contact = ({ currentTheme }: { currentTheme: string }) => {
  const form = useRef<HTMLFormElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  // Toast state (success/error)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  useEffect(() => {
    emailjs.init(publicKey);
  }, [publicKey]);

  useEffect(() => {
    if (window.VANTA && vantaRef.current) {
      if (currentTheme === 'dark') {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x952742,
          backgroundColor: 0x0,
          maxDistance: 21.0,
          spacing: 12.0,
        });
      } else {
        if (vantaEffect.current) vantaEffect.current.destroy();
        vantaEffect.current = null;
        vantaRef.current?.removeAttribute('style');
      }
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [currentTheme]);

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setToast({ type: 'error', text: 'Please fill out all fields.' });
      return;
    }

    try {
      setSending(true);

      // Pass variables explicitly; template must reference same keys
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,                  // used as Reply-To in template
          subject,
          message,
          to_email: 'akankshapawar25@gmail.com', // optional if To is hardcoded in template
        }
      );

      // Clear once on success
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setToast({ type: 'success', text: 'Thanks! Your message has been sent.' });
    } catch (err: any) {
      setToast({
        type: 'error',
        text: `Failed to send. ${err?.text || 'Please try again.'}`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={vantaRef} className="flex flex-col space-y-8 px-4 mt-8">
      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 right-6 z-50 rounded-lg px-4 py-3 shadow-xl backdrop-blur-md border
            ${toast.type === 'success'
              ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-200'
              : 'bg-rose-500/15 border-rose-400/30 text-rose-200'
            }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold">
              {toast.type === 'success' ? 'Success' : 'Error'}
            </span>
            <p className="text-sm opacity-90">{toast.text}</p>
            <button
              aria-label="Dismiss"
              className="ml-2 text-xs underline opacity-70 hover:opacity-100"
              onClick={() => setToast(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Get in <span className="text-teal-500">Touch</span>
        </h2>
        <p className="font-semibold max-w-[500px] text-center text-sm sm:text-md">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 px-4">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <p className="text-teal-500 font-semibold text-lg">Connect with Me</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/akanksha-pawar-neu/" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <img src={linkedin} width="30" />
            </a>
            <a href="https://github.com/iakanksha2908" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <FaGithub size={30} />
            </a>
            <a href="mailto:akankshapawar25@gmail.com" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <img src={gmail} width="30" />
            </a>
          </div>
          <p className="font-semibold text-sm">Follow me on social media or send me an email.</p>
          <Lottie animationData={emailAnimation} loop autoplay className="w-60 mx-auto lg:mx-0" />
        </div>

        <div className="w-full max-w-md p-6 rounded-xl bg-gray-600/5 dark:bg-[#131d35] border-2 border-white/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col space-y-4" noValidate>
            <div>
              <h3 className="font-semibold mb-1">Name:</h3>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900"
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email:</h3>
              <input
                type="email"
                value={email}
                placeholder="your.email@example.com"
                className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Subject:</h3>
              <input
                type="text"
                value={subject}
                placeholder="What's it about?"
                className="p-2 border rounded-lg w-full bg-gray-600/5 dark:bg-gray-900"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Message:</h3>
              <textarea
                value={message}
                placeholder="Your message"
                className="p-2 border rounded-lg w-full h-32 bg-gray-600/5 dark:bg-gray-900"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="px-6 py-2 rounded-md bg-teal-600/30 text-black dark:text-white border border-teal-300/20 backdrop-blur-md shadow-lg hover:bg-teal-400/30 hover:shadow-xl hover:scale-105 transition duration-300 font-semibold w-full disabled:opacity-50 disabled:hover:scale-100"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>

            <div className="h-5" aria-live="polite">
              {sending && <span className="text-xs opacity-70">Hang on, sending…</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
