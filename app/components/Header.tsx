import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import {Search} from './Icons';

interface HeaderProps {
  location: string;
}

function Header({location}: HeaderProps): JSX.Element | null {
  const height = useHeaderHeight();

  return (
    <View style={[styles.container, {height}]}>
      <View>
        <Text style={[styles.hello]}>Hello</Text>
        {location.length >= 1 ? (
          <Text style={[styles.location]}>{location}</Text>
        ) : null}
      </View>
      <View style={[styles.icon]}>
        <Search />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingHorizontal: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  hello: {
    fontSize: 15,
  },
  location: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Header;
