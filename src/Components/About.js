import React from "react";
import '../CSS/About.css'

const About = () => {
    return (
        <div className="mainContainer">
            <div className="left">
                <div className="heading">
                    <h1 className="mainHeadingAbout">about.</h1>
                </div>
                <div className="intro">
                    <p className="firstPara">Hello there!</p>
                </div>
                <div className="description">
                    <p className="secondPara">Hello there!</p>
                </div>
            </div>
            <div className="right">
                {/* insert image */}
            </div>
        </div>
    )
}

export default About;