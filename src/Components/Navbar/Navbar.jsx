import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color :'black'}}>
            Course FeedBack App
          </Typography>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Home</Link></Button>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/login'}>Login</Link></Button>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'black'}} to={'/dashboard'}>Dashboard</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar