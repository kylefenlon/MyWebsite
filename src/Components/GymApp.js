import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Link as MuiLink } from '@mui/material';
import PythonProject from '../images/PythonProject.png';

const GymApp = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Workout Builder
            </Typography>
            <Card sx={{ maxWidth: 900, margin: 'auto' }}>
                <CardMedia
                    component="img"
                    alt="Workout Builder"
                    height="500"
                    image={PythonProject}
                />
                <CardContent>
                    <Typography variant="body1" paragraph>
                        This was my first ever project that I built by myself from scratch. This is a web app created using Python and Flask which covers all of the CRUD functionality with SQL database integration.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I chose to build an app that allows you to create days and exercises and attach those exercises to certain days.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This allows you to create a full workout for each day that you make which then means you can build full weeks or months of workouts if you like.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I love the gym and working out so I really enjoyed building this and I will be continuing to work on this in the future to add more functionality and make it even better overall.
                    </Typography>
                    <Box sx={{ marginTop: 2 }}>
                        <Button
                            component={MuiLink}
                            href="https://github.com/kylefenlon/project.git"
                            variant="contained"
                            color="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default GymApp;
