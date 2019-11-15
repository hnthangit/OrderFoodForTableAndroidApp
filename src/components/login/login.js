import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import styles from './Login.style';
import Icon from 'react-native-vector-icons';
class Login extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Text style={styles.Text}>Huwng dep troai</Text>
        </View>
        <View style={styles.secondContainer}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/45046244_1161256877359163_3375469404140601344_n.jpg?_nc_cat=103&_nc_oc=AQlzmBTRTnbvXa8C3JcDzCl6ZRx_2Xlxe_jj-a4y__tnvN5Jq1vAZ9-P-2y4AssaP_8&_nc_ht=scontent.fhan2-1.fna&oh=1ebe1632e6ace45d70756e0963417a6d&oe=5E4A60F7',
            }}
          />
        </View>
        <View style={styles.thridContainer}>
          <TextInput
            keyboardType="email-address"
            mode="outlined"
            label="Email"
            placeholder="Enter email here"
            // value={this.state.text}
            onChangeText={text => this.setState({text})}
          />
          <TextInput
            mode="outlined"
            secureTextEntry={true}
            label="Password"
            placeholder="Enter password here"
            value={this.props.password}
          />
          <View style={styles.loginbutton}>
            <Button
              icon={<Icon name="arrow-right" size={15} color="white" />}
              iconRight
              title="Đăng nhập"
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Login;
