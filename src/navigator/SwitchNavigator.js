import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import StackNavigator from './StackNavigator';
const SwitchNavigator = createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    //Table: StackNavigator,
    App: DrawerNavigator,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'Auth',
  },
);

const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
