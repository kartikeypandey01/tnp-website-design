import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from 'react-router-dom';
import "../Home components/Navbar.css";


const pages = ['Home', 'Dashboard', 'Profile'];
const topage = ['/','dashboard','profile'];
const settings = ['Edit Profile', 'Settings'];
const userName = 'Kartikey Pandey';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logo = props.name;
  
 

  return (

    <AppBar position="sticky" style={{backdropFilter: 'blur(20px)'}}>
      <Container maxWidth="xl" sx={{px: {md:'30px', xs:'15px'}}}>
        <Toolbar disableGutters sx={{minHeight:{ xs:'40px',md:'55px'}}}>
        <RocketLaunchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,color: "orange" }} />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {logo}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={topage[index]} style={{textDecoration: 'none',color:'inherit'}}>
                  <Typography textAlign="center" >{page}</Typography></NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <RocketLaunchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,color: "orange" }} />
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              
              color: 'inherit',
              textDecoration: 'none',
            }}
          >{logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
            <NavLink to={topage[index]} style={{textDecoration: 'none'}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: .5, color: 'white', display: 'block',textTransform: 'initial' }}
              >
                {page}
              </Button>
            </NavLink>
            ))}
          </Box>          
            <Box>
            <IconButton
              size="large"
              aria-label="Search"
             
              aria-haspopup="true"
              
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, mr: '15px' }}>     
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            > <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{color: "orange"}}/>
              </Badge>
            </IconButton>
            
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{mr: 2,
              fontSize: 12,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {userName}
          </Typography>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '3em', left:".9em", color: ''}}
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
            ><MenuItem  sx={{display: {xs: 'flex', sm: 'none'}}}><Badge badgeContent={17} color="error"><Typography>Notifications</Typography></Badge></MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{justifyContent: 'center'}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <NavLink to={'login'} style={{textDecoration: 'none',color:'inherit'}}>
              <MenuItem sx={{justifyContent: 'center'}}><Typography>Logout</Typography></MenuItem></NavLink>
            </Menu> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
