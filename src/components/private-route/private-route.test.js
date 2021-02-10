import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Path, AuthorizationStatus} from "../../const";
import {PrivateRoute} from "./private-route";

const testing = () => {};

describe(`PrivateRoute render`, () => {
  it(`PrivateRoute with authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={Path.FAVORITES}
              exact={true}
              authorizationStatus={AuthorizationStatus.AUTHORIZED}
              onFavoriteButtonClick={testing}
              render={testing}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PrivateRoute without authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={Path.LOGIN}
              exact={true}
              authorizationStatus={AuthorizationStatus.UNAUTHORIZED}
              onFavoriteButtonClick={testing}
              render={testing}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
