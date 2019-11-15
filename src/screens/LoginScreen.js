import React, {Component} from 'react';
import {Text, View, ScrollView, Button, AsyncStorage} from 'react-native';
import Table from '../components/table/Table';
import {TextInput} from 'react-native-gesture-handler';
class LoginScreen extends Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Screen</Text>
        <TextInput placeholder="Tên đăng nhập" />
        <TextInput placeholder="Mật khẩu" />
        <Button title="Đăng nhập" onPress={this._signInAsync} />
      </View>
    );
  }
}

export default LoginScreen;
