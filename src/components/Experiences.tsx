import React from 'react'
import ExperienceCard from './UI/ExperienceCard'
import citibankLogo from "../assets/Citibank-logo.jpg";
import abbottLogo from "../assets/abbott.png";
import tcsLogo from "../assets/tcs.png";
import adaniLogo from "../assets/adani.png";


const Experiences = () => {



    const experiencesArr = [
        {
            "company": "Citibank(Contract)",
            "role": "Software Engineer",
            "date": "Sept 2024 - Present",
            "color": "bg-gradient-to-r from-yellow-600 to-yellow-400",
            "logo": citibankLogo,
            "points": [
                "Developed GraphQL APIs using Java and Spring Boot for 10+ microservices.",
                "Reduced dashboard load time from 1.2s to 700ms with AWS CDK.",
                "Achieved 100% test coverage using Mockito."
            ]
        },
        {
            "company": "Abbott",
            "role": "Software Engineer",
            "date": "Jan 2023 - July 2023",
            "color": "bg-gradient-to-r from-blue-600 to-blue-400",
            "logo": abbottLogo,
            "points": [
                "Developed GraphQL APIs using Java and Spring Boot for 10+ microservices.",
                "Reduced dashboard load time from 1.2s to 700ms with AWS CDK.",
                "Achieved 100% test coverage using Mockito."
            ]
        },
        {
            "company": "Tata Consultancy Services",
            "role": "Software Engineer",
            "date": "Dec 2019 - Dec 2021",
            "logo": tcsLogo,
            "color": "bg-gradient-to-r from-teal-600 to-teal-400",
            "points": [
                "Developed GraphQL APIs using Java and Spring Boot for 10+ microservices.",
                "Reduced dashboard load time from 1.2s to 700ms with AWS CDK.",
                "Achieved 100% test coverage using Mockito."
            ]
        },
        {
            "company": "Adani Group",
            "role": "Software Engineer",
            "date": "June 2019 - Dec 2019",
            "color": "bg-gradient-to-r from-rose-600 to-rose-400",
            "logo": adaniLogo,
            "points": [
                "Developed GraphQL APIs using Java and Spring Boot for 10+ microservices.",
                "Reduced dashboard load time from 1.2s to 700ms with AWS CDK.",
                "Achieved 100% test coverage using Mockito."
            ]
        },

    ];

    return (
        <div>
            <h3 className='text-black dark:text-white text-5xl font-semibold text-left m-10 ml-20 mr-20'>Experiences</h3>
            {/* <div className='ml-20 flex p-8 m-4'> */}
                <div className='ml-20 flex'>
                    {experiencesArr.map((exp, index) => (<ExperienceCard key={index}
                    company={exp.company}
                    role={exp.role}
                    date={exp.date}
                    color={exp.color}
                    logo={exp.logo} 
                    points={exp.points}

                    ></ExperienceCard>))}</div>
                
        </div>

    )
}

export default Experiences