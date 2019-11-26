import {createDrawerNavigator} from 'react-navigation-drawer';
import {StackNavigator} from './StackNavigator';
import LogoutScreen from '../screens/LogoutScreen';
import {MainNav} from './MainNav';
import Drawerbar from '../components/drawerbar/Drawerbar';
const DrawerNavigator = createDrawerNavigator(
  {
    Index: {
      screen: MainNav,
      // navigationOptions: {
      //   drawerLabel: 'Trang chủ',
      // },
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: () => null,
        };
      },
    },
    Table: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: 'Danh sách bàn',
      },
    },
    LogoutScreen: {
      screen: LogoutScreen,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Đăng xuất',
        // contentComponent: props => (
        //   <View style={{flex: 1}}>
        //     <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
        //       <DrawerItems {...props} />
        //       <TouchableOpacity
        //         onPress={() =>
        //           Alert.alert(
        //             'Log out',
        //             'Do you want to logout?',
        //             [
        //               {
        //                 text: 'Cancel',
        //                 onPress: () => {
        //                   return null;
        //                 },
        //               },
        //               {
        //                 text: 'Confirm',
        //                 onPress: () => {
        //                   AsyncStorage.clear();
        //                   props.navigation.navigate('Auth');
        //                 },
        //               },
        //             ],
        //             {cancelable: false},
        //           )
        //         }>
        //         <Text
        //           style={{
        //             margin: 16,
        //             fontWeight: 'bold',
        //             color: colors.textColor,
        //           }}>
        //           Logout
        //         </Text>
        //       </TouchableOpacity>
        //     </SafeAreaView>
        //   </View>
        // ),
      }),
    },
  },
  {
    initialRouteName: 'Index',
    contentComponent: Drawerbar,
  },
);

export default DrawerNavigator;
