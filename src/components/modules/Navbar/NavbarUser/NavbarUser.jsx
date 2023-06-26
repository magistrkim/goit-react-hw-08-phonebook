import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';
import css from './navbar-user.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout);
  };
  return (
    <div className={css.wrapper}>
      <p>{name}</p>
      <button className={css.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
