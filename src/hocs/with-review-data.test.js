import React from "react";
import renderer from "react-test-renderer";
import withReviewData from "./with-review-data";
import * as Type from '../prop-types';

const testing = () => { };

const flag = true;

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: Type.MOCK_COMPONENT.isRequired,
};

const MockComponentWrapped = withReviewData(MockComponent);

describe(`withReviewData render correctly`, () => {
  it(`withReviewData render correctly ReviewForm with text and rating`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        text={`An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`}
        rating={4.5}
        id={1}
        disabled={flag}
        error={`error`}
        onTextChange={testing}
        onRatingChange={testing}
        onReviewFormSubmit={testing}
        onFormValuesReset={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withReviewData render correctly ReviewForm without text and rating`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        id={1}
        disabled={flag}
        error={`error`}
        onTextChange={testing}
        onRatingChange={testing}
        onReviewFormSubmit={testing}
        onFormValuesReset={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
