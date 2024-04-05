import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="static" color='default'>
      <Toolbar>
        <Typography variant="h6" component="div">
          Frida Schoultz
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
