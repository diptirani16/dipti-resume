import React from 'react';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import profilePhoto from '../assets/profilePhoto.JPG';
import { Email, Room, Instagram, GitHub, Twitter, LinkedIn } from '@mui/icons-material';


function Home() {

    const profilePhotoStyle = {
        width: '50%',
        border: '10px solid #151515',
        borderRadius: '50%',
        padding: '8px'
    }

    const typographyStyle = {
        fontWeight: 'bolder',
        letterSpacing: '1px'
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} style={{ margin: '10% 0' }}>
                    <Grid item lg={6}>
                        <img src={profilePhoto} alt="profilePhoto" loading="lazy" style={profilePhotoStyle} />
                    </Grid>
                    <Grid item lg={6} sx={{ mt: 4 }}>
                        <Typography variant="h3" style={typographyStyle} component="div" gutterBottom>
                            Dipti Rani
                        </Typography>
                        <Typography variant="h6" style={typographyStyle} component="div" gutterBottom>
                            FRONTEND DEVELOPER
                        </Typography>
                        <Box sx={{ fontSize: 14 }} component="span">
                            <Email size="small" sx={{ mr: 2, mt: 1 }} />kdipti.rani@gmail.com <br />
                            <Room size="small" sx={{ mr: 2, mt: 1 }} />Katni, Madhya Pradesh
                        </Box> <br />
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-around', width: '18vw' }}>
                            <IconButton sx={{ color: 'white' }} component="span">
                                <GitHub />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="span">
                                <LinkedIn />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="span">
                                <Twitter />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }} component="span">
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;