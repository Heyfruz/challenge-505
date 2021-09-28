import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  WalletIcon,
  TransferIcon,
  MobileIcon,
  CardIcon,
} from '../components/Icons';

interface ServiceCardProps {
  name: string;
  backgroundColor: string;
  icon: string;
}

const SIZE = 55;

function ServiceCard({
  backgroundColor,
  name,
  icon,
}: ServiceCardProps): JSX.Element | null {
  function Icon() {
    if (icon === 'wallet') {
      return <WalletIcon />;
    }
    if (icon === 'transfer') {
      return <TransferIcon />;
    }
    if (icon === 'card') {
      return <CardIcon />;
    }
    if (icon === 'mobile') {
      return <MobileIcon />;
    }
    return null;
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.icon, {backgroundColor}]}>
        <Icon />
      </View>
      <Text style={[styles.name]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
  },
  icon: {
    height: SIZE,
    width: SIZE,
    padding: 15,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
  },
});

export default ServiceCard;
