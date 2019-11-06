import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

class TableScreen extends Component {
  componentDidMount() {
    //Call api o day
  }

  componentDidUpdate(){
    //Xu li data sau khi xu li su kien o day
  }

  handletouch() {
    //Viet ham xu li su kiem cham vao View o day
  }
  render() {
    return (
      <View
        onTouchStart={handletouch()}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>TableScreen</Text>
        <ScrollView>
          <Text>List Table</Text>
        </ScrollView>
      </View>
    );
  }
}

export default TableScreen;
