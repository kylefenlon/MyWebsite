import SelfLanding from '../images/self-landing.png'
import SelfViewEntries from '../images/self-view-entries.png'
import SelfDailyStats from '../images/self-daily-stats.png'
import SelfWeeklyStats from '../images/self-weekly-stats.png'

const WellnessApp = () => {
    return (
        <>
            <div class="wellness-project-container">
                <div class="wellness-project-card">
                    <h2 class="wellness-project-title">CodeClan Health and Wellness Tracker</h2>
                    <img src={SelfLanding} alt="image" />
                    <img src={SelfViewEntries} alt="image" />
                    <img src={SelfDailyStats} alt="image" />
                    <img src={SelfWeeklyStats} alt="image" />
                    <div class="wellness-project-details">
                        <p>This is a project built to help future CodeClan students. Having gone through this course myself I wanted to build something that could help future students with balancing their work/life balance whilst going through the course.</p>
                        <p> This app was built in JavaScript with the React framework whilst also using the non-relational MongoDB for the server side. </p>
                        <p>The purpose of this app was to allow CodeClan students to journal how they feel about things relating to them and the course each day and also
                            fill in a daily questionnaire about things such as the quality of their sleep the night before and how healthy their eating habits have been during that day.
                            The reason was to then compare how you were feeling along with the habits that you have each day and see the connection between the two.
                        </p>
                        <p>Over time this would allow studetns to see how their daily choices/habits regarding their health has an impact on how they feel about different things each day. Thus allowing them
                            to make better choices to improve how they are feeling and also how they are handling their work/life balance during the course.
                        </p>
                        <a href="https://github.com/MackieJG/codeclanJournalApp" class="btn">Github</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WellnessApp