import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import NotFoundPage from './not-found-page';


it(`Should NotFoundPage render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <NotFoundPage />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
