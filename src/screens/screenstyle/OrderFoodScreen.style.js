import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  //style phần search
  search: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginTop: 5,
  },
  //style search input
  search_input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: deviceWidth - 130,
    height: 30,
    borderRadius: 1000,
  },
  //style btn Xac nhan
  search_btn: {
    backgroundColor: '#ffffff',
    width: 80,
    height: 30,
  },
  search_text: {
    textAlign: 'center',
    paddingTop: 5,
  },
  //style maodal
  modal: {
    alignItems: 'stretch',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'white',
    height: '90%',
  },
  modal_food: {
    marginLeft: 3,
    width: deviceWidth * 0.9 - 5,
    height: 50,
    backgroundColor: '#ffffff',
  },
  modal_text: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  //style các nút dưới modal
  touch_btn: {
    height: '13%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //style nút chọn lại hết
  touch_btn_select_all: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //style 2 nút close và gọi món
  touch_btn_close_order: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn_btn_style: {
    backgroundColor: 'rgba(33,33,33 ,1)',
  },
  btn_title_style: {
    color: 'rgba(255,234,0 ,1)',
  },
});
