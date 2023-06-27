import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const pages = [
  { name: 'Home', link: '/', private: false },
  { name: 'Contacts', link: '/contacts', private: true },
];

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredPages = !isLogin ? pages.filter(page => !page.private) : pages;
  return (
    <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {filteredPages.map(page => (
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
