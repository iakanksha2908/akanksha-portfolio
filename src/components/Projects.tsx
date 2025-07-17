import React from 'react'
import Project from './UI/Project'

const Projects = () => {

    const projectsList = [
        {
            "name": "IPL Dashboard",
            "desc": "This project is a dynamic IPL Dashboard built using ReactJS (or Angular) and Spring Boot (or Node.js backend), designed to visually represent IPL match data through interactive charts and tables",
            "date":"March 2025",
            "tech": ["ReactJS", "SpringBoot", "REST APIs", "MySQL"],
            "points": []
        },
       {
            "name": "IPL Dashboard",
            "desc": "This project is a dynamic IPL Dashboard built using ReactJS (or Angular) and Spring Boot (or Node.js backend), designed to visually represent IPL match data through interactive charts and tables",
            "date":"March 2025",
            "tech": ["ReactJS", "SpringBoot", "REST APIs", "MySQL"],
            "points": []
        },
        {
            "name": "IPL Dashboard",
            "desc": "This project is a dynamic IPL Dashboard built using ReactJS (or Angular) and Spring Boot (or Node.js backend), designed to visually represent IPL match data through interactive charts and tables",
            "date":"March 2025",
            "tech": ["ReactJS", "SpringBoot", "REST APIs", "MySQL"],
            "points": []
        },
       {
            "name": "IPL Dashboard",
            "desc": "This project is a dynamic IPL Dashboard built using ReactJS (or Angular) and Spring Boot (or Node.js backend), designed to visually represent IPL match data through interactive charts and tables",
            "date":"March 2025",
            "tech": ["ReactJS", "SpringBoot", "REST APIs", "MySQL"],
            "points": []
        },
        {
            "name": "IPL Dashboard",
            "desc": "This project is a dynamic IPL Dashboard built using ReactJS (or Angular) and Spring Boot (or Node.js backend), designed to visually represent IPL match data through interactive charts and tables",
            "date":"March 2025",
            "tech": ["ReactJS", "SpringBoot", "REST APIs", "MySQL"],
            "points": []
        },
        
    ]
  return (
    <div>
        <h3 className='sticky text-black dark:text-white text-5xl font-semibold text-left m-10 ml-20'>Projects</h3>
        
        <div className='ml-4 flex flex-wrap'>
           { projectsList.map((pro, index) => (<Project key={index}
                name={pro.name}
                desc={pro.desc}
                date={pro.date}
                tech={pro.tech}
                points={pro.points}
           ></Project>))}
            
        </div>
    </div>
  )
}

export default Projects