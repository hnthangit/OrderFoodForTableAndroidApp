import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Table.style';

class Table extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bàn số {this.props.tableName}</Text>
      </View>
    );
  }
}

export default Table;
