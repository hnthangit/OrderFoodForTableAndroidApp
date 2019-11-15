import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';

class IndexScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>IndexScreen</Text>
        <Button>
          <Image></Image>
        </Button>
      </View>
    );
  }
}

export default IndexScreen;
