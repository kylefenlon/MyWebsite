export const projects = [
    {
        'title': 'RotAi – Workforce Scheduling Automation Platform',
        'services': 'Full Stack Application – Web Design, System Architecture, Hosting, Devops',
        'status': 'Production deployment across three active business sites since Q1 2026',
        'description': `RotAi is a workforce scheduling automation platform built to eliminate 
                    4–5 hours of manual rota management per week by processing 
                    staff availability, job allocations, and operational constraints.

                    The frontend is developed using Vue 3, Typescript and Vuetify, delivering a reactive 
                    and responsive user interface for schedule configuration and staff management.

                    The backend is built with Python and FastAPI, exposing a high-performance 
                    REST API that handles scheduling logic, validation rules, and data processing. 
                    Persistent data storage is managed using MySQL.

                    The application is deployed using Vercel for frontend hosting and Railway 
                    for backend infrastructure, supported by a streamlined CI/CD workflow 
                    to enable continuous deployment and rapid iteration.

                    Initially prototyped with AI-assisted rota generation, the system was 
                    re-engineered with deterministic backend logic to ensure a reliable
                    scheduling output.`
    },
    {
        'title': 'CleanCo Ltd CRM',
        'services': 'Full Stack Application - Web Design, Hosting, Devops',
        'status': 'Been in production since 2024, still actively being used to manage work for over 12 staff daily',
        'description': `The Clean-Co Daily Work Tracker is designed to monitor 
                        employees daily work submissions efficiently. Employees 
                        can upload their daily tasks through an easy-to-use form, 
                        while admins have a dedicated section to access and review 
                        the submitted work in the database.
                        
                        The application was initially deployed on AWS using EC2 (Ubuntu), 
                        S3, and CloudFront alongside a JavaScript, MUI, React, and Express stack. 
                        To reduce infrastructure overhead and operating costs, the hosting layer was later migrated to Railway, 
                        while preserving the existing application architecture and deployment workflow.`
    },
    {
        'title': 'CleanCo Ltd Website',
        'services': 'Full Stack Web Design - Next.js, React, TypeScript',
        'description': `CleanCo is a modern, fully custom-built website for a professional cleaning company established in
                      1994, serving Paisley, Glasgow, and the Central Belt of Scotland. 
                      
                      Built from scratch using Next.js 16, React 19, and TypeScript with Tailwind CSS for styling, 
                      the site features multiple service pages (window cleaning, carpet cleaning, power washing, office  cleaning, 
                      construction cleaning, and commercial cleaning), each with detailed sub-service breakdowns, image galleries, 
                      and unique feature lists.
                      
                      Key features include a dynamic portfolio section showcasing recent work with before/after comparisons, 
                      client testimonials carousel using Embla, interactive service grids, a client ticker displaying major clients 
                      (Avant Homes, Gama Aviation, Scottish Ambulance Service), and full mobile responsiveness. 
                      
                      The application uses Radix UI for accessible components, Framer Motion for smooth animations, 
                      custom Google Fonts (Outfit, Hanken Grotesk, Instrument Serif), light/dark mode support via next-themes, 
                      and Vercel Analytics for performance tracking. SEO optimized with location-specific keywords and 
                      metadata.`,
        'link': 'https://www.cleanco-ltd.co.uk/'
    },
    {
        'title': 'Drillface CRM',
        'services': 'Full Stack Application - Web Design, Hosting, Devops',
        'status': 'In production for Q3 2026',
        'description': `Drillface is a comprehensive safety observation system designed for FIFO mining operations. 
                      The platform enables field operators to capture and report safety signals, ground conditions, 
                      and production pressure incidents through detailed forms with confidence-level reporting.
                      
                      Built with a modern tech stack featuring React 19, TypeScript, Express 5, and MySQL with Drizzle ORM and Shadcn.
                      The system includes granular user management, production pressure tracking, rate-limited 
                      authentication endpoints for security, and detailed logging of safety observations including 
                      location data, signal categorization, and incident outcomes.`
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