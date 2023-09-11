import {Navigate, useLocation} from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/enums';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const location = useLocation();

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} state={location} />;
}

export default PrivateRoute;
