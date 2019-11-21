import React from 'react';
import TableScreen from '../screens/TableScreen';
import BottomNavigator from '../navigator/BottomTabNavigator';
import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';

export const StackNavigator = createStackNavigator(
  {
    //Can use name in here but i like label :)
    TableScreen: {
      screen: TableScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Bàn',
        headerTintColor: 'blue',
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

    OrderFood: {
      screen: BottomNavigator,
      navigationOptions: {
        headerTintColor: 'blue',
        title: 'Thông tin bàn',
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

export const BillHistoryStack = createStackNavigator({
  //Can use name in here but i like label :)
  BillHistory: {
    screen: BillHistoryScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Lịch sử hóa đơn',
      headerTintColor: 'blue',
      headerLeft: (
        // <View style={{marginRight:0}}>
        //   <TouchableOpacity
        //     onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        //     style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
        //     <Image
        //       source={{
        //         uri:
        //           'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
        //       }}
        //       style={{width: 25, height: 25, marginLeft: 10}}
        //     />
        //     {/* <Text style={{fontSize: 23, marginLeft: 10}}>Lịch sử hóa đơn</Text> */}
        //   </TouchableOpacity>
        // </View>
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

export const IndexStack = createStackNavigator({
  //Can use name in here but i like label :)
  Index: {
    screen: IndexScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Màn hình chính',
      headerTintColor: 'blue',
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
