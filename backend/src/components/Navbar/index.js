import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem
}
  from '@mui/material';

// import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from 'react-router-hash-link';

import './index.css';

import Logo from '../../assets/logotipojn.png';

// const pages = ['Recursos', 'Equipe', 'Contato'];

const pages = [
  {
    name: 'Home',
    id: '/'
  },
  {
    name: 'Recursos',
    id: '/#features'
  },
  {
    name: 'Equipe',
    id: '/#team'
  },
  {
    name: 'Contato',
    id: '/#contact'
  }
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="primary" component="nav" id="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Avatar src={Logo} width="48" height="48" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
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
              }}>
              {pages.map((item) => (
                <Link component="a" to={item.id} smooth>
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="secondary">{item.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Avatar src={Logo} width="48" height="48" />
          </Typography>
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' },
            justifyContent: "flex-end"
          }}>
            {pages.map((item) => (
              <Link component="a" to={item.id} smooth>
                <Button key={item.name} onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block', fontWeight: 700 }}
                  color="secondary">
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

