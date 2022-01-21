import { useLocation, Navigate } from 'react-router-dom';
import { isUserLogined } from '../services/auth';

export default function RequireAuth({ children }) {
  const location = useLocation();

  return isUserLogined() === true ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
}
