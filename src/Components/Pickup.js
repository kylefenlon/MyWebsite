import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Link as MuiLink } from '@mui/material';
import PickupLanding from '../images/Pickup-landing.png';
import PickupLanding2 from '../images/Pickup-landing-2.png';
import PickupLanding3 from '../images/pickup-landing-3.png';
import PickupAuth0 from '../images/pickup-auth0.png';
import JoinCommunity from '../images/join-community.png';
import PickupAdmin from '../images/community-admin.png';
import Community1 from '../images/community-1.png';
import Community2 from '../images/community-2.png';

const images = [
    PickupLanding,
    PickupLanding2,
    PickupLanding3,
    PickupAuth0,
    JoinCommunity,
    PickupAdmin,
    Community1,
    Community2,
];

const PickupApp = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Card sx={{ maxWidth: 1200, margin: 'auto' }}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Pickup - Clean up your community
                    </Typography>
                    <Grid container spacing={2}>
                        {images.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <CardMedia
                                    component="img"
                                    alt={`Pickup image ${index + 1}`}
                                    image={image}
                                    sx={{ height: 200 }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1" paragraph>
                            Pickup is a web application built with React and Java (Spring) for the capstone project of the CodeClan software professional development 16 week course.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            It allows communities to organise litter picking events and allows the users to track the litter collected in a leaderboard format.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            It was created in February/March 2023 by Kelsie Murphy, Kyle Fenlon, and Josh Montgomery.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This app was built with React, Tailwind-CSS, Java 8.0, Spring, and used an Amazon S3 Bucket.
                        </Typography>
                        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                component={MuiLink}
                                href="https://github.com/kelsiesmurphy/pickup"
                                variant="contained"
                                color="primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github Repo
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default PickupApp;
