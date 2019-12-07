import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 30,
    marginBottom: 20,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43a1c9',
  },
  hide: {
    display: 'none',
  },
  image: {
    width: 100,
    height: 100,
  },
});
