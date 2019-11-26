import React from 'react';
import OrderFoodScreen from '../screens/OrderFoodScreen';
import TableInfoScreen from '../screens/TableInfoScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
const BottomTabNavigator = createBottomTabNavigator(
  {
    TableInfoScreen: {
      screen: TableInfoScreen,
      navigationOptions: {
        tabBarLabel: 'Chi tiết',
        tabBarIcon: ({tintColor}) => (
          <Icon name="details" type="material" color={tintColor} size={24} />
        ),
      },
    },

    OrderFoodScreen: {
      screen: OrderFoodScreen,
      navigationOptions: {
        tabBarLabel: 'Gọi món',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="food-fork-drink"
            type="material-community"
            color={tintColor}
            size={24}
          />
        ),
      },
    },
  },
  {
    //router config
    initialRouteName: 'TableInfoScreen', // screen hiện đầu tiên
    //order: ['TableInfoScreen'],
    //navigation for complete tag navigator
    navigationOptions: {
      tabBarVisible: true, // ẩn/ hiện menu bottom
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
        borderWidth: 0,
        shadowOffset: {width: 10, height: 5},
        shadowOpacity: 0,
        elevation: 5,
      },
    },
  },
);

export default BottomTabNavigator;
