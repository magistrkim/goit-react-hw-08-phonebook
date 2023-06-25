import Title from '../../components/shared/Title/Title';
import RegisterForm from 'components/modules/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <Title>Register page</Title>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
