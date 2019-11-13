import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Bill.style';
class Bill extends Component {
  handlePress() {}

  render() {
    return (
      <View on style={styles.container}>
        <TouchableHighlight>
          <Text>Bàn số {this.props.tableName}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Bill;
