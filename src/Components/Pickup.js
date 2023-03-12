import "./Pickup.css"
import PickupLanding from '../images/Pickup-landing.png'
import PickupLanding2 from '../images/Pickup-landing-2.png'
import PickupLanding3 from '../images/pickup-landing-3.png'
import PickupAuth0 from '../images/pickup-auth0.png'
import JoinCommunity from '../images/join-community.png'
import PickupAdmin from '../images/community-admin.png'
import Community1 from '../images/community-1.png'
import Community2 from '../images/community-2.png'
const PickupApp = () => {
    return (
        <>
            <div class="pickup-project-container">
                <div class="pickup-project-card">
                    <h2 class="pickup-project-title">Pickup - Clean up your community</h2>
                    <img src={PickupLanding} alt="img" />
                    <img src={PickupLanding2} alt="img" />
                    <img src={PickupLanding3} alt="img" />
                    <img src={PickupAuth0} alt="img" />
                    <img src={JoinCommunity} alt="img" />
                    <img src={PickupAdmin} alt="img" />
                    <img src={Community1} alt="img" />
                    <img src={Community2} alt="img" />
                    <div class="pickup-project-details">
                        <p>Pickup is a web application built with React and Java (Spring) for the capstone project of the CodeClan software professional development 16 week course.</p>
                        <p>It allows communities to organise litter picking events and allows the users to track the litter collected in a leaderboard format.</p>
                        <p>It was created in February/March 2023 by Kelsie Murphy, Kyle Fenlon and Josh Montgomery.</p>
                        <p> This app was built with React, Tailwind-CSS, Java 8.0, Spring and used an Amazon S3 Bucket. </p>
                        <div class="pickup-buttons">
                            <a href="https://github.com/kelsiesmurphy/pickup" class="pickup-btn">Github Repo</a>
                            <a href="https://www.joinpickup.co" class="pickup-btn-light">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickupApp