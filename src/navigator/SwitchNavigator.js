import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    //Table: StackNavigator,
    App: DrawerNavigator,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
