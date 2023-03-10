import "./MainImage.css";
import IntroImg from "../images/software-photo.jpg"
import { Link } from "react-router-dom";

import React from 'react'

const MainImg = () => {
    return (
        <div class="hero">
            <div class="mask">
                <img class="intro-image" src={IntroImg} alt="IntroImg" />
            </div>
            <div class="content">
                <p class="my-name">Hi, my name is Kyle Fenlon.</p>
                <h1>Software Developer</h1>
                <div>
                    <Link to="/projects" class="btn">Projects</Link>
                    <Link to="/blog" class="btn-light">Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default MainImg;
