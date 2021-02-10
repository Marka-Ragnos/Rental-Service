import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';
import * as Type from '../../prop-types';

const FavoritesList = ({offers = [], isLoadedFavoritesOffers}) => {

  return (
    <ul className="favorites__list">
      {offers.map(([city, сityOffers]) => (
        <FavoritesItem
          key={`favorites-item-${city}`}
          city={city}
          сityOffers={сityOffers}
          isLoadedFavoritesOffers={isLoadedFavoritesOffers}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: Type.FAVORITES_OFFERS.isRequired,
  isLoadedFavoritesOffers: Type.FLAG.isRequired,
};

export default FavoritesList;
