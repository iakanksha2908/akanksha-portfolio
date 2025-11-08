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
                "Architected Java Spring Boot microservices for retail banking, integrating modular service components for loan and credit workflows handling 1.5M + daily transactions, reducing processing latency by 30%.",
                "Developed responsive React + TypeScript dashboards for account management, improving UI responsiveness and analytics for 100K + monthly users across 10 + backend systems",
                " Designed and deployed RESTful APIs and Kafka - based event streams, improving data synchronization and transaction reliability across multiple banking services",
                "Optimized PostgreSQL queries and indexes, cutting audit report generation time by 35 % while maintaining PCI - DSS compliance for sensitive financial data",
                "Deployed microservices on AWS EKS and EC2 with Docker, Kubernetes, and CloudFormation, ensuring high availability and multi - region scalability",
                "Integrated monitoring through Prometheus, Grafana, and AWS CloudWatch, reducing MTTR by 20 % and improving system observability across 50 + internal apps",
            ],
            "skills": [
                "Java", "Spring Boot", "React", "Angular", "TypeScript",
                "PostgreSQL", "Kafka", "AWS", "REST APIs", "Microservices Architecture"
            ]
        },
        {
            "company": "Abbott",
            "role": "Software Engineer",
            "date": "Jan 2023 - July 2023",
            "color": "bg-gradient-to-r from-blue-600 to-blue-400",
            "logo": abbottLogo,
            "points": [
                "Developed and deployed Spring Boot microservices for Abbott’s cardiovascular diagnostics system, processing 50K+ daily telemetry requests with HIPAA-compliant data handling",
                "Built an interactive React clinical portal for diabetes care, streamlining clinician workflows and saving 2–3 hours weekly through real-time dashboards",
                "Provisioned AWS S3, Route 53, and CloudWatch for nutritional product data management, maintaining 200K+ records with 99.9% uptime",
                "Optimized PostgreSQL schema and queries, reducing report generation time by 60% for neuromodulation telemetry analytics",
                "Implemented Kafka pipelines for real-time diagnostic synchronization, cutting data latency from 15 mins to 5 mins and improving decision accuracy",
                "Automated CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment cycles from 7 days to 3 days and achieving 90% test coverage with JUnit and Mockito"
            ],
            "skills": [
                "Java", "Spring Boot", "React", "PostgreSQL",
                "Kafka", "AWS", "Jenkins", "GitHub Actions", "JUnit", "Mockito", "Microservices",
            ]
        },
        {
            "company": "Tata Consultancy Services",
            "role": "Software Engineer",
            "date": "Dec 2019 - Dec 2021",
            "logo": tcsLogo,
            "color": "bg-gradient-to-r from-teal-600 to-teal-400",
            "points": [
                "Delivered a full-stack citizen service platform using Spring Boot + React, improving data retrieval speed by 12% and enhancing UI performance for multi-department usage",
                "Implemented Kafka-based messaging for inter-service communication, reducing data sync delays by 15% and increasing throughput across distributed systems",
                "Deployed microservices on AWS EC2 with Docker and CloudWatch, cutting incident recovery time from 40 mins to 28 mins through proactive alerts",
                "Optimized REST APIs and PostgreSQL backends, increasing data accuracy and reducing duplicate fetches by 10%",
                "Automated CI/CD pipelines via Jenkins, boosting release frequency from biweekly to weekly and minimizing rollback incidents",
                "Refactored legacy monolithic modules into Dockerized microservices, reducing developer onboarding time by 25% and ensuring better code maintainability under Agile DevOps practices",
            ],
            "skills": [
                "Java", "Spring Boot", "React", "PostgreSQL",
                "Kafka", "Docker", "AWS",
                "Jenkins", "REST APIs", "Microservices",
                "Agile DevOps", "CI/CD Automation"
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
                        skills={exp.skills} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
