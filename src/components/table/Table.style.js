import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  // container: {
  //   marginBottom: 10,
  //   marginTop: 10,
  //   backgroundColor: '#ffffff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // motban: {
  //   width: '100%',
  //   height: 200,
  //   borderWidth: 1,
  // },
  // koconguoi: {
  //   marginBottom: 10,
  //   marginTop: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // tableImg: {
  //   width: 100,
  //   height: 100,
  // },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  table: {
    width: deviceWidth / 2 - 10,
    height: deviceHeight / 4 - 30,
    // borderWidth: 1,
    // borderColor: ''?
  },
  tableImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderColor: 'rgb(244,67,54)',
    borderWidth: 2,
    // backgroundColor: 'rgb(244,67,54)',
  },
  tableText: {
    textAlign: 'center',
  },
  // conguoi: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },
  // koconguoi: {
  //   backgroundColor: '#ffffff',
  // },
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
