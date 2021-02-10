import React from 'react';
import {connect} from "react-redux";
import {getActiveCity} from "../../store/app/selectors";
import * as Type from '../../prop-types';

const NoOffers = ({activeCity}) => {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            {`We could not find any property available at the moment in ${activeCity}`}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
};

NoOffers.propTypes = {
  activeCity: Type.ACTIVE_CITY.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

export {NoOffers};
export default connect(mapStateToProps)(NoOffers);
