import React from "react";
import renderer from "react-test-renderer";
import withLoad from "./with-active-state";
import * as Type from '../prop-types';

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

const MockComponentWrapped = withLoad(MockComponent);

describe(`withLoad render correctly`, () => {
  it(`withLoad render correctly with flag true`, () => {
    const flag = true;
    const tree = renderer.create((
      <MockComponentWrapped
        isActive={flag}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withLoad render correctly without flag true`, () => {
    const flag = false;
    const tree = renderer.create((
      <MockComponentWrapped
        isActive={flag}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
