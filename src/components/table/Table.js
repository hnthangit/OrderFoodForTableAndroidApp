import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Table.style';
class Table extends Component {
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

export default Table;
