import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Table.style';
class Table extends Component {
  render() {
    return (
      //o la o, co la 1
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate('OrderFood', {
            tableName: this.props.tableName,
          })
        }>
        <View
          style={
            this.props.item.flag === 1 ? styles.container : styles.koconguoi
          }>
          <Text>Bàn số {this.props.tableName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default Table;
