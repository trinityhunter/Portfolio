const data = [
  {
    id: '1',
    title: 'Protege Mentorship App',
    description:
      'Helps the students to connect with a seniors, alumnis and mentors and access the resource center to guide them in all the aspects of college life.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671564532/portfolio/projects/Syntho/Screenshot_2022-12-20_at_21.26.17_1_c59hzo.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://apps.apple.com/us/app/syntho/id1615419392',
    },
    technologies: [
      '#MongoDB',
      '#reactJS',
      '#ExpressJS',
      '#NodeJS'
    ],
  },
  {
    id: '2',
    title: 'Debug Den',
    description:
      'Platform for developers to get help from a community of fellow developers, whether be it debugging or solving complex problems together.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671563302/portfolio/projects/minfin/Screenshot_2022-12-20_at_21.06.43_vl5h6k.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://apps.apple.com/us/app/minfin-currency-rates/id1574863878',
    },
    technologies: [
      '#MongoDB',
      '#reactJS',
      '#ExpressJS',
      '#NodeJS'
    ],
  },
  {
    id: '3',
    title: 'Stack OverFlow',
    description:
      'A public platform building the definitive collection of coding questions & answers and a community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671562261/portfolio/projects/fashion/Screenshot_2022-12-20_at_20.45.27_peyqly.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://expo.dev/@v_snaichuk/rn-fashion?serviceType=classic&distribution=expo-go',
      // repo: 'https://github.com/vsnaichuk/fashion-app',
    },
    technologies: [
      '#MongoDB',
      '#reactJS',
      '#ExpressJS',
      '#NodeJS'
    ],
  },
  {
    id: '4',
    title: 'Crypto Arsenal',
    description:
      'An online marketplace for all the Crypto Cuurencies available with React.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
      // repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
    },
    technologies: [
      '#reactJS',
      '#CoinGecko API'
    ],
  },
  {
    id: '5',
    title: 'Weather App',
    description:
      'A web platform for getting weather updates based upon your city.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://yourplaces-sv.netlify.app/',
      // repo: 'https://github.com/vsnaichuk/MERN-places',
    },
    technologies: [
      '#reactJS',
      '#OpenWeather API'
    ],
  },
  {
    id: '6',
    title: 'Stock Price Prediction using LSTM',
    description:
      'Using Sequential Models and LSTM to get an approximate value of Nifty50 prices.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://expo.dev/@v_snaichuk/online-shop-app',
      // repo: 'https://github.com/vsnaichuk/RN-shop',
    },
    technologies: [
      '#LSTM',
      '#Keras',
      '#Sequential Model'
    ],
  },
  {
    id: '7',
    title: 'Gold Price Prediction using Random Forest Regressor',
    description:
      'Using Random Forest Regressor Model to get an approximate hold of Gold Prices',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://expo.dev/@v_snaichuk/rn-places',
      // repo: 'https://github.com/vsnaichuk/RN-places',
    },
    technologies: [
      '# Random Forest Regressor',
      '# Gradio'
    ],
  },
  {
    id: '8',
    title: 'ReactJS Calculator',
    description:
      'A basic calculator on the web to get you fast on those calculations.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      // site: 'https://shopping-cart-sv.netlify.app/',
      // repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
    },
    technologies: [
      '#react'
    ],
  },
];

export default data;
