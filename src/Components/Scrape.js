import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import AdimoScrape from '../images/adimo-scrape.png';
import InitialScrape from '../images/initial-scrape-code.png';
import WhiskeyScrape from '../images/whiskey-code.png';

const images = [
    { src: AdimoScrape, alt: 'Adimo Scrape' },
    { src: InitialScrape, alt: 'Initial Scrape' },
    { src: WhiskeyScrape, alt: 'Whiskey Scrape' },
];

const ScrapeApp = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Card sx={{ maxWidth: 1200, margin: 'auto' }}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Web Scraping Task
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={AdimoScrape}
                                alt="Adimo Scrape"
                                sx={{ marginBottom: 2 }}
                            />
                            <Typography variant="body1" paragraph>
                                For a take home task during an interview I was tasked with scraping a website that the company had built.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                The goal was to scrape the website for certain details about the products shown and then convert that data into JSON format in another file.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                The code below is the solution I came up with.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={InitialScrape}
                                alt="Initial Scrape"
                                sx={{ marginBottom: 2 }}
                            />
                            <Typography variant="body1" paragraph>
                                After completing this task I was then asked to scrape another website that was not built by the same company. However, this website had firewall protection.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Trying to scrape this website did not seem to be possible as the website is behind CloudFlare security, so I decided to copy the fetch request from the network tab in Chrome so that the headers are also included to try and get around CloudFlare's security but still did not work.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                I was still getting the 403 error so I decided to copy the HTML page source code into a file and then used the scraper on that file and managed to get the details asked for by the task.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={WhiskeyScrape}
                                alt="Whiskey Scrape"
                                sx={{ marginBottom: 2 }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ScrapeApp;
