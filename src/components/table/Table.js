import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './Table.style';
class Table extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('OrderFood', {
              tableName: this.props.tableName,
            })
          }>
          <View on style={styles.table}>
            <View>
              <Image
                // style={styles.tableImg}
                style={
                this.props.item.flag === 1 ? styles.tableImgconguoi : styles.tableImgkoconguoi
              }
                source={require('../../assets/images/table2.png')}
              />
            </View>
            <View
              >
              <Text style={styles.tableText}>
                Bàn số {this.props.tableName}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Table;
