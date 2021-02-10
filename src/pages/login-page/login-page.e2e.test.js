import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {extend} from "../../utils";
import {City} from "../../const";
import {LoginPage} from "./login-page";

configure({adapter: new Adapter()});

const testing = () => { };
const testMocks = {
  activeCity: City.AMSTERDAM,
  email: `reality@yandex.ru`,
  password: `6666`,
  onEmailChange: testing,
  onPasswordChange: testing,
  onLoginPageSubmit: testing
};

describe(`e2e test: LoginPage component`, () => {
  it(`should call onEmailChange with email`, () => {
    const email = `frontend@mail.ru`;
    const onEmailChange = jest.fn();

    shallow(<LoginPage {...extend(testMocks, {onEmailChange})}><div/></LoginPage>)
      .find(`.login__input[type="email"]`).simulate(`change`, {target: {value: email}});

    expect(onEmailChange).toHaveBeenCalledTimes(1);
    expect(onEmailChange).toHaveBeenNthCalledWith(1, email);
  });

  it(`should call onPasswordChange with password`, () => {
    const password = `7777`;
    const onPasswordChange = jest.fn();

    shallow(<LoginPage {...extend(testMocks, {onPasswordChange})}><div/></LoginPage>)
      .find(`.login__input[type="password"]`).simulate(`change`, {target: {value: password}});

    expect(onPasswordChange).toHaveBeenCalledTimes(1);
    expect(onPasswordChange).toHaveBeenNthCalledWith(1, password);
  });

  it(`should call onSubmit with data`, () => {
    const email = `email`;
    const password = `8888`;
    const preventDefault = jest.fn();
    const onLoginPageSubmit = jest.fn();

    shallow(<LoginPage {...extend(testMocks, {email, password, onLoginPageSubmit})}><div/></LoginPage>)
      .find(`.login__form`).simulate(`submit`, {preventDefault});

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onLoginPageSubmit).toHaveBeenCalledTimes(1);
    expect(onLoginPageSubmit).toHaveBeenNthCalledWith(1, {email, password});
  });
});
