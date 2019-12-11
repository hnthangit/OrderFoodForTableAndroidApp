import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  btn_payment_d_none: {
    display: 'none',
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
    backgroundColor: 'rgba(33,33,33 ,1)',
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
    textAlign: 'center',
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
    color: '#bdbdbd',
  },
  cardview: {
    backgroundColor: '#f0f58c',
    margin: 10,
  },
});
