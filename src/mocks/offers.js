import {OfferType} from "../const";

export default [{
  id: 1,
  city: `Amsterdam`,
  type: OfferType.APARTMENT,
  name: `Wood and stone place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: true,
  rating: 1,
  price: 100,
  bedroomAmount: 1,
  guestAmount: 1,
  coordinates: [52.3909553943508, 4.85309666406198],
  features: [`Dishwasher`, `Baby seat`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 0,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 1,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 2,
  city: `Amsterdam`,
  type: OfferType.HOTEL,
  name: `Only wood place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`],
  isFavorite: true,
  isPremium: false,
  rating: 2,
  price: 200,
  bedroomAmount: 2,
  guestAmount: 2,
  coordinates: [52.369553943508, 4.85309666406198],
  features: [`Dishwasher`, `Towels`, `Fridge`, `Heating`, `Washing machine`, `Wi-Fi`, `Coffee machine`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 2,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 3,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 4,
    date: `2020-10-06`,
    text: `Very badly`,
    rating: 1,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 3,
  city: `Amsterdam`,
  type: OfferType.HOUSE,
  name: `Only stone place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/apartment-02.jpg`],
  isFavorite: false,
  isPremium: false,
  rating: 3,
  price: 300,
  bedroomAmount: 3,
  guestAmount: 3,
  coordinates: [52.3909553943508, 4.929309666406198],
  features: [`Dishwasher`, `Heating`, `Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 5,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 4,
  city: `Amsterdam`,
  type: OfferType.ROOM,
  name: `Paper place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`, `/img/room.jpg`, `/img/apartment-03.jpg`],
  isFavorite: true,
  isPremium: true,
  rating: 4,
  price: 400,
  bedroomAmount: 4,
  guestAmount: 4,
  coordinates: [52.3809553943508, 4.939309666406198],
  features: [`Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: true
  },
  reviews: [{
    id: 6,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 5,
  city: `Cologne`,
  type: OfferType.HOUSE,
  name: `Only stone place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/apartment-01.jpg`],
  isFavorite: false,
  isPremium: false,
  rating: 3,
  price: 300,
  bedroomAmount: 3,
  guestAmount: 3,
  coordinates: [52.3909553943508, 4.85309666406198],
  features: [`Dishwasher`, `Heating`, `Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 5,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 6,
  city: `Cologne`,
  type: OfferType.ROOM,
  name: `Paper place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`, `/img/room.jpg`, `/img/apartment-03.jpg`],
  isFavorite: true,
  isPremium: true,
  rating: 4,
  price: 400,
  bedroomAmount: 4,
  guestAmount: 4,
  coordinates: [52.3809553943508, 4.939309666406198],
  features: [`Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: true
  },
  reviews: [{
    id: 6,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 7,
  city: `Brussels`,
  type: OfferType.APARTMENT,
  name: `Wood and stone place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: true,
  rating: 1,
  price: 100,
  bedroomAmount: 1,
  guestAmount: 1,
  coordinates: [52.3909553943508, 4.929309666406198],
  features: [`Dishwasher`, `Baby seat`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 0,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 1,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 8,
  city: `Brussels`,
  type: OfferType.HOTEL,
  name: `Only wood place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`],
  isFavorite: true,
  isPremium: false,
  rating: 2,
  price: 200,
  bedroomAmount: 2,
  guestAmount: 2,
  coordinates: [52.3809553943508, 4.939309666406198],
  features: [`Dishwasher`, `Towels`, `Fridge`, `Heating`, `Washing machine`, `Wi-Fi`, `Coffee machine`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 2,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 3,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 4,
    date: `2020-10-06`,
    text: `Very badly`,
    rating: 1,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 9,
  city: `Paris`,
  type: OfferType.APARTMENT,
  name: `Wood and stone place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: true,
  rating: 1,
  price: 100,
  bedroomAmount: 1,
  guestAmount: 1,
  coordinates: [52.369553943508, 4.85309666406198],
  features: [`Dishwasher`, `Baby seat`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 0,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 1,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 10,
  city: `Paris`,
  type: OfferType.HOUSE,
  name: `Only stone place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/apartment-01.jpg`],
  isFavorite: false,
  isPremium: false,
  rating: 3,
  price: 300,
  bedroomAmount: 3,
  guestAmount: 3,
  coordinates: [52.3909553943508, 4.85309666406198],
  features: [`Dishwasher`, `Heating`, `Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 5,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 11,
  city: `Hamburg`,
  type: OfferType.APARTMENT,
  name: `Wood and stone place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
  isFavorite: false,
  isPremium: true,
  rating: 1,
  price: 100,
  bedroomAmount: 1,
  guestAmount: 1,
  coordinates: [52.3809553943508, 4.939309666406198],
  features: [`Dishwasher`, `Baby seat`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 0,
    date: `2020-10-06`,
    text: `Good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 1,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 12,
  city: `Hamburg`,
  type: OfferType.HOUSE,
  name: `Only stone place`,
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  photos: [`img/apartment-01.jpg`],
  isFavorite: false,
  isPremium: false,
  rating: 3,
  price: 300,
  bedroomAmount: 3,
  guestAmount: 3,
  coordinates: [52.3909553943508, 4.85309666406198],
  features: [`Dishwasher`, `Heating`, `Washing machine`, `Wi-Fi`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 5,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
},
{
  id: 13,
  city: `Dusseldorf`,
  type: OfferType.HOTEL,
  name: `Only wood place`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  photos: [`img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-01.jpg`],
  isFavorite: true,
  isPremium: false,
  rating: 2,
  price: 200,
  bedroomAmount: 2,
  guestAmount: 2,
  coordinates: [52.369553943508, 4.85309666406198],
  features: [`Dishwasher`, `Towels`, `Fridge`, `Heating`, `Washing machine`, `Wi-Fi`, `Coffee machine`],
  host: {
    name: `Host`,
    avatar: `img/avatar-max.jpg`,
    isPro: false
  },
  reviews: [{
    id: 2,
    date: `2020-10-06`,
    text: `Very good`,
    rating: 4,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 3,
    date: `2020-10-06`,
    text: `Badly`,
    rating: 2,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  },
  {
    id: 4,
    date: `2020-10-06`,
    text: `Very badly`,
    rating: 1,
    user: {
      name: `User`,
      avatar: `img/avatar-max.jpg`
    }
  }
  ]
}
];
