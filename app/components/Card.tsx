import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {CardDataProps, width} from '../data';

import {MasterCard} from './Icons';

interface CardProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  item: CardDataProps;
  balance: string;
  cardNumber: string;
  name: string;
  expDate: string;
}

function Card({
  index,
  translateX,
  item,
  balance,
  cardNumber,
  expDate,
  name,
}: CardProps): JSX.Element | null {
  const reanimatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.25, 1, 0.25],
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      translateX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolate.CLAMP,
    );

    const cardWidth = interpolate(
      translateX.value,
      inputRange,
      [width * 0.8, width * 0.9, width * 0.8],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [{scale}],
      width: cardWidth,
    };
  }, []);

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.card, {backgroundColor: item.color}, reanimatedStyle]}>
        <View style={styles.head}>
          <View>
            <Text style={styles.current}>Current Balance</Text>
            <View style={styles.balanceContainer}>
              <View style={styles.usdContainer}>
                <Text style={styles.usd}>USD</Text>
              </View>
              <Text style={styles.balance}>{balance}</Text>
            </View>
          </View>
          <View style={styles.masterCard}>
            <MasterCard />
          </View>
        </View>
        <View>
          <Text style={styles.cardNumber}>
            **** **** **** {cardNumber.slice(14)}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.name}>{name}</Text>
          <View>
            <Text style={styles.exp}>Exp. Date</Text>
            <Text style={styles.date}>{expDate}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    height: '100%',
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usd: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  usdContainer: {
    padding: 10,
    backgroundColor: '#40b9fe',
    borderRadius: 8,
    marginRight: 5,
  },
  balance: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 17,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  masterCard: {
    width: 50,
    height: 30,
  },
  current: {
    color: '#FFF',
  },
  cardNumber: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
    color: '#FFF',
  },
  exp: {
    color: '#FFF',
  },
  date: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Card;
