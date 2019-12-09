import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import styles from './Table.style';
class Table extends Component {
  render() {
    return (
      <View style={{flex: 1, alignContent: 'flex-start', flexWrap: 'wrap'}}>
        <TouchableHighlight
          style={styles.motban}
          onPress={() =>
            this.props.navigation.navigate('OrderFood', {
              tableName: this.props.tableName,
            })
          }>
          <View on style={styles.container}>
            <View>
              <Image
                style={styles.tableImg}
                source={require('../../assets/images/table2.png')}
              />
            </View>
            <View
              style={
                this.props.item.flag === 1 ? styles.container : styles.koconguoi
              }>
              <Text>Bàn số {this.props.tableName}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Table;

{
  /* <View style={styles.viewTable}>
          <View style={styles.Image}></View>
          <View style={styles.text}></View>
        </View> */
}
// import React, {Component} from 'react';
// import {Text, View, TouchableHighlight} from 'react-native';
// import styles from './Table.style';
// class Table extends Component {
//   render() {
//     return (
//       //o la o, co la 1
//       <TouchableHighlight
//         onPress={() =>
//           this.props.navigation.navigate('OrderFood', {
//             tableName: this.props.tableName,
//           })
//         }>
//         <View
//           style={
//             this.props.item.flag === 1 ? styles.container : styles.koconguoi
//           }>
//           <Text>Bàn số {this.props.tableName}</Text>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }
// export default Table;
