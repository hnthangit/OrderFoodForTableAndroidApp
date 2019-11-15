import OrderFoodScreen from '../screens/OrderFoodScreen';
import TableInfoScreen from '../screens/TableInfoScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
const BottomTabNavigator = createBottomTabNavigator({
  TableInfoScreen: {
    screen: TableInfoScreen,
    navigationOptions: {
      tabBarLabel: 'Chi tiết',
    },
  },

  OrderFoodScreen: {
    screen: OrderFoodScreen,
    navigationOptions: {
      tabBarLabel: 'Gọi món',
    },
  },
});

export default BottomTabNavigator;
