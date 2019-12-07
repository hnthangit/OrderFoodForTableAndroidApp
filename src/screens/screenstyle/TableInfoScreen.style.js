import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  btn_payment_d_none: {
    display: 'none',
  },
  btn_payment: {
    alignSelf: 'center',
    display: 'flex',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_alert_payment: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'white',
    height: '50%',
  },
});
