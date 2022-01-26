import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

function Skills() {

    const skillsList = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJS', 'ExpressJS', 'JavaScript Algorithm', 'Data Structure', 'MySQL', 'Unit testing', 'Functional testing', 'Git', 'Api Integration', 'C++', 'Docker', 'MongoDB', 'Bootstrap', 'Material UI']

    const buttonStyle = {
        margin: '2%',
        backgroundColor: 'rgb(36, 41, 51)',
        textTransform: 'none',
        padding: '1% 1.5%',
        cursor: 'default'
    }

    return (
        <>
            <Grid container maxWidth="md" sx={{ textAlign: 'center', margin: '5% auto' }}>
                <Grid item>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bolder', color: '#90a0d9', mt: 10 }} component="div">
                        TECHNOLOGIES
                    </Typography>
                
                    {skillsList.map(skill => {
                        return <Button variant="contained" style={buttonStyle}>{skill}</Button>
                    })
                    }

                </Grid>
            </Grid>
        </>
    )
}

export default Skills;