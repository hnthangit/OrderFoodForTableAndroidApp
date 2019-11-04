import BillHistoryScreen from '../screens/BillHistoryScreen';
import IndexScreen from '../screens/IndexScreen';
import TableScreen from '../screens/TableScreen';
import {createStackNavigator} from 'react-navigation';

const Navigator = createStackNavigator({
  TableScreen: {
    screen: TableScreen,
  },
  BillHistoryScreen: {
    screen: BillHistoryScreen,
  },
});

export default Navigator;
