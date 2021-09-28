import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');

export interface CardDataProps {
  color: string;
  balance: string;
  name: string;
  expDate: string;
  cardNumber: string;
}

interface ServiceProps {
  name: string;
  color: string;
  icon: string;
}

export interface TransactionProps {
  name: string;
  description: string;
  image: number;
  amount: number;
  color: string;
}

export const card: CardDataProps[] = [
  {
    color: '#fdb144',
    balance: '248.7',
    name: 'One Achmad',
    expDate: '5/19',
    cardNumber: '5399 0000 1111 2222',
  },
  {
    color: '#4965fb',
    balance: '10076.32',
    name: 'One Achmad',
    expDate: '7/25',
    cardNumber: '5399 1111 1111 2222',
  },
  {
    color: '#4ab5ed',
    balance: '1028.9',
    name: 'One Achmad',
    expDate: '1/29',
    cardNumber: '5399 1111 0000 2222',
  },
];

export const service: ServiceProps[] = [
  {
    name: 'Wallet',
    color: '#ee525e',
    icon: 'wallet',
  },
  {
    name: 'Transfer',
    color: '#85cffa',
    icon: 'transfer',
  },
  {
    name: 'Pay',
    color: '#fbb244',
    icon: 'card',
  },
  {
    name: 'Top Up',
    color: '#50b450',
    icon: 'mobile',
  },
];

export const transaction: TransactionProps[] = [
  {
    name: 'Dribbble',
    amount: 80,
    color: '#E74D89',
    description: 'Payment Received',
    image: require('../assets/dribbble.png'),
  },
  {
    name: 'Google Pay',
    amount: 135,
    color: '#2DA94F',
    description: 'Payment Received',
    image: require('../assets/google_pay.png'),
  },
  {
    name: 'PayPal',
    amount: 5000,
    color: '#222D65',
    description: 'Payment Received',
    image: require('../assets/paypal.png'),
  },
  {
    name: 'Stripe',
    amount: 350,
    color: '#1A1918',
    description: 'Payment Received',
    image: require('../assets/stripe.png'),
  },
];
