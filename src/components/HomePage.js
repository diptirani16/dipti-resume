import React from 'react';
import { Grid, Typography, Button, IconButton, Card } from '@mui/material';
import { GitHub } from '@mui/icons-material';

function Home() {

    return (
        <>
            <Grid container flexDirection="column" alignItems="center" sx={{ mt: 15, p: 2 }} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" style={{ fontWeight: 'bolder', letterSpacing: '1px' }} component="div">Hi, I am <span style={{ color: "#90a0d9" }}>Dipti Rani.</span></Typography>
                    
                    <Typography variant="h4" style={{ fontWeight: 'bolder', letterSpacing: '1px', marginTop: '3%' }} component="div">Front End <span style={{ color: "#90a0d9" }}> Developer. </span></Typography>
                    
                    <Typography variant="body1" style={{  marginTop: '3%', letterSpacing: '1px' }}>
                        Ambitious and motivated self taught developer , looking to start a career in web development by building web applications and softwares . I am familiar to developing and deploying projects with various web technologies .
                    </Typography>
                </Grid>
                <Grid item sx={{ mt: 4,  }}>
                    <Button href="https://drive.google.com/file/d/1wFOrYl2QsqOW_OMBg-sIe7Kptcsi_Wlt/view?usp=sharing" target="_blank" variant="outlined" sx={{ padding: "2vh 6vw",  color: '#90a0d9', borderColor: '#90a0d9' }}>
                        Resume
                    </Button>
                    {/* <IconButton aria-label="delete" size="large"  href="https://github.com/diptirani16/" target="_blank">
                        <GitHub fontSize="inherit" style={{ color: 'white' }} />
                    </IconButton> */}
                </Grid>
            </Grid>
        </>
    )
}

export default Home;