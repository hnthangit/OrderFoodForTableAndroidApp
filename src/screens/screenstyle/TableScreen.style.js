import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: deviceWidth,
  },
  // view: {
  //   width: 200,
  //   backgroundColor: 'white',
  // },
  // view: {
  //   width: deviceWidth / 2 - 15,
  //   height: 500,
  // },
});
