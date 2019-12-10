import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {IndexStack, StackNavigator, BillHistoryStack} from './StackNavigator';
import {Icon} from 'react-native-elements';

export const MainNav = createBottomTabNavigator(
  {
    IndexScreen: {
      screen: IndexStack,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" type="meterial" color={tintColor} size={24} />
        ),
      },
    },

    TableScreen: {
      screen: StackNavigator,
      navigationOptions: {
        tabBarLabel: 'Danh sách bàn',
        tabBarIcon: ({tintColor}) => (
          <Icon name="list" type="meterial" color={tintColor} size={24} />
        ),
      },
    },

    BillHistoryScreen: {
      screen: BillHistoryStack,
      navigationOptions: {
        tabBarLabel: 'Lịch sử hóa đơn',
        tabBarIcon: ({tintColor}) => (
          <Icon name="history" type="meterial" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'IndexScreen',
    order: ['IndexScreen', 'TableScreen', 'BillHistoryScreen'],
    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      activeTintColor: 'rgba(255,234,0 ,1)',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'rgba(33,33,33 ,1)',
      },
    },
  },
);
