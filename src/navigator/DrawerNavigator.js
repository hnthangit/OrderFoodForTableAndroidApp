import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';
import OrderFoodScreen from '../screens/OrderFoodScreen';
import LoginScreen from '../screens/LoginScreen';

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
    },
  },
  OrderFoodScreen: {
    screen: OrderFoodScreen,
    navigationOptions: {
      drawerLabel: 'Test màn hình',
    },
  },
  LogoutScreen: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLabel: 'Đăng xuất',
    },
  },
});

export default DrawerNavigator;
