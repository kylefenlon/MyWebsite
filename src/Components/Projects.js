import React from "react";
import '../CSS/Projects.css'

const Projects = () => {

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
                            for the Express application to manage TLS certificates and route traffic appropriately.`
        },
        {
            'title': 'Local Community Activity Website',
            'services': 'Web Design, Hosting, Devops, Payment Integration',
            'description': `Pickup is a web application developed for the CodeClan software professional development course's capstone project. 
                            It enables communities to organize litter-picking events and track the amount of litter collected in a leaderboard format.
            
                            Created in February/March 2023 by Kelsie Murphy, Kyle Fenlon, and Josh Montgomery, 
                            the app utilizes React, Tailwind CSS, Java 8.0, Spring, and an Amazon S3 bucket.`
        }

    ]

}