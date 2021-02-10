import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Path} from "../../const";
import history from "../../history";
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from "../private-route/private-route";

const App = () => {

  return (
    <Router history={history}>
      <Switch>

        <Route
          exact
          path={Path.MAIN}
          render={() => <MainPage/>}
        />

        <PrivateRoute
          exact
          path={Path.LOGIN}
          render={() => <LoginPage/>}
        />

        <PrivateRoute
          exact
          path={Path.FAVORITES}
          render={() => <FavoritesPage/>}
        />

        <Route
          exact
          path={`${Path.OFFER}/:offerId`}
          render={({match: {params: {offerId}}}) => {
            return <OfferPage
              id={Number(offerId)}/>;
          }}
        />

        <Route component={NotFoundPage}/>

      </Switch>
    </Router>
  );
};

export default App;
