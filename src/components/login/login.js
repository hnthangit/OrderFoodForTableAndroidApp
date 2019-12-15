import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Login.style';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    //Không cần sử dụng dòng này vì đã sử dụng arrow function
    //this.login = this.login.bind(this);
  }

  componentDidMount() {
    //console.log('ko co asyncstorage');
    this.isUserExist();
  }

  isUserExist = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.props.navigation.navigate('App');
      } else {
        console.log('ko co asyncstorage');
      }
    } catch (e) {
      // error reading value
    }
  };

  login = () => {
    let url =
      'http://restaurantappapi.azurewebsites.net/api/Users/Login?username=' +
      this.state.username +
      '&password=' +
      this.state.password;
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          //console.log(response.data.success);
          this.saveUser(JSON.stringify(response.data.id));
        } else {
          console.log('ko dung');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  saveUser = async userId => {
    try {
      //console.log(userId);
      await AsyncStorage.setItem('user', userId);
      console.log(AsyncStorage.getItem('user'));
      //console.log('Save user');
      this.props.navigation.navigate('App');
    } catch (e) {
      // saving error
    }
  };

  render() {
    return (
      // thẻ div ngoài cùng
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.container}>
            {/* thẻ div tiếp theo hiển thị phần avatar */}

            <View style={styles.secondContainer}>
              <Avatar
                avatarStyle={styles.AvatarStyle}
                size="xlarge"
                rounded
                source={{
                  uri:
                    'https://st2.depositphotos.com/3577609/11841/v/950/depositphotos_118413936-stock-illustration-restaurant-logo-design.jpg',
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
                value={this.state.username}
                onChangeText={username => this.setState({username})}
                onSubmitEditing={() => this.refs.txtPassWord.focus()}
                returnKeyType="next"
              />

              <TextInput
                mode="outlined"
                secureTextEntry={true}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                //value={this.props.password}
                ref="txtPassWord"
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
                      onPress={this.login}
                      style={styles.TouchableOpacityStyle}>
                      <Text style={styles.TextLogin}>LOGIN</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>

                {/* <Button title="Đăng nhập" onPress={this._onPress} /> */}
              </View>

              <View style={styles.TextView}>
                <Text style={styles.TextViewTitle}>
                  paid and always will be !
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Login;
//Cachs lamf
