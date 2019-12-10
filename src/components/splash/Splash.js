import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import styles from './Splash.style';
export default class Splash extends Component {
  state = {
    logoOpacity: new Animated.Value(0),
  };
  async componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {toValue: 1, duration: 2000}),
    ]).start(() => {
      this.props.navigation.navigate('Auth');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Animated.Text
          style={{...styles.title, opacity: this.state.logoOpacity}}>
          Hello, This is Splash
        </Animated.Text> */}
        <Animated.Image
          // source={{
          //   uri:
          //     'https://i.pinimg.com/564x/9f/d0/a4/9fd0a4b0b05ddd181b4958ea9890679d.jpg',
          // }}
          // source={require('../splash/abc.jpg')}
          style={{...styles.AvatarStyle, opacity: this.state.logoOpacity}}
        />
      </View>
    );
  }
}
