import { useSelector } from 'react-redux';
import Icon from 'components/shared/icon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import AdbIcon from '@mui/icons-material/Adb';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin)
  return (
    <AppBar position="static">
      <Container maxWidth="xl" display="flex" gap="20" >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            M-KIM
          </Typography>
          <NavbarMenu />
          {!isLogin && <NavbarAuth />}
          {isLogin && <NavbarUser />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
