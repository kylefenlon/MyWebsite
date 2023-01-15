import "./WorkCard.css"
import PythonProject from "../images/PythonProject.png"
import React from 'react'
import { NavLink, Link } from "react-router-dom"

const WorkCard = () => {
    return (
        <div class="work-container">
            <h1 class="project-heading">My most recent projects</h1>
            <div class="project-container">
                <div class="project-card">
                    <img src={PythonProject} alt="image" />
                    <h2 class="project-title">Python Project - Workout Builder</h2>
                    <div class="project-details">
                        <p>This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.
                            <p> I chose to build an app that allows you to create days and exercises and attach those exercises to certain days. </p>
                            <p>This allows you to create a full workout for each day that you make which then means you can build full weeks or months of workouts if you like.</p>
                            <p>I love the gym and working out so I really enjoyed building this and I will be continuing to work on this in the future to add more functionality and make it even better overall. </p>
                        </p>
                        <div class="pro-btns">
                            {/* <NavLink to="">VIEW</NavLink> */}
                            <a href="/" class="btn">View</a>
                            <a href="https://github.com/kylefenlon/project.git" class="btn-light">Github Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard