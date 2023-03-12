import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import GymApp from '../Components/GymApp';

const GymAppProjectPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="GYM APPLICATION" />
            <GymApp />
            <Footer />
        </div>
    )
};

export default GymAppProjectPage;