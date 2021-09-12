/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Colors} from '../constants';

let {width} = Dimensions.get('window');

const PercentageBar = ({currentExpenditure, limit}) => {
  const percentage = (currentExpenditure / limit) * 100;
  width = width - 48;
  const [actualWidth, setWidth] = useState(width);
  const expensePercentage =
    percentage >= 100 ? '100%' : (actualWidth / 100) * percentage;
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'AvenirNext-Medium',
            color: Colors.basic,
          }}>
          Debit card spending limit
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'AvenirNext-DemiBold',
              color: Colors.primary,
            }}>
            ${currentExpenditure}
            {'  '}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'AvenirNext-Medium',
              color: Colors.accent,
            }}>
            | {'  '}${limit}
          </Text>
        </View>
      </View>

      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '100%',
            height: 15,
            marginVertical: 10,
            borderRadius: 10,
            borderColor: Colors.primaryLight,
            backgroundColor: Colors.primaryLight,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: expensePercentage || 0,
            height: 15,
            borderRadius: 10,
            backgroundColor: Colors.primary,
            position: 'absolute',
          }}
        />
      </View>
    </View>
  );
};
export default PercentageBar;
