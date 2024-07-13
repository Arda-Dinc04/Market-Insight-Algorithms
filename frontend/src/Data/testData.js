export const BROKER_COLORS = {
  CHARLES_SCHWAB: '#C8E7FF',
  FIDELITY: '#e0f7e0',
  ROBINHOOD: '#f7f7e0',
};

export const CARD_TOP_COLORS = {
  FRES: '#5c6bc0',
  IONM: '#26a69a',
  PHIO: '#9575cd',
};


const dateSections = [
  {
    date: 'Jul 24',
    cards: [
      {
        title: 'FRES',
        price: '$0.33',
        ratio: '1 : 20',
        brokers: [
          { name: 'Charles Schwab', price: '$6.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$6.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.FRES,
      },
    ],
  },
  {
    date: 'Jul 25',
    cards: [
      {
        title: 'IONM',
        price: '$0.26',
        ratio: '1 : 10',
        brokers: [
          { name: 'Charles Schwab', price: '$4.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$5.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.IONM,
      },
      {
        title: 'PHIO',
        price: '$0.06',
        ratio: '1 : 9',
        brokers: [
          { name: 'Charles Schwab', price: '$6.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$6.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.PHIO,
      },
    ],
  },
  {
    date: 'Jul 26',
    cards: [
      {
        title: 'IONM',
        price: '$0.26',
        ratio: '1 : 10',
        brokers: [
          { name: 'Charles Schwab', price: '$4.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$5.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.IONM,
      },
      {
        title: 'PHIO',
        price: '$0.06',
        ratio: '1 : 9',
        brokers: [
          { name: 'Charles Schwab', price: '$6.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$6.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.PHIO,
      },
      {
        title: 'FRES',
        price: '$0.33',
        ratio: '1 : 20',
        brokers: [
          { name: 'Charles Schwab', price: '$6.50', bgColor: BROKER_COLORS.CHARLES_SCHWAB },
          { name: 'Fidelity', price: '$5.40', bgColor: BROKER_COLORS.FIDELITY },
          { name: 'Robinhood', price: '$6.00', bgColor: BROKER_COLORS.ROBINHOOD },
        ],
        topColor: CARD_TOP_COLORS.FRES,
      },
    ],
  },
];

export default dateSections;
