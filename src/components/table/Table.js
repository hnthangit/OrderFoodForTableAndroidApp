import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Table.style';
class Table extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('OrderFood')}>
        <View on style={styles.container}>
          <Text>Bàn số {this.props.tableName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default Table;
