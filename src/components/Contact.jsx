import React from 'react';
import { TextField, Grid, Button, Typography, Divider, Box } from '@mui/material';
import { Person, Email, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';

export default function Contact() {
    
    return(
        <>
        <Grid container spacing={2} sx={{ pl: 4, mt: 8}}>
            <Grid item>
                <Divider orientation="vertical" sx={{background: "white", p: 0.3, height: 30 }} flexItem/>
            </Grid>
            <Grid item>
                <Typography variant="h4" color="#90a0d9" sx={{ml: 1, fontWeight: 900}}>Contact</Typography>
            </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-around" sx={{p: 4}}>
            <Grid item xs={12} md={5} lg={5}>
                <TextField fullWidth id="outlined-basic" label="Enter your Name" variant="outlined" size="small" sx={{
                    backgroundColor: "white",
                    mt: 2
                }} />
                <TextField fullWidth id="outlined-basic" label="Enter Your Email" variant="outlined" size="small" sx={{
                    backgroundColor: "white",
                    mt: 2
                }} />
                <TextField fullWidth multiline 
                    inputProps={{
                        style: {
                            height: 100
                        }
                    }}
                    id="outlined-basic" label="Enter Message" variant="outlined" size="small" sx={{
                        backgroundColor: "white",
                        mt: 2
                    }} />
                    <Button variant="contained" sx={{mt: 4, mb: 4, bgcolor: "#5066b3"}}>Send</Button>
            </Grid>
            <Grid item xs={12} md={5} lg={5} >
                <Typography variant="h5" color="#90a0d9" sx={{fontWeight: 900, mb: 2, textAlign: {xs: "left", md: "right"} }}>Contact Details</Typography>
                <Divider style={{ background: 'white' }}/>
                <Box sx={{
                    display: "flex", 
                    justifyContent: {xs: "start", md: "end"}, 
                    flexDirection: {xs: 'row-reverse', md: 'row'}, 
                    marginTop: '2em'}}>
                    <Typography variant="subtitle1">Dipti Rani</Typography><Person sx={{ml: {xs: 0, md: 2}, mr: {xs: 2, md: 0}}}/>
                </Box>
                <Box sx={{
                    display: "flex", 
                    justifyContent: {xs: "start", md: "end"}, 
                    flexDirection: {xs: 'row-reverse', md: 'row'},  
                    marginTop: '0.5em'}}>
                    <Typography variant="subtitle1">gdipti642@gmail.com</Typography><Email sx={{ml: {xs: 0, md: 2}, mr: {xs: 2, md: 0}}}/>
                </Box>
                <Box sx={{
                    display: "flex", 
                    justifyContent: {xs: "start", md: "end"}, 
                    flexDirection: {xs: 'row-reverse', md: 'row'},  
                    marginTop: '0.5em'}}>
                    <Typography variant="subtitle1">diptirani16</Typography><GitHub sx={{ml: {xs: 0, md: 2}, mr: {xs: 2, md: 0}}}/>
                </Box>
                <Box sx={{
                    display: "flex", 
                    justifyContent: {xs: "start", md: "end"}, 
                    flexDirection: {xs: 'row-reverse', md: 'row'},  
                    marginTop: '0.5em'}}>
                    <Typography variant="subtitle1">dipti-rani</Typography><LinkedIn sx={{ml: {xs: 0, md: 2}, mr: {xs: 2, md: 0}}}/>
                </Box>
                <Box sx={{
                    display: "flex", 
                    justifyContent: {xs: "start", md: "end"}, 
                    flexDirection: {xs: 'row-reverse', md: 'row'},  
                    marginTop: '0.5em'}}>
                    <Typography variant="subtitle1">Katni, Madhya Pradesh, INDIA</Typography><LocationOn sx={{ml: {xs: 0, md: 2}, mr: {xs: 2, md: 0}}}/>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}
