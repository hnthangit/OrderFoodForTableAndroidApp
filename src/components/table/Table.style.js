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
    // position: 'absolute',
    // top: 10,
    // right: 1,
    // left: 0,
    // bottom: 0,
    // flexDirection: 'row',
  },
  touch: {
    width: deviceWidth,
    backgroundColor: 'red',
    flexWrap: 'wrap',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  motban: {
    width: deviceWidth / 2 - 20,
    height: 200,
    backgroundColor: 'green',
    flexDirection: 'column',
  },
  koconguoi: {
    padding: 30,
    marginBottom: 10,
    marginTop: 10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
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
