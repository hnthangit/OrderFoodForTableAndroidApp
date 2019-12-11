import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    // marginBottom: 100,
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    marginBottom: -10,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  detailImg: {
    backgroundColor: '#ffffff',
    width: '10%',
    height: '10%',
    position: 'absolute',
    marginTop: 20,
    top: 10,
    right: 0,
    bottom: 0,
    left: deviceWidth / 20,
    borderRadius: 10,
    // elevation: 10,
  },
  detailInfo: {
    backgroundColor: '#ffffff',
    width: deviceWidth * 0.8,
    height: 140,
    position: 'absolute',
    top: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'grey',
    borderColor: '#e0e0e0',
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
    paddingLeft: '30%',
    paddingRight: '20%',
    paddingTop: '10%',
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
