import React from 'react';
import { Link } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import AdimoScrape from '../images/adimo-scrape.png';
import BlandsLanding from '../images/BlandsSunglasses.png';
import PickupLanding from '../images/Pickup-landing.png';
import SelfLanding from '../images/self-landing.png';
import PythonProject from '../images/PythonProject.png';

const projects = [
    {
        title: "Web Scraping Task",
        img: AdimoScrape,
        description: "This web scraper was built as a take home task for a company during their interviewing process.",
        link: "/scrape",
    },
    {
        title: "Bland's Sunglasses - Ecommerce Store",
        img: BlandsLanding,
        description: "Bland's Sunglasses is an ecommerce store built for selling sunglasses using Bootstrap, JS, React, Express, AWS EC2 Ubuntu Instance, Nginx and Stripe.",
        link: "/blands",
        demo: "https://shop.kfenlon.com"
    },
    {
        title: "Pickup - Clean up your community",
        img: PickupLanding,
        description: "Pickup is a web application built with React and Java (Spring) for the capstone project of the CodeClan software professional development 16 week course.",
        link: "/pickup",
    },
    {
        title: "CodeClan Health and Wellness Tracker",
        img: SelfLanding,
        description: "This is a project built to help future CodeClan students. Having gone through this course myself I wanted to build something that could help future students with balancing their work/life balance whilst going through the course.",
        link: "/wellness",
    },
    {
        title: "Workout Builder",
        img: PythonProject,
        description: "This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.",
        link: "/gymapp",
    }
];

const WorkCard = () => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                My most recent projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={project.title}
                                height="300"
                                image={project.img}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        component={Link}
                                        to={project.link}
                                        variant="contained"
                                        color="primary"
                                        sx={{ mr: 1 }}
                                    >
                                        Details
                                    </Button>
                                    {project.demo && (
                                        <Button
                                            component="a"
                                            href={project.demo}
                                            variant="outlined"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Demo
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default WorkCard;
