import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review';


const reviewsMock = {
  id: 0,
  date: `2020-10-06`,
  text: `Good`,
  rating: 4,
  user: {
    name: `User`,
    avatar: `img/avatar-max.jpg`,
    isPro: false,
    id: 1
  }
};

it(`Should Review render correctly`, () => {
  const tree = renderer
      .create(
          <Review
            date={reviewsMock.date}
            text={reviewsMock.text}
            rating={reviewsMock.rating}
            user={reviewsMock.user}
          />
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
