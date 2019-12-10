import React, {Component} from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LogoutScreen extends Component {
  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  componentDidMount() {
    const {navigate} = this.props.navigation;
    navigate('Second');
    try {
      fetch('http://apiserver').then(response => {
        navigate('Auth');
      });
    } catch (error) {
      navigate('Auth');
    }
  }

  render() {
    return (
      <View>
        <Button title="Hello" onPress={this.signOut} />
      </View>
    );
  }
}

export default LogoutScreen;
