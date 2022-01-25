import React from 'react';
import { Container, AppBar, Toolbar, List, ListItemButton, ListItemText, Grid, Menu, MenuItem, IconButton } from '@mui/material';
import { Dehaze } from '@mui/icons-material';

function Header() {

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                                        <ListItemButton key={index} onClick={() => window.location = `${item.route}`}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                                <IconButton aria-label="more" id="long-button" aria-controls="long-menu" aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick} >
                                    <Dehaze style={{ color: '#90a0d9' }}/>
                                </IconButton>
                                <Menu id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: 80 * 4.5,
                                            width: '20ch',
                                            backgroundColor: '#242933',
                                            color: '#bdbcbc'
                                        },
                                    }} >
                                    {listItem.map((item, index) => (
                                        <MenuItem key={index} selected={item.name === 'Pyxis'} onClick={() => window.location = `${item.route}`}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
