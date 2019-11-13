import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
class TableInfoScreen extends Component {
  componentDidMount() {
    //Call api o day
  }

  componentDidUpdate() {
    //Xu li data sau khi xu li su kien o day
  }
  render() {
    return (
      <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TableInfoScreen</Text>
      </View>
    );
  }
}

export default TableInfoScreen;
