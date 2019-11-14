import OrderFoodScreen from '../screens/OrderFoodScreen';
import TableInfoScreen from '../screens/TableInfoScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs';
const BottomTabNavigator = createBottomTabNavigator({
  //Can use name in here but i like label :)
  TableInfoScreen: {
    screen: TableInfoScreen,
  },

  OrderFoodScreen: {
    screen: OrderFoodScreen,
  },
});

export default BottomTabNavigator;
