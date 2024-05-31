import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ProfilePhoto from '../images/Profile-photo.png'
import DadGolf from '../images/Dad-Golf.png'
import SnowyMunro from '../images/Snowy-Munro.png'
import SunnyMunro from '../images/Sunny-Munro.png'
import TechTalk from '../images/Tech-Talk.png'
import '../CSS/About.css'


const About = () => {
    return (
        <div id="about" className="topAboutContainer">
            <div className="mainContainer">
                <div className="leftAbout">
                    <div className="heading">
                        <h1 className="mainHeadingAbout">
                            about.
                        </h1>
                    </div>
                    <div className="intro">
                        <p className="firstPara">
                            I'm a Software Developer from<br></br>
                            Glasgow, Scotland.
                        </p>
                    </div>
                    <div className="descriptionAbout">
                        <p className="secondPara">
                            Banging my head against the wall trying to
                            solve a coding issue is my idea of fun. However I guess for 'fun',
                            you will also find me golfing, working out, seeing friends/family
                            and travelling.
                        </p>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/kyle_fenlon/?hl=en"><FaInstagram size={30} style={{ color: 'black', marginRight: '1rem' }} /></a>
                        <a href="https://www.linkedin.com/in/kyle-fenlon-98b424262/"><FaLinkedin size={30} style={{ color: 'black', marginRight: '1rem' }} /></a>
                        <a href="https://github.com/kylefenlon"><FaGithub size={30} style={{ color: 'black', marginRight: '1rem' }} /></a>
                    </div>
                </div>
                <div className="rightAbout">
                    <img src={ProfilePhoto} alt='Profile' className="profilePhoto" />
                </div>
            </div>
            <div className="imagesContainer">
                <ul className="imageList">
                    <li className="image">
                        <img src={DadGolf} alt='display' className="smallImage" />
                    </li>
                    <li className="image">
                        <img src={SnowyMunro} alt='display' className="smallImage" />
                    </li>
                    <li className="image">
                        <img src={SunnyMunro} alt='display' className="smallImage" />
                    </li>
                    <li className="image">
                        <img src={TechTalk} alt='display' className="smallImage" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;