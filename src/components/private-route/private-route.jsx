import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Path, AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/user/selectors";
import * as Type from '../../prop-types';


const PrivateRoute = ({authorizationStatus, path, exact, render}) => {
  if (authorizationStatus === AuthorizationStatus.AUTHORIZED && path === Path.LOGIN) {
    return <Redirect to={Path.MAIN} />;
  }

  if (authorizationStatus !== AuthorizationStatus.AUTHORIZED && path !== Path.LOGIN) {
    return <Redirect to={Path.LOGIN} />;
  }

  return (
    <Route
      path={path}
      exact={exact}
    >
      {render()}
    </Route>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: Type.AUTHORIZATION_STATUS.isRequired,
  path: Type.PATH.isRequired,
  exact: Type.EXACT.isRequired,
  render: Type.FUNCTION.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
