import "./WorkCard.css"
import PythonProject from "../images/PythonProject.png"
import SelfLanding from '../images/self-landing.png'
import SelfViewEntries from '../images/self-view-entries.png'
import SelfDailyStats from '../images/self-daily-stats.png'
import SelfWeeklyStats from '../images/self-weekly-stats.png'
import React from 'react'

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
                            {/* <a href="/" class="btn">Github Repo</a> */}
                            <a href="https://github.com/kylefenlon/project.git" class="btn">Github Repo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-container">
                <div class="project-card">
                    <h2 class="project-title">JavaScript Project - CodeClan Health and Wellness Tracker</h2>
                    <img src={SelfLanding} alt="image" />
                    <img src={SelfViewEntries} alt="image" />
                    <img src={SelfDailyStats} alt="image" />
                    <img src={SelfWeeklyStats} alt="image" />
                    <div class="project-details">
                        <p>This is a project built to help future CodeClan students. Having gone through this course myself I wanted to build something that could help future students with balancing their work/life balance whilst going through the course.</p>
                        <p> This app was built in JavaScript with the React framework whilst also using the non-relational MongoDB for the server side. </p>
                        <p>The purpose of this app was to allow CodeClan students to journal how they feel about things relating to them and the course each day and also
                            fill in a daily questionnaire about things such as the quality of their sleep the night before and how healthy their eating habits have been during that day.
                            The reason was to then compare how you were feeling along with the habits that you have each day and see the connection between the two.
                        </p>
                        <p>Over time this would allow studetns to see how their daily choices/habits regarding their health has an impact on how they feel about different things each day. Thus allowing them
                            to make better choices to improve how they are feeling and also how they are handling their work/life balance during the course.
                        </p>

                        <div class="pro-btns">
                            <a href="https://github.com/MackieJG/codeclanJournalApp" class="btn">Github Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard