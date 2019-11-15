import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>ProfileScreen</Text>
        <ScrollView>
          <Text>Thông tin cá nhân</Text>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
