import "./NavBar.css"
import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { AppBar } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

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
                    <Link to="/">Home</Link>
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