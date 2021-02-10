import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Header} from './header';
import history from '../../history';

const mockState = {
  USER: {
    authorizationStatus: `UNAUTHORIZED`,
    email: `email@yandex.ru`
  }
};

it(`Should Header is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Header
                email={`email@yandex.ru`}
              />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
