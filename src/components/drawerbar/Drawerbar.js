//This is an example code for Navigation Drawer with Custom Side bar//
import React, {Component} from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

//import {Icon} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './Drawerbar.style';

class Drawbar extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://cdn3.iconfinder.com/data/icons/careers-women-2/64/catering-service-waitress-restaurant-employee-512.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{uri: this.proileImage}}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{width: '100%'}}>
          <View>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate('Index');
              }}>
              <View style={{marginRight: 10, marginLeft: 10}}>
                <Icon name="home" size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                }}>
                {'Trang chủ'}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate('AuthorInfo');
              }}>
              <View style={{marginRight: 10, marginLeft: 10}}>
                <Icon name="info-circle" size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                }}>
                {'Thông tin tác giả'}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                Alert.alert(
                  'Đăng xuất',
                  'Bạn có muốn đăng xuất?',
                  [
                    {
                      text: 'Hủy',
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: 'Ok!!',
                      onPress: () => {
                        AsyncStorage.clear();
                        this.props.navigation.navigate('Auth');
                      },
                    },
                  ],
                  {cancelable: false},
                )
              }>
              <View style={{marginRight: 10, marginLeft: 10}}>
                <Icon name="sign-out-alt" size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                }}>
                {'Đăng xuất'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Drawbar;
