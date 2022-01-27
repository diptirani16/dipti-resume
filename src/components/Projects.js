import React from 'react';
import { Grid, Typography, Card, CardContent, Button, CardHeader, CardMedia, CardActions, Divider } from '@mui/material';
import train from './assets/Train-pana.svg';
import expense from './assets/Refund-bro.svg';
import covid from './assets/Charts-bro.svg';

function Projects() {

    return (
        <>
            <Grid container spacing={2} sx={{ pl: 4, mt: 8, ml: {md: 7, xs: -1} }} alignItems="center">
                <Grid item>
                    <Divider orientation="vertical" sx={{ background: "linear-gradient(#5067b7 , white)", p: 0.3, height: 35 }} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" color="#90a0d9" sx={{ ml: 0.5, fontWeight: 900 }}>Projects</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
            <Grid item>
                    <Card sx={{ maxWidth: 345, height: 425, m: 4, background: "linear-gradient(#90a0d9 , white)", borderRadius: 4 }} elevation={4}>
                        <CardMedia sx={{pt: 0.5}} component="img" height="180" image={covid} alt="covid" />
                        <CardHeader sx={{ pb: 0 }} 
                            titleTypographyProps={{ variant: 'h6'}} 
                            subheaderTypographyProps={{ variant: 'subtitle2'}} 
                            title="Covid19 India" subheader="Jan 2022" />
                        <CardContent sx={{ pb: 0 }}>
                            <Typography variant="body2" color="text.secondary">
                                A web application that shows the daily updates of covid cases in India and it's different regions. It gives you the graph of daily updates of cases.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Technologies: HTML5, CSS3, JavaScript, ReactJS, MaterialUI
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: "end" }}>
                            <Button sx={{ color: "#5067b7", borderColor: "#5067b7" }} variant="outlined" href="https://github.com/diptirani16/covid19-india" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 345, height: 425, m: 4, background: "linear-gradient(#90a0d9 , white)", borderRadius: 4 }} elevation={4}>
                        <CardMedia sx={{pt: 0.5}} component="img" height="180" image={train} alt="Train" />
                        <CardHeader sx={{ pb: 0 }} 
                            titleTypographyProps={{ variant: 'h6'}} 
                            subheaderTypographyProps={{ variant: 'subtitle2'}} 
                            title="Indian Railway Routes" subheader="Sep 2021" />
                        <CardContent sx={{ pb: 0 }}>
                            <Typography variant="body2" color="text.secondary">
                                A web application used to check the routes of different trains running in India based on their category.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Technologies: HTML5, CSS3, JavaScript, ReactJS, MaterialUI
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: "end" }}>
                            <Button sx={{ color: "#5067b7", borderColor: "#5067b7" }} variant="outlined" href="https://github.com/diptirani16/Indian-Railway" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 345, height: 425, m: 4, background: "linear-gradient(#90a0d9 , white)", borderRadius: 4 }} elevation={4}>
                        <CardMedia sx={{pt: 0.5}} component="img" height="180" image={expense} alt="expense" />
                        <CardHeader sx={{ pb: 0 }} 
                            titleTypographyProps={{ variant: 'h6'}} 
                            subheaderTypographyProps={{ variant: 'subtitle2'}} 
                            title="Expense Manager" subheader="Sep 2021" />
                        <CardContent sx={{ pb: 0 }}>
                            <Typography variant="body2" color="text.secondary">
                                A web application that manages your daily incomes and expenses and give you the details of the same.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Technologies: HTML5, CSS3, JavaScript, ReactJS, MaterialUI
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: "end" }}>
                            <Button sx={{ color: "#5067b7", borderColor: "#5067b7" }} variant="outlined" href="https://github.com/diptirani16/Expense-Manager" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Projects;