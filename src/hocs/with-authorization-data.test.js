import React from "react";
import renderer from "react-test-renderer";
import * as Type from '../prop-types';
import withAuthorizationData from "./with-authorization-data";

const testing = () => {};

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

const MockComponentWrapped = withAuthorizationData(MockComponent);

describe(`withAuthorizationData render correctly`, () => {
  it(`withAuthorizationData render correctly with authorization`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        email={`frontend@yandex.ru`}
        activeCity={`Paris`}
        password={123}
        onEmailChange={testing}
        onPasswordChange={testing}
        onLoginPageSubmit ={testing} >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withAuthorizationData render correctly without authorization`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeCity={`Paris`}
        onEmailChange={testing}
        onPasswordChange={testing}
        onLoginPageSubmit ={testing} >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
