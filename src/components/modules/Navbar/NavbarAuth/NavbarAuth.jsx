import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavbarAuth = () => {
  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <NavLink to="/register">
          {' '}
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Register
          </Button>
        </NavLink>
        <NavLink to="/login">
          {' '}
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Login
          </Button>
        </NavLink>
      </Box>
    </Toolbar>
  );
};

export default NavbarAuth;
