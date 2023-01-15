import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SecondImage from '../Components/SecondImage';
import AboutContent from '../Components/BlogContent';

const Blog = () => {
    return (
        <div>
            <NavBar />
            <SecondImage heading="BLOG" />
            <AboutContent />
            <Footer />
        </div>
    )
};

export default Blog;