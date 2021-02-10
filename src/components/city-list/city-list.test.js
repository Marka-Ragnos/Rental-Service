import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import CityList from '../../components/city-list/city-list';

const NameSpace = {
  APP: `APP`,
};

const mockState = {
  [NameSpace.APP]: {
    activeCity: `Paris`,
    activeSortType: `popular`,
    activeOffer: null
  }
};
const testing = () => {};

it(`Should CityList render correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <CityList
              onClick={testing}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
