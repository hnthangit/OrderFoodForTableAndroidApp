import React, {Component} from 'react';
import {View, ActivityIndicator, StatusBar, AsyncStorage} from 'react-native';

class LogoutScreen extends Component {
  componentDidMount() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default LogoutScreen;
