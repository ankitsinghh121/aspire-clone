import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {Icons, Colors, Texts} from '../constants';
import {commaSeparated} from '../constants/helpers';
import {setLimit} from '../redux/dataReducer';

const styles = StyleSheet.create({
  containerstyle: {flex: 1},
  primaryView: {
    backgroundColor: Colors.secondary,
    ...StyleSheet.absoluteFill,
    height: 300,
  },
  mainView: {
    backgroundColor: Colors.control,
    marginTop: 200,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spendingLimitText: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    color: Colors.control,
    marginTop: 24,
  },
  contentView: {
    marginTop: 32,
    flex: 1,
    marginHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  firstrow: {flexDirection: 'row', alignItems: 'center'},
  setLimitText: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: 'AvenirNext-Medium',
    color: Colors.basic,
  },
  textInput: {
    marginLeft: 16,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    color: Colors.basic,
  },
  textInptContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: Colors.accent,
  },
  messageText: {
    fontSize: 13,
    fontFamily: 'AvenirNext-Regular',
    color: Colors.accentDark,
  },
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
  amount: {
    color: Colors.primary,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  amountButtonConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  amountButton: {
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 32,
    marginVertical: 32,
  },
  saveText: {
    fontFamily: 'AvenirNext-DemiBold',
    color: Colors.control,
    fontSize: 18,
  },
  primaryViewContent: {marginHorizontal: 24},
  backButton: {height: 24, width: 24},
});

const LimitSetting = props => {
  const amounts = [5000, 10000, 20000];
  const [amount, setAmount] = useState('');

  const onChangeText = text => {
    setAmount(text);
  };

  const onAmountPress = index => {
    setAmount(amounts[index]);
  };
  return (
    <SafeAreaView style={styles.containerstyle}>
      <StatusBar barStyle="light-content" />
      <View style={styles.primaryView}>
        <View style={styles.primaryViewContent}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.backButton}>
              <Icons.ArrowLeft fill={Colors.control} />
            </TouchableOpacity>
            <Icons.Home fill={Colors.primary} />
          </View>
          <Text style={styles.spendingLimitText}>Spending Limit</Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <View>
            <View style={styles.firstrow}>
              <Icons.PickupCar />
              <Text style={styles.setLimitText}>{Texts.weeklyLimit}</Text>
            </View>
            <View style={styles.textInptContainer}>
              <View style={styles.currencyView}>
                <Text style={styles.currencytext}>{Texts.singaporeDollar}</Text>
              </View>
              <View>
                <TextInput
                  style={styles.textInput}
                  value={commaSeparated(amount)}
                  keyboardType="numeric"
                  onChangeText={onChangeText}
                  returnKeyType="done"
                  placeholder="Enter an amount"
                  maxLength={15}
                />
              </View>
            </View>
            <Text style={styles.messageText}>{Texts.weeklyMeansText}</Text>
            <View style={styles.amountButtonConatiner}>
              <TouchableOpacity
                onPress={() => onAmountPress(0)}
                style={styles.amountButton}>
                <Text style={styles.amount}>
                  {Texts.singaporeDollar} {commaSeparated(amounts[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onAmountPress(1)}
                style={styles.amountButton}>
                <Text style={styles.amount}>
                  {Texts.singaporeDollar} {commaSeparated(amounts[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onAmountPress(2)}
                style={styles.amountButton}>
                <Text style={styles.amount}>
                  {Texts.singaporeDollar} {commaSeparated(amounts[2])}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (amount) {
                props.setLimit(amount);
                props.navigation.goBack();
              }
            }}
            style={styles.saveButton}>
            <Text style={styles.saveText}>{Texts.save}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setLimit: limit => dispatch(setLimit(limit)),
  };
}

export default connect(null, mapDispatchToProps)(LimitSetting);
