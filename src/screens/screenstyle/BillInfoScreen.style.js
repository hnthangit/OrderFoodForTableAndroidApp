import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: deviceWidth,
    height: deviceHeight,
  },
  food: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    marginTop: 10,
    paddingTop: 5,
    height: 30,
    width: deviceWidth - 20,
    marginLeft: 10,
  },
  food_quantity: {
    flex: 2,
  },
  food_name: {
    flex: 6,
  },
  food_total: {
    flex: 2,
    alignItems: 'flex-end',
  },
  bill_info_top: {
    display: 'flex',
    flexDirection: 'row',
    width: deviceWidth,
  },
  bill_info_top_right: {
    marginLeft: deviceWidth - 250,
    color: '#adac7b',
  },
  bill_info_top_left: {
    color: '#adac7b',
  },
  text_in_food: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  icon_text_right: {
    flex: 1,
  },
  text_in_total: {
    // marginTop: 10,
    marginBottom: 12,
    marginLeft: 10,
    borderTopWidth: 1,
    // paddingTop: 10,
    // paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    width: deviceWidth - 20,
  },
  text_in_total_a: {
    flex: 5,
    fontSize: 25,
  },
  text_in_total_b: {
    // flex: 5,
    fontSize: 25,
    color: 'rgb(244,67,54)',
    justifyContent: 'flex-end',
    // display: 'flex',
  },
});
