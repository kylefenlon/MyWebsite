import "./NavBar.css"
import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [colour, setColour] = useState(false);
    const changeColour = () => {
        if (window.scrollY >= 100) {
            setColour(true);
        } else {
            setColour(false)
        }
    };

    window.addEventListener("scroll", changeColour)

    return (
        <div class={colour ? "header header-bg" : "header"}>
            <Link to="/">
                <div class="main-title">KFenlon.com</div>
            </Link>
            <ul class="nav-items">
                <li>
                    <Link to="/MyWebsite">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                {/* <li>
                    <Link to="/contact">Contact</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavBar;