import "./CleancoBE.css"
import CleancoBELanding from '../images/CleancoBELanding.png'
import CleancoBEFormFilled from '../images/CleancoFormFilled.png'
import CleancoBEJobsPage from '../images/CleancoJobsMockUp.png'
import CleancoBEJobsPassword from '../images/CleancoJobsPassword.png'

const CleancoBEApp = () => {
    return (
        <>
            <div class="cleancoBE-project-container">
                <div class="cleancoBE-project-card">
                    <h2 class="cleancoBE-project-title">CleanCo Daily Work Tracker</h2>
                    <img src={CleancoBELanding} alt="img" />
                    <img src={CleancoBEFormFilled} alt="img" />
                    <img src={CleancoBEJobsPage} alt="img" />
                    <img src={CleancoBEJobsPassword} alt="img" />
                    <div class="cleancoBE-project-details">
                        <p>The Clean-Co daily work tracker was built so that the company can track the work completed daily by it's employees.</p>
                        <p>It allows the employees to go onto the form and upload the work for the day. It then has another section to allow the admins to access the
                            database and see what work has been completed.
                        </p>
                        <p>This app was built using using JavaScript, React, Express, AWS EC2 Ubuntu Instance, Cloudfront distribution along with an S3 Bucket.</p>
                        <div class="cleancoBE-buttons">
                            {/* <a href="https://github.com/kylefenlon/StripeEcommerceStore" class="blands-btn">Github Repo</a> */}
                            <a href="https://work.cleanco-ltd.com" class="cleancoBE-btn-light" target="_blank">DEMO</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CleancoBEApp;