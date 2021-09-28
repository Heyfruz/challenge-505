import React from 'react';
import {StyleSheet, View, Dimensions, Text, FlatList} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const emptyData: [] = [];
const renderNullItem = () => null;

import {card, service, transaction} from '../data';

import {Card, ServiceCard, TransactionCard, Header} from '../components';

const {width, height} = Dimensions.get('window');

function Home(): JSX.Element | null {
  const aref = useAnimatedRef<Animated.ScrollView>() as any;
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  function Body() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.ScrollView
            ref={aref}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={scrollHandler}
            scrollEventThrottle={1}>
            {card.map((item, index) => (
              <Card
                {...{item, index, translateX}}
                balance={item.balance}
                cardNumber={item.cardNumber}
                name={item.name}
                expDate={item.expDate}
                key={index}
              />
            ))}
          </Animated.ScrollView>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Services</Text>
          <View style={styles.services}>
            {service.map((item, i) => {
              return (
                <ServiceCard
                  key={i}
                  name={item.name}
                  backgroundColor={item.color}
                  icon={item.icon}
                />
              );
            })}
          </View>
          <Text style={styles.title}>Recent Transaction</Text>
          <FlatList
            data={transaction}
            keyExtractor={i => i.name}
            renderItem={({item}) => {
              return (
                <TransactionCard
                  amount={item.amount}
                  name={item.name}
                  description={item.description}
                  color={item.color}
                  image={item.image}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <Header location="" />
      <FlatList
        data={emptyData}
        renderItem={renderNullItem}
        ListFooterComponent={Body}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  body: {
    padding: 20,
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a4554',
  },
});

export default Home;
