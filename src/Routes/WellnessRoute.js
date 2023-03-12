import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import WellnessApp from '../Components/Wellness';

const WellnessProjectPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="HEALTH AND WELLNESS" />
            <WellnessApp />
            <Footer />
        </div>
    )
};

export default WellnessProjectPage;