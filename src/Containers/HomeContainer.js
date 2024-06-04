import React from "react";
import About from '../Components/About.js'
import Projects from '../Components/Projects.js'
import Blog from '../Components/Blog.js'
import '../CSS/HomeContainer.css'

const HomeContainer = () => {
    return (
        <>
            <About />
            <Projects />
            <Blog />
        </>
    )
}

export default HomeContainer