import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../Data/ProjectsData";
import '../CSS/Projects.css';

const Projects = () => {

    const techStackKeywords = [
        'JavaScript', 'React', 'Express', 'AWS EC2',
        'Ubuntu', 'CloudFront', 'S3', 'PHP', 'Bootstrap',
        'Stripe', 'nginx', 'Certbot', 'Let’s Encrypt', 'rsync',
        'ssh', 'Spring', 'Tailwind CSS', 'Java 8.0', 'Wordpress',
        'scp'
    ];

    const highlightTechStack = (description) => {
        const regex = new RegExp(`\\b(${techStackKeywords.join('|')})\\b`, 'gi');
        return description.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    };

    return (
        <div id="projects" className="projectsContainer">
            <div className="projectsContainerHeading">
                <hr></hr>
                <h1 className="projectsHeading">Projects</h1>
            </div>
            <ul className="projectsList">
                {projects.map((project, index) => (
                    <li key={index} className="projectItem">
                        <div className="project">
                            {project.link ? (
                                <>
                                    <h2 className="projectTitle">{project.title}</h2>
                                    <div className="linkServiceContainer">
                                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                                            <p className="projectServiceLink">Visit Site <FaExternalLinkAlt size={15} style={{ color: '#007bff', marginRight: '0.3rem', paddingTop: '0.15rem' }} /></p>
                                        </Link>
                                        <p className="projectService"> - {project.services}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className="projectTitle">{project.title}</h2>
                                    <p className="projectService"> - {project.services}</p>
                                </>
                            )}
                            <p className="projectDescription" dangerouslySetInnerHTML={{ __html: highlightTechStack(project.description) }}></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Projects;
