import Title from '../../components/shared/Title/Title'
import LoginForm from 'components/modules/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors'

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();
    const handleLogin = data => {
      dispatch(login(data));
    };
  
    if (isLogin) {
      return <Navigate to="/contacts" />;
    }
    return (
        <div>
            <Title>Login page</Title>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
}

export default LoginPage;