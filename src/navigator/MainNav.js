import React from 'react-native';
import createBottomNavigator, {
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import {IndexStack, StackNavigator, BillHistoryStack} from './StackNavigator';

export const MainNav = createBottomTabNavigator({
  IndexScreen: {
    screen: IndexStack,
    navigationOptions: {
      tabBarLabel: 'Màn hình bắt đầu',
    },
  },

  TableScreen: {
    screen: StackNavigator,
    navigationOptions: {
      tabBarLabel: 'Danh sách bàn',
    },
  },

  BillHistoryScreen: {
    screen: BillHistoryStack,
    navigationOptions: {
      tabBarLabel: 'Lịch sử hóa đơn',
    },
  },
});
