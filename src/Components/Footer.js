import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#222', color: '#fff', padding: '2rem' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                        <Typography variant="h6">Glasgow, Scotland</Typography>
                    </Box>
                    {/* Uncomment these lines if you want to include phone and email */}
                    {/* <Box display="flex" alignItems="center" mb={2}>
                        <FaPhone size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                        <Typography variant="h6">07495-586565</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '1rem' }} />
                        <Typography variant="h6">kyle@kfenlon.com</Typography>
                    </Box> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>About me</Typography>
                    <Typography variant="body1" paragraph>
                        My name is Kyle Fenlon and I am from Scotland.
                        I am a junior software developer looking to build and develop
                        my software career.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I have just finished the Professional Software Development course ran by CodeClan in Glasgow Scotland. Throughout this course I further developed my skills in
                        Python, JavaScript and Java along with React, Spring, MySQL and MongoDB.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        If you wish to contact me you can find my socials below.
                    </Typography>
                    <Box display="flex" mt={2}>
                        <IconButton component="a" href="https://www.instagram.com/kyle_fenlon/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} style={{ color: '#fff' }} />
                        </IconButton>
                        <IconButton component="a" href="https://www.linkedin.com/in/kyle-fenlon-98b424262/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: '#fff' }} />
                        </IconButton>
                        <IconButton component="a" href="https://github.com/kylefenlon" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: '#fff' }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
