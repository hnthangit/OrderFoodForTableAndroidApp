import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
class TableInfoScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text>Hn Thắng</Text>
          <Text>Sở thích: yêu màu tím, thích màu hồng</Text>
          <Text>Sống nội tâm nhưng là người hòa đồng</Text>
          <Text>Yêu hòa bình nhưng thích cà khịa</Text>
          <Text>Thích gái nhưng ko thích trai</Text>
        </View>
        <View>
          <Text>Vnq Minh</Text>
          <Text>ZZZZZ ZZZZZZ</Text>
        </View>
        <View>
          <Text>Ddp Hưng</Text>
          <Text>NNNNNNNNNNN NNNNNNNNNNN</Text>
        </View>
      </View>
    );
  }
}

export default TableInfoScreen;
