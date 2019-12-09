import {createDrawerNavigator} from 'react-navigation-drawer';
import {AuthorInfoStack} from '../navigator/StackNavigator';
import LogoutScreen from '../screens/LogoutScreen';
import {MainNav} from './MainNav';
import Drawerbar from '../components/drawerbar/Drawerbar';
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
    AuthorInfo: {
      screen: AuthorInfoStack,
      navigationOptions: {
        drawerLabel: 'Thông tin tác giả',
      },
    },
    LogoutScreen: {
      screen: LogoutScreen,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Đăng xuất',
      }),
    },
  },
  {
    initialRouteName: 'Index',
    contentComponent: Drawerbar,
  },
);

export default DrawerNavigator;
