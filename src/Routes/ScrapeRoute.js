import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import ScrapeApp from '../Components/Scrape';

const BlandsPage = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="WEB-SCRAPER" />
            <ScrapeApp />
            <Footer />
        </div>
    )
};

export default BlandsPage;