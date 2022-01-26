import React from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@mui/material';

function Projects() {

    const cardStyle = {
        maxHeight: '30vh',
        backgroundColor: '#242933',
        color: '#bdbcbc'
    }

    return (
        <>
            <Typography variant="h5" sx={{ marginTop: '4%', fontWeight: 'bolder', textAlign: 'center', color: '#90a0d9', mt: 10 }} component="div">
                PROJECTS
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                <Grid item md={12} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                Back end Development and APIs
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                freeCodeCamp
                            </Typography>
                            <Button size="small" variant="outlined" sx={{ mt: 2 }} style={{ textTransform: 'none', color: '#90a0d9', borderColor: '#90a0d9' }}>See Credentials</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={12} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                Quality Assurance
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                freeCodeCamp
                            </Typography>
                            <Button size="small" variant="outlined" sx={{ mt: 2 }} style={{ textTransform: 'none', color: '#90a0d9', borderColor: '#90a0d9' }}>See Credentials</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={12} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                JavaScript Algorithms & Data Structures
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                freeCodeCamp
                            </Typography>
                            <Button size="small" variant="outlined" sx={{ mt: 2 }} style={{ textTransform: 'none', color: '#90a0d9', borderColor: '#90a0d9' }}>See Credentials</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={12} xs={12}>
                    <Card style={cardStyle} elevation={4}>
                        <CardContent sx={{ flex: '1 0 auto', pl: 6 }}>
                            <Typography component="div" sx={{ fontWeight: '800' }} variant="subtitle1">
                                Front End Libraries
                            </Typography>
                            <Typography variant="subtitle2" color="#737171" component="div">
                                freeCodeCamp
                            </Typography>
                            <Button size="small" variant="outlined" sx={{ mt: 2 }} style={{ textTransform: 'none', color: '#90a0d9', borderColor: '#90a0d9' }}>See Credentials</Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    )
}

export default Projects;