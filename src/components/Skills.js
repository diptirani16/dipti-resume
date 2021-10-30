import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Skills () {

    const skillsList = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'MySQL', 'Git', 'Api Integration', 'C++', 'Bootstrap', 'Material UI' ]

    const buttonStyle = {
        margin: '2%',
        backgroundColor: 'rgb(36, 41, 51)',
        textTransform: 'none'
    }

    return (
        <>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ fontWeight: 'bolder', letterSpacing: '1px', textAlign: 'center', color: '#90a0d9' }} component="div">
                    SKILLS
                </Typography>
                <Container maxWidth="sm" sx={{ margin: '5% auto' }}>
                    { skillsList.map(skill => {
                        return <Button variant="contained" style={buttonStyle}>{skill}</Button>
                        })
                    }
                </Container>
            </Container>
        </>
    )
}

export default Skills;