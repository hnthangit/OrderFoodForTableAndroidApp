import TableScreen from '../screens/TableScreen';
import OrderFoodScreen from '../screens/OrderFoodScreen';

import BottomNavigator from '../navigator/BottomTabNavigator';
import {createStackNavigator} from 'react-navigation-stack';
const StackNavigator = createStackNavigator(
  {
    //Can use name in here but i like label :)
    TableScreen: {
      screen: TableScreen,
    },

    OrderFood: {
      screen: BottomNavigator,
    },
  },
  {
    initialRouteName: 'TableScreen',
  },
);

export default StackNavigator;
