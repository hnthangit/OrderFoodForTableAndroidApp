import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {IndexStack, StackNavigator, BillHistoryStack} from './StackNavigator';
import {Icon} from 'react-native-elements';
<<<<<<< HEAD

export const MainNav = createBottomTabNavigator(
  {
    IndexScreen: {
      screen: IndexStack,
      navigationOptions: {
        tabBarLabel: 'Màn hình bắt đầu',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" type="meterial" color={tintColor} size={24} />
=======
export const MainNav = createBottomTabNavigator(
  {
    IndexScreen: {
      screen: IndexStack,
      navigationOptions: {
        tabBarLabel: 'Màn hình bắt đầu',
        // tabBarIcon: ({tintColor}) =>(<Icon name="home" size={24} color="#900" />)
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
>>>>>>> b0fd236c6216d64a562b4d2b2fc40d9ac25c7a74
        ),
      },
    },

<<<<<<< HEAD
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
=======
    BillHistoryScreen: {
      screen: BillHistoryStack,
      navigationOptions: {
        tabBarLabel: 'Lịch sử hóa đơn',
        tabBarIcon: ({tintColor}) => (
          <Icon name="history" type="meterial" color={tintColor} size={24} />
        ),
      },
    },
>>>>>>> b0fd236c6216d64a562b4d2b2fc40d9ac25c7a74
  },
  {
    initialRouteName: 'IndexScreen',
    order: ['IndexScreen', 'TableScreen', 'BillHistoryScreen'],
    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    },
  },
);
