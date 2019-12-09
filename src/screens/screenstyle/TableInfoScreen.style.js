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
    borderRadius: Math.round(deviceWidth + Dimensions.get('window').height) / 2,
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.2,
    borderColor: '#14e0da',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: deviceWidth - 100,
  },
  modal_alert_payment: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'white',
    height: '20%',
  },
  modal_alert_payment_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  // style btn
  btn: {
    marginRight: 20,
    paddingTop: 12.5,
    backgroundColor: '#14e0da',
    width: 70,
    height: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
  //style display food on table
  food_table: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  //style text alert
  textAlert: {
    fontSize: 20,
  },
  //style empty tabel
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  empty_text: {
    marginTop: deviceWidth / 1.5,
    fontSize: 30,
    color: '#cad4b4',
  },
  cardview: {
    backgroundColor: '#f0f58c',
  },
});
