import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: deviceWidth,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#43a1c9',
    // marginLeft: -120,
    //marginRight: 120,
    // backgroundColor: 'red',
    // backgroundColor: 'green',
    flex: 1,
  },
  searchBar: {
    // display: 'flex',
    // flexDirection: 'row',
  },
  searchBarInput: {
    // flex: 4,
    //width: '70%',
    // width: 'deviceWidth/3',
  },
  searchBarButton: {
    flex: 2,
    //width: '30%',
    // width: 'deviceWidth/7',
    // backgroundColor: 'red',
  },
  detail: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // backgroundColor: 'blue',
    // width: deviceWidth,
    flexDirection: 'row',
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
    // zIndex: 999999,
    borderRadius: 10,
    // opacity: 0.5,
    borderWidth: 1,
  },
  detailInfo: {
    // margin: 10,
    backgroundColor: '#ffffff',
    width: deviceWidth * 0.8,
    height: 140,
    position: 'absolute',
    top: 10,
    // zIndex: 0,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'grey',
  },
  detailQua: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    width: 40,
    height: 100,
    position: 'absolute',
    top: 10,
    right: deviceWidth / 20 + 4,
    // zIndex: 0,
    borderRadius: 100,
    marginTop: 20,
    // shadowColor: 'black',
    // shadowOffset: {width: 5, height: 10},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // left: -10,
  },
  // detailFood: {
  //   flex: 1,
  //   // backgroundColor: 'red',
  //   flexDirection: 'row',
  // },
  // detailText: {
  //   flex: 1,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },
  // detail: {
  //   width: deviceWidth,
  //   display: 'flex',
  //   flex: 1,
  //   flexDirection: 'row',
  //   marginTop: 10,
  // },
  // detailImage: {
  //   width: deviceWidth/2,
  //   borderWidth: 1,
  //   height: 200,
  // },
  // detailInfo: {
  //   width: deviceWidth/2,

  //   borderWidth:1,
  // },
  // detailQuatity: {
  //   width: deviceWidth/2,
  //   height: 30,
  //   // borderWidth: 1,
  //   flexDirection: 'row',
  // },
  // image: {
  //   width: deviceWidth/2,
  //   height: 150,
  // },
  // detailText: {
  //   textAlign: 'center',
  // },
  // detailButtonPlus: {
  //   alignItems: 'flex-start',

  // },
  // detailButtonMul: {

  // },
});
