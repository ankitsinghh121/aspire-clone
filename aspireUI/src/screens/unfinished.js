/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icons, Colors} from '../constants';

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Icons.Home fill={Colors.primary} />
      <Text>Home!</Text>
    </View>
  );
};

const PaymentsScreen = () => {
  return (
    <View style={styles.main}>
      <Icons.Payments fill={Colors.primary} />
      <Text>Payments!</Text>
    </View>
  );
};

const CreditScreen = () => {
  return (
    <View style={styles.main}>
      <Icons.Credit fill={Colors.primary} />
      <Text>Credit!</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <Icons.Profile fill={Colors.primary} />
      <Text>Profile!</Text>
    </View>
  );
};

export {HomeScreen, PaymentsScreen, ProfileScreen, CreditScreen};
