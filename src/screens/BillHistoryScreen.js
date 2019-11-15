import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

class BillHistoryScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>Bill History Screen</Text>
        <ScrollView>
          <Text>List bill</Text>
        </ScrollView>
      </View>
    );
  }
}

export default BillHistoryScreen;
