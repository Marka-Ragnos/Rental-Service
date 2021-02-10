import React from "react";
import {connect} from "react-redux";
import {City} from "../../const";
import {ActionCreator as AppActionCreator} from "../../store/app/app";
import {getActiveCity} from "../../store/app/selectors";
import * as Type from '../../prop-types';


const CityList = ({activeCity, onClick}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => {
          const itemClassName = `locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`;

          return (
            <li key={city} className="locations__item">
              <a className={itemClassName} onClick={() => onClick(city)}>
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  </div>
);

CityList.propTypes = {
  onClick: Type.FUNCTION.isRequired,
  activeCity: Type.ACTIVE_CITY.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => dispatch(AppActionCreator.setActiveCity(city)),
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
