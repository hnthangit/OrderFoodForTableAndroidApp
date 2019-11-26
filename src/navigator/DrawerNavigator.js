import {createDrawerNavigator} from 'react-navigation-drawer';
import {StackNavigator} from './StackNavigator';
<<<<<<< HEAD
import LogoutScreen from '../screens/LogoutScreen';
import {MainNav} from './MainNav';
import Drawerbar from '../components/drawerbar/Drawerbar';
=======
import {MainNav} from './MainNav';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
>>>>>>> b0fd236c6216d64a562b4d2b2fc40d9ac25c7a74
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
        drawerIcon: ({tintColor}) => (
          <Icon name="list-ul" type="ionicons" color={tintColor} size={24} />
        ),
      },
    },
    LogoutScreen: {
      screen: LogoutScreen,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Đăng xuất',
<<<<<<< HEAD
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
=======
        drawerIcon: ({tintColor}) => (
          <Icon
            name="sign-out-alt"
            type="ionicons"
            color={tintColor}
            size={24}
          />
        ),
      },
>>>>>>> b0fd236c6216d64a562b4d2b2fc40d9ac25c7a74
    },
  },
  {
    initialRouteName: 'Index',
    contentComponent: Drawerbar,
  },
);

export default DrawerNavigator;
