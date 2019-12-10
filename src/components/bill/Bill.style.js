import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth - 20,
  },
  bill: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: deviceWidth,
    height: 100,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    borderRadius: 10,
  },
  bill_sum: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  bill_text_sum: {
    paddingTop: 20,
    fontSize: 20,
  },
});
