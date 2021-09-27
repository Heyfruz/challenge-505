import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabRoutes} from './NavType';

import {Home, Profile, Settings} from '../screens';

import {HomeIcon, UserIcon, SettingsIcon} from '../components';
import {Text} from 'react-native';

const {Navigator, Screen} = createBottomTabNavigator<TabRoutes>();

export default function TabNavigator(): JSX.Element {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return <HomeIcon {...{color}} />;
          }
          if (route.name === 'Profile') {
            return <UserIcon {...{color}} />;
          }
          if (route.name === 'Settings') {
            return <SettingsIcon {...{color}} />;
          }
          return null;
        },
        tabBarLabel: ({color}) => {
          return <Text style={{color: color, padding: 10}}>{route.name}</Text>;
        },
        tabBarStyle: {
          height: 60,
          padding: 20,
        },
        headerShown: false,
      })}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}
