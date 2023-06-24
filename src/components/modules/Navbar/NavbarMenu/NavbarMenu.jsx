import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const pages = [
  { name: 'Home', link: '/' },
  // { name: 'Contacts', link: '/contacts' },
//   { name: 'User', link: '/user' },
];

const NavbarMenu = () => {
  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map(page => (
          <NavLink to={page.link} key={page.name}>
            {' '}
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              {page.name}
            </Button>
          </NavLink>
        ))}
      </Box>
    </Toolbar>
  );
};
export default NavbarMenu;
