import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {Tab, theme} from './app/navigation';
import {StatusBar} from 'react-native';

function App(): JSX.Element | null {
  return (
    <NavigationContainer {...{theme}}>
      <Tab />
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
    </NavigationContainer>
  );
}

export default App;
