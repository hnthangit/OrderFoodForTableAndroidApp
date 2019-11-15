import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, AsyncStorage} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../components/login/Login';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../components/login/Login.style';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pass: '',
    };
  }
  _onPress = () => {
    // alert('You tapped the button!');
    const {text, pass} = this.state;
    alert(pass);
    alert(text);
  };
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  render() {
    return (
      // thẻ div ngoài cùng
      <View style={styles.container}>
        {/* thẻ div tiếp theo hiển thị phần avatar */}
        <View style={styles.secondContainer}>
          <Avatar
            avatarStyle={styles.AvatarStyle}
            size="xlarge"
            rounded
            source={{
              uri:
                'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/45046244_1161256877359163_3375469404140601344_n.jpg?_nc_cat=103&_nc_oc=AQlzmBTRTnbvXa8C3JcDzCl6ZRx_2Xlxe_jj-a4y__tnvN5Jq1vAZ9-P-2y4AssaP_8&_nc_ht=scontent.fhan2-1.fna&oh=1ebe1632e6ace45d70756e0963417a6d&oe=5E4A60F7',
            }}
          />
        </View>
        {/* thẻ div hiển thị phần đăng nhập gồm tên đăng nhập và mật khẩu */}
        <View style={styles.thridContainer}>
          <TextInput
            placeholderTextColor="red"
            keyboardType="email-address"
            mode="outlined"
            label="Tên đăng nhập"
            placeholder="Nhập tên đăng nhập"
            value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
          <TextInput
            mode="outlined"
            secureTextEntry={true}
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            // onChangeText={this.onPasswordChange.bind(this)}
            onChangeText={pass => this.setState({pass})}
            value={this.props.password}
          />
          {/* thẻ div hiển thị phần nút gradient */}
          <View style={styles.fourthContainer}>
            <View style={styles.fifthContainer}>
              <LinearGradient
                style={styles.LinearGradientContainer}
                colors={[
                  '#00FFFF',
                  '#17C8FF',
                  '#329BFF',
                  '#4C64FF',
                  '#6536FF',
                  '#8000FF',
                ]}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 1.0}}>
                <TouchableOpacity
                  onPress={this._onPress}
                  style={styles.TouchableOpacityStyle}>
                  <Text style={styles.TextLogin}>LOGIN</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            {/* <Button title="Đăng nhập" onPress={this._onPress} /> */}
          </View>
          <View style={styles.TextView}>
            <Text style={styles.TextViewTitle}>fee and always will be !</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default LoginScreen;
