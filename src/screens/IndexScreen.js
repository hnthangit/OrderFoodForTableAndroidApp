import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './screenstyle/IndexScreen.style';

class IndexScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Đây là trang chủ</Text>
      </View>
    );
  }
}

export default IndexScreen;
