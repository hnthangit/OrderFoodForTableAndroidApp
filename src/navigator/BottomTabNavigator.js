import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';
import OrderFoodScreen from '../screens/OrderFoodScreen';
import LoginScreen from '../screens/LoginScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
const DrawerNavigator = createBottomTabNavigator({
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
});

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
