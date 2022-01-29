import React from 'react';
import { css, keyframes } from '@emotion/react';
import { Typography, Button, Grid, Divider } from '@mui/material';

const myEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

function Skills() {
    const animatedItem = css`animation: ${myEffect} 3000ms`;

    const skillsList = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJS', 'ExpressJS', 'JavaScript Algorithm', 'Data Structure', 'MySQL', 'Unit testing', 'Functional testing', 'Git', 'Api Integration', 'C++', 'Docker', 'MongoDB', 'Bootstrap', 'Material UI']

    const buttonStyle = {
        margin: '2%',
        background: 'linear-gradient(to bottom right, #90a0d9 , white)',
        color: 'black',
        textTransform: 'none',
        padding: '1% 1.5%',
        cursor: 'default'
    }

    return (
        <>
            <Grid container spacing={2} sx={{ pl: 4, mt: 8, ml: {md: 7, xs: -1} }} alignItems="center">
                <Grid item>
                    <Divider orientation="vertical" sx={{ background: "linear-gradient(#5067b7 , white)", p: 0.3, height: 35 }} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" color="#90a0d9" sx={{ ml: 0.5, fontWeight: 900 }}>Technologies</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{mb: 10}}>
                <Grid item css={animatedItem} sx={{width: 675, display: 'flex', justifyContent: "center", flexWrap: "wrap", mt: 8}} >
                    {skillsList.map(skill => {
                        return <Button variant="contained" style={buttonStyle}>{skill}</Button>
                    }) }
                </Grid>
            </Grid>
        </>
    )
}

export default Skills;