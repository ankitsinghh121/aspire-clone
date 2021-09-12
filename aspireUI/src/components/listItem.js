import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {Colors} from '../constants';
const styles = StyleSheet.create({
  container: {flexDirection: 'row', flex: 1, height: 42},
  textsContainer: {flexDirection: 'column', marginHorizontal: 24, flex: 0.8},
  title: {
    fontSize: 14,
    fontFamily: 'AvenirNext-Medium',
    color: Colors.secondaryDark,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: 'AvenirNext-Regular',
    color: Colors.accentDark,
  },
});
const ListItem = ({title, subTitle, action, Icon, style, value}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {!!Icon && <Icon style={{flex: 0.1}} />}
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{title || ''}</Text>
        <Text style={styles.subTitle}>{subTitle || ''}</Text>
      </View>
      {!!action && (
        <Switch
          value={value}
          style={{alignItems: 'center', flex: 0.1}}
          onChange={action}
          trackColor={Colors.primary}
        />
      )}
    </View>
  );
};

export default ListItem;
