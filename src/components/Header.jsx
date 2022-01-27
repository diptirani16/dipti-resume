import React from 'react';
import { Container, AppBar, Toolbar, List, ListItemButton, ListItemText, Grid, IconButton, Typography } from '@mui/material';
import { Drawer, Divider, ListItem } from '@mui/material';
import { Dehaze, ChevronLeft } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    const listItem = [
        {
            "name": "Home",
            "route": "/"
        },
        {
            "name": "Education",
            'route': "/education"
        },
        {
            "name": "Certification",
            'route': "/certification"
        },
        {
            "name": "Projects",
            'route': "/projects"
        },
        {
            "name": "Technologies",
            'route': "/skills"
        },
        {
            "name": "Experience",
            'route': "/experience"
        },
        {
            "name": "Contact",
            'route': "/contact"
        }
    ]

    const [open, setOpen] = React.useState(false);
    const handleClick = (event) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" style={{ backgroundColor: '#1d2129' }} elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item md={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <List component="nav" aria-label="secondary mailbox folder" style={{ display: 'flex', flexDirection: 'row' }}>
                                    {listItem.map((item, index) => (
                                        <ListItemButton key={index} onClick={() => history.push(item.route)}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                                <IconButton aria-label="more" id="long-button" aria-controls="long-menu" aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick} >
                                    <Dehaze style={{ color: '#90a0d9' }} />
                                </IconButton>
                                <Drawer
                                    sx={{
                                        width: 240,
                                        flexShrink: 0,
                                        '& .MuiDrawer-paper': {
                                            width: 240,
                                            backgroundColor: "#bbb9b9"
                                        }
                                    }} variant="persistent" anchor="left" open={open} >
                                    <IconButton onClick={handleClose} sx={{display: 'flex', justifyContent: "space-between"}}>
                                        <div style={{display: 'flex', flexDirection: "column", alignItems: "start", paddingLeft: 8}}>
                                            <Typography variant="h5" color="black" sx={{ fontWeight: 800 }}>Dipti Rani</Typography>
                                            <Typography variant="caption" sx={{ fontWeight: 800, opacity: 1, color: "#5067b7" }}>Software Developer</Typography>
                                        </div>
                                        <ChevronLeft />
                                    </IconButton>
                                    <Divider sx={{p: 0.2, background: "linear-gradient(to right, #5067b7 , black)"}} />
                                    <List>
                                        {listItem.map((text, index) => (
                                            <div key={index}>
                                                <ListItem button onClick={() => {setOpen(false); history.push(text.route)}} >
                                                    <ListItemText primary={text.name} />
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        ))}
                                    </List>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
