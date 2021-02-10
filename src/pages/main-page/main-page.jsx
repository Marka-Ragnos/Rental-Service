import React from 'react';
import {connect} from "react-redux";
import {EMPTY_CLASS} from '../../const';
import {getFilteredAndSortedOffers} from "../../store/offers/selectors";
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import MainContainer from '../../components/main-container/main-container';
import NoOffers from '../../components/no-offers/no-offers';
import * as Type from '../../prop-types';

const MainPage = ({offers}) => {

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!offers.length ? EMPTY_CLASS.MAIN : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList/>
        <div className="cities">
          <div className={`cities__places-container ${!offers.length ? EMPTY_CLASS.CITIES : ``} container`}>
            {offers.length ? <MainContainer/> : <NoOffers/>}
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: getFilteredAndSortedOffers(state),
});

MainPage.propTypes = {
  offers: Type.OFFERS_LIST,
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
