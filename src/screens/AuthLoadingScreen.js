import React from 'react';
import {ActivityIndicator, View, Text, StatusBar, Animated} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../components/splash/Splash.style';
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }
  state = {
    logoOpacity: new Animated.Value(0),
  };

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('user');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('user');
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {toValue: 1, duration: 2000}),
    ]).start(() => {
      // this.props.navigation.navigate('Auth');
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/images/splash.jpg')}
          style={{...styles.AvatarStyle, opacity: this.state.logoOpacity}}
        />
        <Text>App Order Food</Text>
        <StatusBar barStyle="default" />
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
