import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { navBarContainer } from '../styles';

const pages = ['Home', 'New', 'Trending', 'Categories'];

function    ResponsiveAppBar() {
 

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl" sx={{...navBarContainer}}>
        <Toolbar disableGutters>
            <Box sx={{ flex: 1 }}>
              <img src='assets/images/logo.svg'/>
            </Box>
            <Box>
              {pages.map(page =>{
                  return <Button sx={{ mr:1, textTransform:"capitalize" }}><Typography variant="subtitle1">{page}</Typography></Button>
              })}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;