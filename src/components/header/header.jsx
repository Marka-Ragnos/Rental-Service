import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Path} from "../../const";
import {getEmail} from "../../store/user/selectors";
import * as Type from '../../prop-types';


const Header = ({email}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            className="header__logo-link header__logo-link--active"
            to={Path.MAIN}>
            <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={email ? Path.FAVORITES : Path.LOGIN}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">
                  {email ? email : `Sign in`}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  email: Type.EMAIL,
};

const mapStateToProps = (state) => ({
  email: getEmail(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
