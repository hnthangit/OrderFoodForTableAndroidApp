import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './Table.style';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode';
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
                resizeMode={ImageResizeMode.contain}
                // style={styles.tableImg}
                style={styles.tableImg}
                source={
                  this.props.item.flag === 0
                    ? require('../../assets/images/table.png')
                    : require('../../assets/images/table2.png')
                }
              />
            </View>
            <View>
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
