import React, { useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  points: string[];
  logo: string;
  color: "indigo" | "yellow" | "red"; // jo-jo colors use karne ho yahan add karo
  skills: string[];
}

// Tailwind-friendly mapping – yahan JIT ko exact classes dikh rahi hain
const colorClasses = {
  indigo: {
    borderDark: "dark:border-indigo-900/60",
    borderDarkHover: "dark:hover:border-indigo-500/80",
    glowLight: "bg-indigo-800",
    glowDark: "dark:bg-indigo-400",
    textAccent: "text-indigo-600",
    textAccentDark: "dark:text-indigo-400",
    skillBg: "bg-indigo-500/10",
    skillBorderDark: "dark:border-indigo-700",
    skillBgDark: "dark:bg-indigo-600/30",
    skillTextDark: "dark:text-indigo-50",
    skillIcon: "text-indigo-500",
    skillIconDark: "dark:text-indigo-300",
    underlineLight: "after:bg-indigo-500",
    underlineDark: "dark:after:bg-indigo-400",
  },
  yellow: {
    borderDark: "dark:border-amber-900/60",
    borderDarkHover: "dark:hover:border-amber-500/80",
    glowLight: "bg-amber-700",
    glowDark: "dark:bg-amber-400",
    textAccent: "text-amber-600",
    textAccentDark: "dark:text-amber-400",
    skillBg: "bg-amber-700/10",
    skillBorderDark: "dark:border-amber-700",
    skillBgDark: "dark:bg-amber-600/30",
    skillTextDark: "dark:text-amber-50",
    skillIcon: "text-amber-500",
    skillIconDark: "dark:text-amber-300",
    underlineLight: "after:bg-amber-500",
    underlineDark: "dark:after:bg-amber-400",
  },

  red: {
    borderDark: "dark:border-rose-900/60",
    borderDarkHover: "dark:hover:border-rose-500/80",
    glowLight: "bg-rose-800",
    glowDark: "dark:bg-rose-400",
    textAccent: "text-rose-600",
    textAccentDark: "dark:text-rose-400",
    skillBg: "bg-rose-700/10",
    skillBorderDark: "dark:border-rose-700",
    skillBgDark: "dark:bg-rose-600/30",
    skillTextDark: "dark:text-rose-50",
    skillIcon: "text-rose-500",
    skillIconDark: "dark:text-rose-300",
    underlineLight: "after:bg-rose-500",
    underlineDark: "dark:after:bg-rose-400",
  },

} as const;

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  date,
  points,
  skills,
  color,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showGlow, setShowGlow] = useState(false);

  const c = colorClasses[color]; // short alias

  return (
    <div
      className={`
        relative group rounded-3xl p-6 sm:p-8 m-4 w-full max-w-[500px]
        bg-white/80 border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)]
        text-slate-900

        dark:bg-[#020617]
        ${c.borderDark}
        dark:shadow-[0_0_35px_rgba(15,23,42,0.9)]
        dark:text-slate-100

        hover:scale-[1.02] hover:-translate-y-1
        ${c.borderDarkHover}
        dark:hover:shadow-[0_0_45px_rgba(67,97,238,0.55)]

        transform-gpu
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        overflow-hidden
      `}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* Glow trail – subtle in light, stronger in dark */}
      {showGlow && (
        <div
          className={`
            absolute z-10 w-32 h-32 rounded-full pointer-events-none
            opacity-10 ${c.glowLight} blur-xl
            dark:opacity-30 ${c.skillIcon}
          `}
          style={{ top: mousePos.y - 64, left: mousePos.x - 64 }}
        />
      )}

      {/* Date row */}
      <div
        className={`
          relative z-20 flex items-center gap-2 text-base sm:text-base mb-4
          text-slate-500 dark:text-slate-200
        `}
      >
        <CiCalendar
          className={`text-slate-500 ${c.textAccentDark}`}
          size={18} color={c.skillBg}
        />
        <span>{date}</span>
      </div>

      {/* Company */}
      <div className="relative z-20 text-center mb-4">
        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
          <span
            className={`
              relative inline-block 
              after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:w-0
              ${c.underlineLight} ${c.underlineDark}
              after:transition-all after:duration-500 after:ease-out
              group-hover:after:w-full
            `}
          >
            {company}
          </span>
        </h3>
      </div>

      {/* Experience Points */}
      <ul className="relative z-20 mt-4 space-y-2 text-left">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span
              className={`
                mt-[2px] ${c.textAccent} ${c.textAccentDark}
                text-sm sm:text-base
                drop-shadow-[0_0_4px_rgba(13,148,136,0.4)]
                dark:drop-shadow-[0_0_8px_#4361EE]
                transition-transform duration-300
                group-hover:scale-110
              `}
            >
              ⌬
            </span>
            <span className="text-[13px] sm:text-sm leading-relaxed text-slate-800 dark:text-slate-100">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      <div className="relative z-20 flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              flex items-center gap-1 rounded-3xl px-3 py-1 text-xs sm:text-sm
              border border-slate-200 ${c.skillBg} text-slate-900
              shadow-sm

              ${c.skillBorderDark}
              ${c.skillBgDark}
              ${c.skillTextDark}

              font-semibold
              hover:bg-opacity-80 dark:hover:bg-opacity-60
              transition-all duration-300
            `}
          >
            <FaTag className={`${c.skillIcon} ${c.skillIconDark} text-xs`} />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
