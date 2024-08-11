 

 

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/system';


const StyledAppBar = styled(AppBar)({
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: 'darkblue',
  },
});

const Logo = styled('img')({
  height: '50px', // Adjust the height of the logo as needed
  marginRight: 'auto', // Pushes the links to the right
});

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Logo src="../assests/logo-car.jpg" alt="Road Wheels Logo" /> {/* Replace with your logo URL */}
        <Box sx={{ marginLeft: 'auto' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/testimonials">Testimonials</Button>
          <Button color="inherit" component={Link} to="/contact-us">Contact Us</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/carlist">CarList</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;




