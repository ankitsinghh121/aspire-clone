/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {DebitCard, ListItem, ProgressBar} from '../components';
import AccountInfo from '../components/accountInfo';
import {Colors, Icons, Texts} from '../constants';
import {commaSeparated} from '../constants/helpers';
import {fetchData, setLimit} from '../redux/dataReducer';

const styles = StyleSheet.create({
  containerstyle: {flex: 1},
  primaryView: {
    backgroundColor: Colors.secondary,
    ...StyleSheet.absoluteFill,
  },
  mainView: {
    backgroundColor: Colors.control,
    marginTop: 350,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
  },
  contentView: {marginHorizontal: 24, marginBottom: 32},
  listItemView: {marginTop: 32},
});

const DebitCardScreen = props => {
  React.useEffect(() => {
    props.fetchData();
  });

  const listItems = [
    {
      title: Texts.topUpAccount,
      subTitle: Texts.depositMoney,
      icon: Icons.Insight,
    },
    {
      title: Texts.weeklyLimit,
      subTitle: props.isLimitSet
        ? `${Texts.weeklyLimitIs} ${commaSeparated(props.limit)}`
        : Texts.havenSetLimit,
      icon: Icons.Meter,
      action: () => {
        if (props.isLimitSet) {
          return props.setLimit(0);
        }
        return props.navigation.navigate('SetLimit');
      },
      value: props.isLimitSet,
    },
    {
      title: Texts.freezeCard,
      subTitle: Texts.cardActive,
      icon: Icons.Freeze,
      action: () => {},
      value: false,
    },
    {
      title: Texts.deactivatedCard,
      subTitle: Texts.prevdeactivatedCards,
      icon: Icons.Deactivate,
    },
  ];

  if (props.fetchStatus === 0 || props.fetchStatus === 1) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.containerstyle}>
      <StatusBar barStyle="light-content" />
      <View style={styles.primaryView}>
        <AccountInfo amount={3000} />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={styles.contentView}>
            <View style={{marginTop: -100}}>
              <DebitCard />
            </View>

            <View style={styles.listItemView}>
              {props.isLimitSet && (
                <ProgressBar
                  currentExpenditure={props.currentExpenditure}
                  limit={props.limit}
                />
              )}
              {listItems.map((item, index) => (
                <ListItem
                  key={index.toString()}
                  title={item.title}
                  subTitle={item.subTitle}
                  Icon={item.icon}
                  style={{marginVertical: 16}}
                  action={item.action}
                  value={item.value}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    fetchStatus: state.data.fetchStatus,
    isLimitSet: state.data.expenses.isLimitSet,
    currentExpenditure: state.data.expenses.currentExpenditure,
    limit: state.data.expenses.limit,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    setLimit: limit => dispatch(setLimit(limit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DebitCardScreen);
