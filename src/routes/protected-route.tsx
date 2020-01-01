import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import * as ROUTES from 'src/routes/routes';

type Props = RouteProps & {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
};

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }: Props) => {
  // TODO: Use this to determine if the user is authed
  let user = false;
  const renderFn = (props: RouteComponentProps) => {
    if (!user) {
      return <Redirect to={ROUTES.LOGIN} />;
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={renderFn} />;
};

export default ProtectedRoute;
