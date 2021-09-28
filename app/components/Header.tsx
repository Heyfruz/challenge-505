import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Geolocation from '@react-native-community/geolocation';

import {Search} from './Icons';

import {apiKey} from '../data';

interface LocationProps {
  country: string;
  state: string;
}

function Header(): JSX.Element | null {
  const [location, setLocation] = useState<LocationProps>({
    country: '',
    state: '',
  });
  const height = useHeaderHeight();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const lat = info.coords.latitude;
        const lng = info.coords.longitude;
        let country = '';
        let state = '';

        //THE API FILE WON'T BE AVAILABLE SO PLEASE GENERATE AN API KEY FROM https://account.mapbox.com/
        //AN ALTERNATIVE TO THIS IS TO GET THE DEVICE IP AND CHECK THE IP LOCATION USING IPSTACK

        async function getLocation() {
          try {
            const response = await fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${apiKey}`,
            );
            const result = await response.json();
            const place = result?.features[0].context;

            //CHECK TO SEE IF ANY OF THE VALUE RETURNS UNDEFINED WHICH IS POSSIBLE IF THE USER LOCATION
            //IS SET TO THE OCEAN OR ANTARCTICA

            if (place[place.length - 1]?.text !== undefined) {
              country = place[place.length - 1]?.text;
              setLocation({
                country,
                state,
              });
              if (place[place.length - 2]?.text !== undefined) {
                state = place[place.length - 2]?.text;
                setLocation({
                  country,
                  state,
                });
              }
            }
          } catch (error) {
            country = 'Something went wrong';
            setLocation({
              country,
              state,
            });
          }
        }

        getLocation();
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0,
      },
    );
  }, []);

  const {state, country} = location;

  return (
    <View style={[styles.container, {height}]}>
      <View>
        <Text style={[styles.hello]}>Hello</Text>
        <View style={{flexDirection: 'row'}}>
          {state.length >= 1 ? (
            <Text style={[styles.location]}>{state.slice(0, 15)}</Text>
          ) : null}
          {country.length >= 1 ? (
            <Text style={[styles.location]}> {country}</Text>
          ) : null}
        </View>
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
    fontSize: 17,
  },
});

export default Header;
