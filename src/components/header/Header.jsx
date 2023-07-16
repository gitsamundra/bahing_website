import { 
    AppBar, Avatar, Box, Button, Container, 
    IconButton, MenuItem, Toolbar, 
    Typography, Menu
} from '@mui/material'
import Logo from '../../img/logo.png'
import useStyles from './style.js'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const classes = useStyles()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth='lg'>
            <AppBar position='static'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Avatar src={Logo} 
                            alt="Champhuri" 
                            sx={{ display: 
                                { xs: 'none', md: 'flex' }, 
                                mr: 1, width: '70px', height:'70px',
                                padding: '5px'
                            }} 
                        /> 
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{marginLeft: -3}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }, 
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink to='/' style={{padding: '10px'}}>Home</NavLink>
                                        <NavLink to='about-us' style={{padding: '10px'}}>About Us</NavLink>
                                        <NavLink to='gallery' style={{padding: '10px'}}>Gallery</NavLink>
                                        <NavLink to='contact' style={{padding: '10px'}}>Contact</NavLink>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to='/' className={classes.link}>Home</NavLink>
                                <NavLink to='about-us' className={classes.link}>About Us</NavLink>
                                <NavLink to='gallery' className={classes.link}>Gallery</NavLink>
                                <NavLink to='contact' className={classes.link}>Contact</NavLink>
                            </Button>
                        </Box>    
                        <Box sx={{ flexGrow: 0 }}>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography  textAlign="center">
                                        <NavLink to='/' className={classes.link}>Home</NavLink>
                                        <NavLink to='about-us' className={classes.link}>About Us</NavLink>
                                        <NavLink to='gallery' className={classes.link}>Gallery</NavLink>
                                        <NavLink to='contact' className={classes.link}>Contact</NavLink>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>   
                    </Toolbar>
                </Container>
            </AppBar>    
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}

export default Header