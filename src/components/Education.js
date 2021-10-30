import React from 'react';
import { Container, Card, Box, CardContent, Typography, CardMedia } from '@mui/material';
import ggpsLogo from '../assets/ggps-logo.png';
import kitsLogo from '../assets/kits-logo.png';

function Education() {

    const cardStyle = {
        display: 'flex', 
        backgroundColor: '#242933',
        margin: '5vh 2vw',
        padding: '2vw',
        color: '#bdbcbc'
    }

    return (
        <>
            <Container>
                <Typography variant="h4" style={{ fontWeight: 'bolder', letterSpacing: '1px', textAlign: 'center' }} component="div">EDUCATION</Typography>
                <Card style={cardStyle} elevation="5">
                <CardMedia component="img" sx={{ width: 151 }} image={kitsLogo} alt="GGPS" />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6  }}>
                            <Typography component="div" variant="h6">
                                Kavikulguru Institute of Technology and Science, Ramtek, Nagpur, Maharashtra
                            </Typography>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                Bachelor of Engineering - BE, Computer Technology
                            </Typography>
                            
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 6, pb: 1 }}>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                2019 - 2023
                            </Typography>
                        </Box>
                    </Box>
                    
                </Card>

                <Card style={cardStyle} elevation="5">
                <CardMedia component="img" sx={{ width: 151 }} image="https://www.stpaulkatni.edu.in/images/uploads/logo/3111_l4.png" alt="GGPS" />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6}}>
                            <Typography component="div" variant="h6">
                                St. Paul's Senior Secondary School, Katni, Madhya Pradesh
                            </Typography>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                11th - 12th, Maths & Science
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 6, pb: 1 }}>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                2017 - 2019
                            </Typography>
                        </Box>
                    </Box>
                    
                </Card>

                <Card style={cardStyle} elevation="5">
                <CardMedia component="img" sx={{ width: 151 }} image={ggpsLogo} alt="GGPS" />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6}}>
                            <Typography component="div" variant="h6">
                                M.D.N.G.G.P.S Jamune, Daltonganj, Jharkhand
                            </Typography>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                Nursery to 10th
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 6, pb: 1 }}>
                            <Typography variant="subtitle1" color="#737171" component="div">
                                2006 - 2017
                            </Typography>
                        </Box>
                    </Box>
                    
                </Card>

            </Container>
        </>
    )
}

export default Education;