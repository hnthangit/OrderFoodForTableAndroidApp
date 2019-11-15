import LoginScreen from '../screens/LoginScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {StackNavigator, BillHistoryStack, IndexStack} from './StackNavigator';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';
import {MainNav} from './MainNav';
const DrawerNavigator = createDrawerNavigator(
  {
    Index: {
      screen: MainNav,
      // navigationOptions: {
      //   drawerLabel: 'Trang chủ',
      // },
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: () => null,
        };
      },
    },
    Table: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: 'Danh sách bàn',
      },
    },
    LogoutScreen: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: 'Đăng xuất',
      },
    },
  },
  {
    initialRouteName: 'Index',
  },
);

export default DrawerNavigator;
