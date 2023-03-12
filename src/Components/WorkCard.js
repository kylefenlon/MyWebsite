import "./WorkCard.css"
import PythonProject from "../images/PythonProject.png"
import SelfLanding from '../images/self-landing.png'
import SelfViewEntries from '../images/self-view-entries.png'
import SelfDailyStats from '../images/self-daily-stats.png'
import SelfWeeklyStats from '../images/self-weekly-stats.png'
import PickupLanding from '../images/Pickup-landing.png'
import PickupLanding2 from '../images/Pickup-landing-2.png'
import PickupLanding3 from '../images/pickup-landing-3.png'
import PickupAuth0 from '../images/pickup-auth0.png'
import JoinCommunity from '../images/join-community.png'
import PickupAdmin from '../images/community-admin.png'
import Community1 from '../images/community-1.png'
import Community2 from '../images/community-2.png'
import React from 'react'
import { Link } from "react-router-dom"

const WorkCard = () => {
    return (
        <>
            <h1 class="project-heading">My most recent projects</h1>
            <div class="work-container">
                <div class="project-container">
                    <div class="project-card">
                        <h2 class="project-title">Workout Builder</h2>
                        <img src={PythonProject} alt="image" />
                        <div class="project-details">
                            <p>This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.
                            </p>
                            <div class="pro-btns">
                                <Link to="/gymapp" class="btn">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <h2 class="project-title">CodeClan Health and Wellness Tracker</h2>
                        <img src={SelfLanding} alt="image" />
                        <div class="project-details">
                            <p>This is a project built to help future CodeClan students. Having gone through this course myself I wanted to build something that could help future students with balancing their work/life balance whilst going through the course.</p>
                            <div class="pro-btns">
                                <Link to="/wellness" class="btn">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="project-card">
                        <h2 class="project-title">Pickup - Clean up your community</h2>
                        <img src={PickupLanding} alt="img" />
                        <div class="project-details">
                            <p>Pickup is a web application built with React and Java (Spring) for the capstone project of the CodeClan software professional development 16 week course.</p>
                            <div class="pro-btns">
                                <Link to="/pickup" class="btn">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard