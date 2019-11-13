import LoginScreen from '../screens/LoginScreen';
import {createStackNavigator} from 'react-navigation-stack';
const StackLogin = createStackNavigator({
  //Can use name in here but i like label :)
  Login: LoginScreen,
});

export default StackLogin;
