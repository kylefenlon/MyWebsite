import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import BlandApp from '../Components/Blands';

const BlandsPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="PICKUP" />
            <BlandApp />
            <Footer />
        </div>
    )
};

export default BlandsPage;