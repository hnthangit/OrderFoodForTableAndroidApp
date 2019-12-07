import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

class IndexScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text>Đây là View 1</Text>
          <Text>thông tin...</Text>
        </View>
        <View>
          <Text>Đây là View 2</Text>
          <Text>thông tin...</Text>
        </View>
        <View>
          <Text>Đây là View 3</Text>
          <Text>thông tin...</Text>
        </View>
        <View>
          <Text>Đây là View 4</Text>
          <Text>thông tin...</Text>
        </View>
      </View>
    );
  }
}

export default IndexScreen;
