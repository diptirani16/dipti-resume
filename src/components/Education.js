import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Education() {

    const cardStyle = {
        height: '25vh',
        backgroundColor: '#242933',
        color: '#bdbcbc'
    }

    return (
        <>
            <Typography variant="h5" style={{ fontWeight: 'bolder', textAlign: 'center', color: '#90a0d9' }} component="div">EDUCATION</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item md={6} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography variant="subtitle2" sx={{ mb: 2 }} color="#737171" component="div">
                                2019 - 2023
                            </Typography>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                Kavikulguru Institute of Technology and Science, Ramtek, Nagpur, Maharashtra
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                Bachelor of Engineering - BE, Computer Technology
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography variant="subtitle2" sx={{ mb: 2 }} color="#737171" component="div">
                                2017 - 2019
                            </Typography>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                St. Paul's Senior Secondary School, Katni, Madhya Pradesh
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                Higher Secondary Cerificate (HSC), Science, Computer Science
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default Education;