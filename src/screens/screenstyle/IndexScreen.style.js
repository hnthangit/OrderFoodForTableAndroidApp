import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  // style bao ngoài toàn bộ
  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view_card: {
    width: deviceWidth / 2 - 10,
    height: deviceHeight / 3 - 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    // borderWidth: 1,
    // marginHorizontal: 10,
  },
  image: {
    width: deviceWidth / 2 - 10,
    height: deviceWidth / 2,
    marginRight: 5,
  },
  text: {
    // fontSize: 20,
    // marginTop: 5,
    textAlign: 'center',
  },
});
