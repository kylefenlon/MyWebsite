import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import WorkCard from '../Components/WorkCard';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="PROJECTS" />
            <WorkCard />
            <Footer />
        </div>
    )
};

export default Projects;