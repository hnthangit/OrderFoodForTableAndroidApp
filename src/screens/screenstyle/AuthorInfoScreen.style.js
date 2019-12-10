import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  author: {
    marginTop: 20,
    marginHorizontal: 10,
    // flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 3,
  },
  left_img: {
    width: (deviceWidth / 10) * 3 - 5,
    height: 150,
  },
  info: {
    flex: 6,
  },
  info_text: {
    marginLeft: 5,
  },
  info_text_name: {
    fontSize: 20,
    marginBottom: 5,
  },
  info_text_contact: {},
  button_more: {
    flex: 1,
    alignSelf: 'center',
  },
});
