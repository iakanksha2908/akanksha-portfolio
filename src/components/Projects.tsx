import React from 'react'
import Project from './UI/Project'

const Projects = () => {

    const projectsList = [
        {
            "name": "Food Donation App",
            "desc": "Built a food sharing platform connecting restaurants and NGOs for efficient surplus distribution.",
            "date": "March 2024 - May 2024",
            "tech": ["React", "Node.js", "Express", "MongoDB"],
            "points": [
                "Developed a MERN stack application with donor and NGO registration flows.",
                "Implemented food donation listings, real-time availability updates, and pickup scheduling.",
                "Added map-based location features and notification system for donation status updates."
            ]
        },
        {
            "name": "Stroke Prediction ML Project",
            "desc": "Healthcare stroke prediction using machine learning and structured data preprocessing.",
            "date": "Sept 2024 - Dec 2024",
            "tech": ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
            "points": [
                "Cleaned and engineered healthcare dataset (5K+ records), created custom Age Categories.",
                "Performed EDA to uncover risk patterns, handled missing BMI values based on age groups.",
                "Trained Decision Tree, Random Forest, SVM, Logistic Regression with GridSearchCV.",
                "Achieved 95%+ accuracy, visualized model performance using confusion matrix."
            ]
        },
         {
            "name": "PintOS Kernel Enhancement",
            "desc": "Enhanced OS kernel scheduling and synchronization mechanisms in PintOS academic project.",
            "date": "May 2024 - July 2024",
            "tech": ["C", "Operating Systems", "Threads", "Synchronization"],
            "points": [
                "Improved kernel thread scheduling logic with priority-based algorithms.",
                "Implemented synchronization primitives including locks, semaphores, and condition variables.",
                "Gained hands-on exposure to kernel internals, scheduling queues, and low-level debugging."
            ]
        },
        {
            "name": "Career Portal Clone (NUWorks Inspired)",
            "desc": "Developed a student career portal with job listings, application tracking, and admin controls.",
            "date": "Aug 2022 - Dec 2022",
            "tech": ["Angular", "Spring Boot", "REST APIs", "MySQL"],
            "points": [
                "Implemented student and admin login with JWT authentication and role-based access.",
                "Features include job listings, application tracking, and resume uploads.",
                "Integrated pagination, search filters, and clean, responsive UI design."
            ]
        },
        {
            "name": "CloudWeaver – Cloud-Native Backend Platform",
            "desc": "Backend AWS application with auto-scaling, notifications, and automated deployment setup.",
            "date": "Aug 2022 - Dec 2022",
            "tech": ["AWS", "EC2", "AutoScaling", "Lambda", "SNS", "SES", "S3", "CloudFormation"],
            "points": [
                "Designed backend system with EC2, AutoScaling, Lambda for scalable compute and processing.",
                "Integrated SNS and SES for notifications and email services, S3 for storage.",
                "Automated infrastructure setup using CloudFormation templates, reducing setup time by 60%.",
                "Monitored system health using CloudWatch with proactive exception alerts."
            ]
        },
        {
            "name": "Menace – Tic Tac Toe using Q-Learning",
            "desc": "Built a Q-Learning powered Tic Tac Toe game in Java, learning optimal moves via self-play.",
            "date": "March 2022 - April 2022",
            "tech": ["Java", "Q-Learning"],
            "points": [
                "Implemented Q-Learning logic in Java with state-action value updates from scratch.",
                "Trained using self-play episodes, progressively improving gameplay decisions.",
                "Used epsilon-greedy strategy to balance exploration and exploitation during training."
            ]
        }
    ]

  return (
    <div>
        <h3 className='text-black dark:text-white text-3xl sm:text-5xl font-semibold text-center sm:text-left px-6 sm:ml-20 mt-10'>Projects</h3>
        <div className='flex flex-wrap justify-center gap-6 px-6 sm:px-20 mt-8'>
           { projectsList.map((pro, index) => (
                <Project key={index}
                    name={pro.name}
                    desc={pro.desc}
                    date={pro.date}
                    tech={pro.tech}
                    points={pro.points}
                />
            ))}
        </div>
    </div>
  )
}

export default Projects
