import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-container">
                <div class="left">
                    <div class="location">
                        {/* <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} /> */}
                        <h4>
                            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            Glasgow, Scotland
                        </h4>
                    </div>
                    {/* <div class="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            07495-586565
                        </h4>
                    </div>
                    <div class="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            kyle@kfenlon.com
                        </h4>
                    </div> */}
                </div>
                <div class="right">
                    <h4>About me</h4>
                    <p>My name is Kyle Fenlon and I am from Scotland.
                        I am a junior software developer looking to build and develop
                        my software career.
                    </p>
                    <p>
                        I have just finished the Professional Software Development course ran by CodeClan in Glasgow Scotland. Throughout this course I further developed my skills in
                        Python, JavaScript and Java along with React, Spring, MySQL and MongoDB.
                    </p>
                    <p>
                        If you wish to contact me you can find my socials below.
                    </p>
                    <div class="social">
                        <a href="https://www.instagram.com/kyle_fenlon/?hl=en"><FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} /></a>
                        <a href="https://www.linkedin.com/in/kyle-fenlon-98b424262/"><FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} /></a>
                        <a href="https://github.com/kylefenlon"><FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer