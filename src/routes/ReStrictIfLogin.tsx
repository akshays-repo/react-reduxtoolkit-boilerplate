import { useLocation, Navigate } from 'react-router-dom';
import { isUserLogined } from '../services/auth';

export default function RestrictIfLogin({ children }) {
  const location = useLocation();

  return isUserLogined() === true ? (
    <Navigate to='/' replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}
