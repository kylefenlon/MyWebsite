import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import CleancoBEApp from '../Components/CleancoBE';

const CleancoBEPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="CLEANCO" />
            <CleancoBEApp />
            <Footer />
        </div>
    )
};

export default CleancoBEPage;