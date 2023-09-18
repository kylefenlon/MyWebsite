import "./WorkCard.css"
import PythonProject from "../images/PythonProject.png"
import SelfLanding from '../images/self-landing.png'
import PickupLanding from '../images/Pickup-landing.png'
import BlandsLanding from '../images/BlandsSunglasses.png'
import AdimoScrape from '../images/adimo-scrape.png'
import CleancoBELanding from "../images/CleancoBELanding.png"
import React from 'react'
import { Link } from "react-router-dom"

const WorkCard = () => {
    return (
        <>
            <h1 class="project-heading">My most recent projects</h1>
            <div class="work-container">
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-3">
                            <h2 class="project-title">Cleanco Daily Work Tracker</h2>
                            <img src={CleancoBELanding} alt="img" />
                            <div class="project-details">
                                <p>This app was built to allow a cleaning company to track their work being completed daily.</p>
                                <Link to="/cleancoBE" class="btn-card">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-3">
                            <h2 class="project-title">Web Scraping Task</h2>
                            <img src={AdimoScrape} alt="img" />
                            <div class="project-details">
                                <p>This web scraper was built as a take home task for a company during their interviewing process.</p>
                                <Link to="/scrape" class="btn-card">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-3">
                            <h2 class="project-title">Bland's Sunglasses - Ecommerce Store</h2>
                            <img src={BlandsLanding} alt="img" />
                            <div class="project-details">
                                <p>Bland's Sunglasses is an ecommerce store built for selling sunglasses using Bootstrap, JS, React, Express, AWS EC2 Ubuntu Instance, Nginx and Stripe.</p>
                                <div class="workcard-pro-btns-2">
                                    <Link to="/blands" class="btn-card-2">Details</Link>
                                    <a href="https://shop.kfenlon.com" class="btn-light" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-3">
                            <h2 class="project-title">Pickup - Clean up your community</h2>
                            <img src={PickupLanding} alt="img" />
                            <div class="project-details">
                                <p>Pickup is a web application built with React and Java (Spring) for the capstone project of the CodeClan software professional development 16 week course.</p>
                                <div class="workcard-pro-btns-2">
                                    <Link to="/pickup" class="btn-card-2">Details</Link>
                                    <a href="https://www.joinpickup.co" class="btn-light" target="_blank">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-2">
                            <h2 class="project-title">CodeClan Health and Wellness Tracker</h2>
                            <img src={SelfLanding} alt="image" />
                            <div class="project-details">
                                <p>This is a project built to help future CodeClan students. Having gone through this course myself I wanted to build something that could help future students with balancing their work/life balance whilst going through the course.</p>
                                <Link to="/wellness" class="btn-card">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <div class="project-card-2">
                            <h2 class="project-title">Workout Builder</h2>
                            <img src={PythonProject} alt="image" />
                            <div class="project-details">
                                <p>This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.
                                </p>
                                <Link to="/gymapp" class="btn-card">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard