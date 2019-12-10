import React from 'react';
import TableScreen from '../screens/TableScreen';
import BottomTabNavigator from '../navigator/BottomTabNavigator';
import BillHistoryScreen from '../screens/BillHistoryScreen';
import AuthorInfoScreen from '../screens/AuthorInfoScreen';
import IndexScreen from '../screens/IndexScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import BillInfoScreen from '../screens/BillInfoScreen';
import {StackActions, NavigationActions} from 'react-navigation';

export const StackNavigator = createStackNavigator(
  {
    //Can use name in here but i like label :)
    TableScreen: {
      screen: TableScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Bàn',
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'rgba(245,245,245 ,1)',
        },
        headerLeft: (
          <Icon
            style={{marginLeft: 10}}
            size={33}
            name="menu"
            type="meterial"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
        headerRight: (
          //Đã bằng icon reload
          <Icon
            size={33}
            name="reload"
            type="material-community"
            onPress={() =>
              navigation.dispatch(
                StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({routeName: 'TableScreen'}),
                  ],
                }),
              )
            }
          />
        ),
      }),
    },

    OrderFood: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerTintColor: 'black',
        title: 'Thông tin bàn',
        headerStyle: {
          backgroundColor: 'rgba(245,245,245 ,1)',
        },
      },
    },
  },
  {
    initialRouteName: 'TableScreen',
  },
);

StackNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const AuthorInfoStack = createStackNavigator(
  {
    //Can use name in here but i like label :)
    AuthorInfoScreen: {
      screen: AuthorInfoScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Thông tin tác giả',
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'rgba(245,245,245 ,1)',
        },
        headerLeft: (
          <Icon
            size={33}
            name="menu"
            type="meterial"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'AuthorInfoScreen',
  },
);

export const BillHistoryStack = createStackNavigator({
  //Can use name in here but i like label :)
  BillHistory: {
    screen: BillHistoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Lịch sử hóa đơn',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'rgba(245,245,245 ,1)',
      },
      headerLeft: (
        <Icon
          size={33}
          name="menu"
          type="meterial"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
      headerRight: (
        //Thay bằng icon reload
        <Icon
          size={33}
          name="reload"
          type="material-community"
          onPress={() =>
            navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({routeName: 'BillHistory'}),
                ],
              }),
            )
          }
        />
      ),
    }),
  },
  BillInfo: {
    screen: BillInfoScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Chi tiết hóa đơn',
      headerTintColor: 'black',
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: 'rgba(245,245,245 ,1)',
      },
    }),
  },
});
BillHistoryStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export const IndexStack = createStackNavigator({
  //Can use name in here but i like label :)
  Index: {
    screen: IndexScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Trang chủ',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'rgba(245,245,245 ,1)',
      },
      headerLeft: (
        <Icon
          size={33}
          name="menu"
          type="meterial"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ),
    }),
  },
});
