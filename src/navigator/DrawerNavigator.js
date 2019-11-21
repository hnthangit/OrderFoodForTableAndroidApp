import LoginScreen from '../screens/LoginScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {StackNavigator} from './StackNavigator';
import {MainNav} from './MainNav';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
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
        drawerIcon: ({tintColor}) => (
          <Icon name="list-ul" type="ionicons" color={tintColor} size={24} />
        ),
      },
    },
    LogoutScreen: {
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: 'Đăng xuất',
        drawerIcon: ({tintColor}) => (
          <Icon
            name="sign-out-alt"
            type="ionicons"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Index',
  },
);

export default DrawerNavigator;
