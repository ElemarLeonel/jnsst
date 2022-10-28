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
import './index.css';

// import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from 'react-router-hash-link';


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
          <Typography variant="h6" noWrap component="h6" className="logo">
            <Avatar src={Logo} width="48" height="48" />
          </Typography>

          <Box className="box-nav">
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

            <Menu id="menu-appbar" className="menu-appbar"
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
              >
              {pages.map((item) => (
                <Link component="a" to={item.id} smooth>
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="secondary">
                      {item.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>

          </Box>

          <Typography className="logo-mobile" noWrap variant="h6"
            component="h6">
            <Avatar src={Logo} width="48" height="48" />
          </Typography>

          <Box className="box-nav-mobile">
            {pages.map((item) => (
              <Link component="a" to={item.id} smooth className="link-button">
                <Button key={item.name} onClick={handleCloseNavMenu}
                  className="button-instagram"
                  color="secondary"
                  sx={{ fontWeight: 600 }}
                  >
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

