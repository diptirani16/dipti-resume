import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

function Home() {

    return (
        <>
            <Grid container flexDirection="column" alignItems="center" sx={{ mt: 15, p: 2 }} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" style={{ fontWeight: 'bolder', letterSpacing: '1px' }} component="div">Hi, I am <span style={{ color: "#90a0d9" }}>Dipti Rani.</span></Typography>
                    
                    <Typography variant="h4" style={{ fontWeight: 'bolder', letterSpacing: '1px', marginTop: '3%' }} component="div">Front End <span style={{ color: "#90a0d9" }}> Developer. </span></Typography>
                    
                    <Typography variant="body1" style={{  marginTop: '3%', letterSpacing: '1px' }}>
                        Ambitious and motivated self taught developer, looking to start a career in web development by building web applications and softwares. I am familiar to developing and deploying projects with various web technologies.
                    </Typography>
                </Grid>
                <Grid item sx={{ mt: 4  }}>
                    <Button href="#" target="_blank" variant="outlined" sx={{ padding: "2vh 6vw",  color: '#90a0d9', borderColor: '#90a0d9' }}>
                        Download CV
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;