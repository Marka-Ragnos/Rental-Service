import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {AuthorizationStatus} from "./const";
import createAPI from "./api";
import reducer from './store/reducer';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "./store/user/user";
import {Operation as OffersOperation} from "./store/offers/offers";
import App from './components/app/app';

const api = createAPI(() => store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED)));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuthorizationStatus());
store.dispatch(OffersOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
