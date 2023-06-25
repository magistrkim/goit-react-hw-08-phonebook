import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import css from './navbar-user.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div className={css.wrapper}>
      <p>mango@mail.com {name}</p>
      <button className={css.btn}>Logout</button>
    </div>
  );
};

export default NavbarUser;
