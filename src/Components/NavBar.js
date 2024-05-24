import { useState, useEffect } from "react"
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
import App from "../App"
import CssBaseline from "@mui/material/CssBaseline";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const [colour, setColour] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = () => setClick(!click);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const changeColour = () => {
        if (window.scrollY >= 100) {
            setColour(true);
        } else {
            setColour(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColour);
        return () => {
            window.removeEventListener("scroll", changeColour);
        };
    }, []);

    return (
        <>
            {/* <CssBaseline /> */}
            <AppBar position="fixed" sx={{
                background: colour
                    ? 'transparent'
                    : 'linear-gradient(to bottom right, #09203f 0%, #537895 100%)',
                transition: 'background-color 0.5s ease'
            }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            KFenlon.com
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem sx={{ fontSize: '1.25rem' }} component={Link} to="/">Home</MenuItem>
                        <MenuItem sx={{ fontSize: '1.25rem' }} component={Link} to="/projects">Projects</MenuItem>
                        <MenuItem sx={{ fontSize: '1.25rem' }} component={Link} to="/blog">Blog</MenuItem>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>Projects</MenuItem>
                            <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>Blog</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )

}




export default NavBar;