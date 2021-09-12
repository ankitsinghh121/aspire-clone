import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Icons, Texts, Colors} from '../constants';
import {commaSeparated} from '../constants/helpers';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 24,
  },
  dcView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dcText: {
    color: Colors.control,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    marginTop: 24,
  },
  availBalanceView: {marginTop: 24},
  availBalanceText: {
    color: Colors.control,
    fontFamily: 'AvenirNext-Medium',
    fontSize: 14,
  },
  amountView: {marginTop: 12, flexDirection: 'row', alignItems: 'center'},
  currencyView: {
    backgroundColor: Colors.primary,
    paddingVertical: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  currencytext: {
    color: Colors.control,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
  },
  amountText: {
    color: Colors.control,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    marginLeft: 10,
  },
});

const AccountInfo = ({acccountBalance}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dcView}>
        <Text style={styles.dcText}>{Texts.debitCard}</Text>
        <Icons.Logo />
      </View>
      <View style={styles.availBalanceView}>
        <Text style={styles.availBalanceText}>{Texts.availableBalance}</Text>
      </View>
      <View style={styles.amountView}>
        <View style={styles.currencyView}>
          <Text style={styles.currencytext}>{Texts.singaporeDollar}</Text>
        </View>
        <Text style={styles.amountText}>{commaSeparated(acccountBalance)}</Text>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    acccountBalance: state.data.acccountBalance,
  };
}
export default connect(mapStateToProps)(AccountInfo);
