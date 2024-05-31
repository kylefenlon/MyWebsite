import React from "react";
import { Link } from "react-router-dom";
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

    const projects = [
        {
            'title': 'CleanCo Ltd CRM',
            'services': 'Full Stack Application - Web Design, Hosting, Devops',
            'description': `The Clean-Co Daily Work Tracker is designed to monitor 
                            employees daily work submissions efficiently. Employees 
                            can upload their daily tasks through an easy-to-use form, 
                            while admins have a dedicated section to access and review 
                            the submitted work in the database.
                            
                            The application is built 
                            with a robust tech stack, including JavaScript, React, 
                            Express, an AWS EC2 Ubuntu instance, CloudFront distribution, and an S3 bucket.`
        },
        {
            'title': 'CleanCo Ltd Website',
            'services': 'Web Design and Hosting',
            'description': `CleanCo Professional Cleaning Services is a website built using a customized WordPress theme tailored for 
                            showcasing the company’s offerings. It allows customers to explore various cleaning services and easily book appointments online.

                            Developed and customized with PHP to enhance functionality, the website features detailed service listings, an integrated 
                            contact system, and client testimonials. Launched in 2023, the site is fully responsive, SEO optimized, 
                            and uses an interactive map for locating services.`,
            'link': 'https://www.cleanco-ltd.co.uk/'
        },
        {
            'title': 'Ecommerce Store',
            'services': 'Web Design, Hosting, Devops, Payment Integration',
            'description': `Bland's Sunglasses is an e-commerce store dedicated to selling sunglasses. 
                            Users can browse, add items to their cart, and complete purchases using Stripe.

                            The app is built with Bootstrap, JavaScript, React, Express, and Stripe. 
                            To launch the project, I set up an EC2 instance running Ubuntu, configured it for public access, and installed nginx.
                            Using Certbot/Let’s Encrypt, I secured the site with a TLS certificate, enabling HTTPS.
            
                            Additionally, I created a subdomain pointing to the EC2 instance and developed a bash 
                            script for one-click code deployment using Linux commands like ‘scp’, ‘rsync’, and ‘ssh’. 
                            A separate subdomain was set up for the server API, and nginx was used as a reverse proxy 
                            for the Express application to manage TLS certificates and route traffic appropriately.`,
            'link': 'https://shop.kfenlon.com/'
        },
        {
            'title': 'Community Litter Pickup Organizer',
            'services': 'Web Design, Hosting, Devops, Payment Integration',
            'description': `Pickup is a web application developed for the CodeClan software professional development course's capstone project. 
                            It enables communities to organize litter-picking events and track the amount of litter collected in a leaderboard format.
            
                            Created in February/March 2023 by Kelsie Murphy, Kyle Fenlon, and Josh Montgomery, 
                            the app utilizes React, Tailwind CSS, Java 8.0, Spring, and an Amazon S3 bucket.`
        },
    ]


    return (
        <div className="projectsContainer">
            <div className="projectsContainerHeading">
                <hr></hr>
                <h1 className="projectsHeading">Projects</h1>
            </div>
            <ul className="projectsList">
                {projects.map((project, index) => (
                    <li key={index} className="projectItem">
                        <div className="project">
                            {project.link ? (
                                <Link to={project.link} target="_blank" rel="noopener noreferrer">
                                    <h2 className="projectTitleLink">{project.title}</h2>
                                </Link>
                            ) : (
                                <h2 className="projectTitle">{project.title}</h2>
                            )}
                            <p className="projectService"> - {project.services}</p>
                            <p className="projectDescription" dangerouslySetInnerHTML={{ __html: highlightTechStack(project.description) }}></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;
