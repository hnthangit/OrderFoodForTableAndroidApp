import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
const DrawerNavigator = createDrawerNavigator({
  //Can use name in here but i like label :)
  TableScreen: {
    screen: TableScreen,

    //Name of item in drawer
    navigationOptions: {
      drawerLabel: 'Danh sách bàn',
    },
  },

  BillHistoryScreen: {
    screen: BillHistoryScreen,
    navigationOptions: {
      drawerLabel: 'Lịch sử hóa đơn',
    },
  },
  IndexScreen: {
    screen: IndexScreen,
    navigationOptions: {
      drawerLabel: 'Màn hình chính',
      headerStyle: {backgroundColor: '#4C3E54'},
    },
  },
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
