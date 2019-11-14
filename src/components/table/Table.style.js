import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    padding: 30,
    marginBottom: 10,
    marginTop: 10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43a1c9',
    flex: 1,
  },
});
