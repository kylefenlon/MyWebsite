import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Link as MuiLink } from '@mui/material';
import BlandsLanding from '../images/BlandsSunglasses.png';
import BlandsCheckout from '../images/BlandsCheckout.png';
import BlandsStripe from '../images/BlandsStripe.png';
import BlandsStripeItems from '../images/StripeItems.png';

const BlandApp = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Card sx={{ maxWidth: 900, margin: 'auto' }}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Bland's Sunglasses
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={BlandsLanding}
                                alt="Bland's Sunglasses Landing"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={BlandsCheckout}
                                alt="Bland's Sunglasses Checkout"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                image={BlandsStripe}
                                alt="Bland's Stripe Integration"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={BlandsStripeItems}
                                alt="Bland's Stripe Items"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="body1" paragraph>
                            Bland's Sunglasses is an ecommerce store built for selling sunglasses.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            It allows users to buy sunglasses by adding them to their cart and then check out using Stripe.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This app was built using Bootstrap, JavaScript, React, Express, and Stripe.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            In order to get this project live I created an EC2 instance running Ubuntu & configured it to be publicly accessible.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I then installed and configured nginx.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I Used Certbot/Let’s Encrypt to install a TLS certificate to secure the website (and display https in the URL).
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Set up a subdomain and pointed it to the EC2 instance.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Created a bash script to deploy your code at the click of a button using Linux commands such as ‘scp’, ‘rsync’, and ‘ssh’.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Set up another sub-domain for the server api.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Used Nginx as a reverse proxy for the Express application so that I could set up a TLS certificate and forward web traffic to the app running on a different port.
                        </Typography>
                        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                component={MuiLink}
                                href="https://github.com/kylefenlon/StripeEcommerceStore"
                                variant="contained"
                                color="primary"
                            >
                                Github Repo
                            </Button>
                            <Button
                                component={MuiLink}
                                href="https://shop.kfenlon.com"
                                variant="outlined"
                                color="secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                DEMO
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default BlandApp;
