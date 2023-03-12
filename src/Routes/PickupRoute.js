import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import PickupApp from '../Components/Pickup';

const PickupPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="PICKUP" />
            <PickupApp />
            <Footer />
        </div>
    )
};

export default PickupPage;