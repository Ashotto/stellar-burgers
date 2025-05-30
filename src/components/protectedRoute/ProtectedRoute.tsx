import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import { Preloader } from '@ui';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children?: React.ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ 
  children, 
  onlyUnAuth = false 
}) => {
  const location = useLocation();
  const { user, isAuthChecked } = useAppSelector((state) => state.user);
  const background = location.state?.background;
  const from = location.state?.from || { pathname: '/' };

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    return (
      <Navigate
        replace
        to={from}
        state={{ background: location.state?.from?.background }}
      />
    );
  }

  if (!onlyUnAuth && !user) {
    return (
      <Navigate
        replace
        to="/login"
        state={{ from: location, background }}
      />
    );
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;