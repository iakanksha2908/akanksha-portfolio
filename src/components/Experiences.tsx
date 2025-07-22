import React from 'react'
import ExperienceCard from './UI/ExperienceCard'
import citibankLogo from "@/assets/Citibank-logo.jpg";
import abbottLogo from "@/assets/abbott.png";
import tcsLogo from "@/assets/tcs.png";
import adaniLogo from "@/assets/adani.png";

const Experiences = () => {

    const experiencesArr = [
        {
            "company": "Citibank(Contract)",
            "role": "Software Engineer",
            "date": "Sept 2024 - Present",
            "color": "bg-gradient-to-r from-yellow-600 to-yellow-400",
            "logo": citibankLogo,
            "points": [
                "Revamped React + TypeScript dashboards, cutting load time from 5s → 1.5s.",
                "Built real-time monitoring dashboards with Kafka streams handling 500k+ transactions/hr.",
                "Developed secure OAuth 2.0 flows improving UX by 35% and ensuring accessibility compliance.",
                "Integrated AI-powered fraud dashboards, improving fraud detection accuracy by 95%."
            ]
        },
        {
            "company": "Abbott",
            "role": "Software Engineer",
            "date": "Jan 2023 - July 2023",
            "color": "bg-gradient-to-r from-blue-600 to-blue-400",
            "logo": abbottLogo,
            "points": [
                "Built React dashboards for medical analytics reducing reporting time from 4h → 30min.",
                "Developed Spring Boot REST APIs improving data retrieval by 60%.",
                "Secured dashboards with JWT ensuring HIPAA compliance.",
                "Automated CI/CD using Jenkins & Docker reducing deployment time by 80%."
            ]
        },
        {
            "company": "Tata Consultancy Services",
            "role": "Software Engineer",
            "date": "Dec 2019 - Dec 2021",
            "logo": tcsLogo,
            "color": "bg-gradient-to-r from-teal-600 to-teal-400",
            "points": [
                "Developed 15+ Spring Boot microservices handling 10M+ daily transactions.",
                "Built React/Angular frontends improving load speed by 35%.",
                "Optimized SQL queries across PostgreSQL, Oracle, MongoDB reducing report time by 80%.",
                "Designed CI/CD pipelines across AWS, Azure, GCP automating 50+ monthly deployments."
            ]
        },
        {
            "company": "Adani Group",
            "role": "Software Engineer",
            "date": "June 2019 - Dec 2019",
            "color": "bg-gradient-to-r from-rose-600 to-rose-400",
            "logo": adaniLogo,
            "points": [
                "Developed Java Spring Boot microservices scaling renewable energy systems.",
                "Designed Kafka pipelines for 1M+ power generation events daily.",
                "Optimized SQL queries reducing execution time by 40% across 15+ plants."
            ]
        },
    ];

    return (
        <div>
            <h3 className='text-black dark:text-white text-3xl sm:text-5xl font-semibold text-center sm:text-left px-6 sm:px-20 pt-10'>Experiences</h3>
            <div className='flex flex-wrap justify-center gap-6 sm:gap-8 px-6 sm:px-20 mt-8'>
                {experiencesArr.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        company={exp.company}
                        role={exp.role}
                        date={exp.date}
                        color={exp.color}
                        logo={exp.logo}
                        points={exp.points}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
