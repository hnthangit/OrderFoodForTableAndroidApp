import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  table: {
    width: deviceWidth / 2 - 10,
    height: deviceHeight / 4 - 70,
  },
  tableText: {
    textAlign: 'center',
  },
  tableImg: {
    width: deviceWidth / 4,
    height: deviceHeight / 10,
    // height: deviceHeight /2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
