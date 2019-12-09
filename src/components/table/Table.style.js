import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    padding: 30,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43a1c9',
    flex: 1,
    width: deviceWidth / 2 - 20,
  },
  touch: {
    width: deviceWidth,
    flexWrap: 'wrap',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  motban: {
    width: deviceWidth / 2 - 20,
    height: 200,
    flexDirection: 'column',
  },
  koconguoi: {
    padding: 30,
    marginBottom: 10,
    marginTop: 10,
    width: deviceWidth / 2 - 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  tableImg: {
    width: 100,
    height: 100,
  },
  viewTable: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});
