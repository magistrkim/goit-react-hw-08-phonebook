import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;