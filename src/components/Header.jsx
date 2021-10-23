import React from 'react';
import { Container, AppBar, Toolbar, List, ListItemButton, ListItemText } from '@mui/material';

function Header () {
    return (
        <>
            <Container fixed>
                        <AppBar position="fixed" color="transparent" elevation={0}>
                            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                                <List component="nav" aria-label="secondary mailbox folder" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <ListItemButton >
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="About" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Education" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Certification" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Project" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Skills" />
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemText primary="Contact" />
                                    </ListItemButton>
                                </List>
                            </Toolbar>
                        </AppBar>
                </Container>
        </>
    )
}

export default Header;
