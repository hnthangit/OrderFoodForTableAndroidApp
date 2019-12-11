import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    width: deviceWidth / 2 - 10,
    height: deviceHeight / 4 - 20,
    borderWidth: 1,
  },
});
