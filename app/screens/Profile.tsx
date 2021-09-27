import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ProfileProps {}

function Profile({}: ProfileProps): JSX.Element | null {
  return (
    <View style={styles.container}>
      <Text>This is the profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
