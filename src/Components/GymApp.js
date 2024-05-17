import PythonProject from "../images/PythonProject.png"

const GymApp = () => {
    return (
        <>
            <h1 class="gym-project-heading">Workout Builder</h1>
            <div class="gym-work-container">
                <div class="gym-project-container">
                    <div class="gym-project-card">
                        {/* <h2 class="project-title">Workout Builder</h2> */}
                        <img src={PythonProject} alt="image" />
                        <div class="gym-project-details">
                            <p>This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.
                                <p> I chose to build an app that allows you to create days and exercises and attach those exercises to certain days. </p>
                                <p>This allows you to create a full workout for each day that you make which then means you can build full weeks or months of workouts if you like.</p>
                                <p>I love the gym and working out so I really enjoyed building this and I will be continuing to work on this in the future to add more functionality and make it even better overall. </p>
                            </p>
                            <a href="https://github.com/kylefenlon/project.git" class="btn-light">Gitbhub</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GymApp