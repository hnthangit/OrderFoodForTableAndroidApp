import StackLogin from './StackLogin';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
const SwitchNavigator = createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'Auth',
  },
);

const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;
