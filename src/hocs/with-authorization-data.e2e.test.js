import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withAuthorizationData from "./with-authorization-data";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const MockComponentWithAuthorizationData = withAuthorizationData(MockComponent);

const testMocks = {
  email: ``,
  password: ``
};

describe(`e2e test: withAuthorizationData HOC`, () => {

  it(`should pass email`, () => expect(
      shallow(<MockComponentWithAuthorizationData {...testMocks}/>).props().email
  ).toBe(``));

  it(`should pass password`, () => expect(
      shallow(<MockComponentWithAuthorizationData {...testMocks}/>).props().password
  ).toBe(``));

  it(`should change email`, () => {
    const email = `email`;
    const wrapper = shallow(<MockComponentWithAuthorizationData {...testMocks}/>);
    wrapper.props().onEmailChange(email);
    expect(wrapper.props().email).toBe(email);
  });

  it(`should change password`, () => {
    const password = `4444`;
    const wrapper = shallow(<MockComponentWithAuthorizationData {...testMocks}/>);
    wrapper.props().onPasswordChange(password);
    expect(wrapper.props().password).toBe(password);
  });
});
