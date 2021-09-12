import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {Icons, Colors, Texts} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  toggleMaskView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: Colors.control,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginRight: 10,
  },
  toggleContentContainerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggletextView: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: 'AvenirNext-DemiBold',
    marginLeft: 5,
  },
  dcContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
  },
  dcContentContainer: {margin: 24},
  aspireLogoContainer: {flexDirection: 'row', justifyContent: 'flex-end'},
  nameStyle: {
    marginVertical: 24,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 22,
    color: Colors.control,
  },
  cardNumber: {
    color: Colors.control,
    fontFamily: 'AvenirNext-DemiBold',
    marginRight: 24,
    fontSize: 16,
  },
  cardNumberView: {flexDirection: 'row'},
  validityView: {flexDirection: 'row', marginTop: 15},
  visaLogo: {alignSelf: 'flex-end'},
});
const DebitCard = ({cardNumber, nameOnCard, validity, cvv}) => {
  const [isMasked, setCardDetailsMasked] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCardDetailsMasked(!isMasked)}
        style={styles.toggleMaskView}>
        <View style={styles.toggleContentContainerView}>
          <Icons.Eye />
          <Text style={styles.toggletextView}>
            {isMasked ? Texts.showCardnumber : Texts.hideCardNumber}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dcContainer}>
        <View style={styles.dcContentContainer}>
          <View style={styles.aspireLogoContainer}>
            <Icons.AspireLogo />
          </View>
          <Text style={styles.nameStyle}>{nameOnCard}</Text>
          <View style={styles.cardNumberView}>
            <Text style={styles.cardNumber}>
              {isMasked ? 'XXXX' : cardNumber.slice(0, 4)}
            </Text>
            <Text style={styles.cardNumber}>
              {isMasked ? 'XXXX' : cardNumber.slice(4, 8)}
            </Text>
            <Text style={styles.cardNumber}>
              {isMasked ? 'XXXX' : cardNumber.slice(8, 12)}
            </Text>
            <Text style={styles.cardNumber}>{cardNumber.slice(12, 16)}</Text>
          </View>
          <View style={styles.validityView}>
            <Text style={styles.cardNumber}>Thru: {validity}</Text>
            <Text style={styles.cardNumber}>CVV: {isMasked ? '***' : cvv}</Text>
          </View>
          <Icons.VisaLogo style={styles.visaLogo} />
        </View>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  const {
    data: {
      cardDetails: {nameOnCard, cardNumber, validity, cvv},
    },
  } = state;
  return {nameOnCard, cardNumber, validity, cvv};
}
export default connect(mapStateToProps)(DebitCard);
