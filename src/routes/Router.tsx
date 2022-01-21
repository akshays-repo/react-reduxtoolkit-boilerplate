import { Routes, Route, Outlet } from 'react-router-dom';
import SignIn from '../features/auth';
import AppMainLayoutB from '../layouts/SidebarLayout';
import { appPrivateRouteWithSideNav } from './authRoute';
import RequireAuth from './RequireAuth';
import RestrictIfLogin from './ReStrictIfLogin';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={'/login'}
        element={
          <RestrictIfLogin>
            <SignIn />
          </RestrictIfLogin>
        }
      />

      <Route
        path={'/'}
        element={
          <RequireAuth>
            <>
              {' '}
              <Outlet />
            </>{' '}
          </RequireAuth>
        }
      >
        <Route path='/' element={<AppMainLayoutB />}>
          {appPrivateRouteWithSideNav.map((route) => (
            <Route path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
