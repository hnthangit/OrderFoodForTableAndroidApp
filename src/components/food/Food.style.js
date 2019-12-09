import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    // margin: 10,
    marginBottom: -10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailImg: {
    backgroundColor: '#ffffff',
    width: 100,
    height: 100,
    position: 'absolute',
    marginTop: 20,
    top: 10,
    right: 0,
    bottom: 0,
    left: deviceWidth / 20,
    borderRadius: 10,
  },
  detailInfo: {
    backgroundColor: '#f0f58c',
    width: deviceWidth * 0.8,
    height: 140,
    position: 'absolute',
    top: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'grey',
  },
  detailQua: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    width: 50,
    height: 100,
    position: 'absolute',
    top: 10,
    right: deviceWidth / 20 + 4,
    // zIndex: 0,
    borderRadius: 100,
    marginTop: 20,
  },
  detailText: {
    textAlign: 'center',
    margin: 10,
    padding: 2,
  },
  detailImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  starStyle: {
    marginLeft: 110,
    // alignItems: 'center',
  },
});
