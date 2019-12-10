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
  tableImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderColor: 'rgb(244,67,54)',
    borderWidth: 2,
  },
  tableText: {
    textAlign: 'center',
  },
  tableImgconguoi: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'rgb(244,67,54)',
  },
  tableImgkoconguoi: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
