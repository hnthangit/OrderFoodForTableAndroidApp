import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';
import OrderFoodScreen from '../screens/OrderFoodScreen';
import LoginScreen from '../screens/LoginScreen';

import TouchMenuIcon from '../components/touchmenuicon/TouchMenuIcon';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StackNavigator from './StackNavigator';
const DrawerNavigator = createDrawerNavigator({
  IndexScreen: {
    screen: IndexScreen,
    navigationOptions: {
      drawerLabel: 'Màn hình bắt đầu',
    },
  },

  //Can use name in here but i like label :)
  TableScreen: {
    screen: StackNavigator,

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

// const navigationOptionsHeader = ({navigation}) => {
//   return {
//     headerRight: (
//       <Button
//         onPress={() => navigation.toggleDrawer()}
//         title="Info"
//         color="#222"
//       />
//     ),
//   };
// };

export default DrawerNavigator;
