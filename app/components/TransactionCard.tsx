import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {TransactionProps} from '../data';

interface TransactionCardProps extends TransactionProps {}

function TransactionCard({
  amount,
  color,
  description,
  image,
  name,
}: TransactionCardProps): JSX.Element | null {
  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[styles.imageContainer, {backgroundColor: `${color}1A`}]}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </View>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.amount, {color}]}>${amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    elevation: 5,
    margin: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: '#7f8790',
  },
  description: {
    color: '#bbbbbb',
    fontSize: 16,
    paddingTop: 5,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    height: '60%',
    width: '60%',
  },
  imageContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default TransactionCard;
