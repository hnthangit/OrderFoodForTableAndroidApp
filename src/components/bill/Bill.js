import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './Bill.style';
class Bill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let nameArray = ['Thắng', 'Minh', 'Hưng'];
    //Handle date created
    let year = this.props.item.createTime.slice(0, 4);
    let month = this.props.item.createTime.slice(5, 7);
    let day = this.props.item.createTime.slice(8, 10);
    let date = day + '/' + month + '/' + year;
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate('BillInfo', {
            billId: this.props.item.id,
            billItem: this.props.item,
            date: date,
            name: nameArray[this.props.item.creatorId - 1],
          });
        }}>
        <View style={styles.container}>
          <Text>Mã hóa đơn: {this.props.item.id}</Text>
          <Text>Người lập: {nameArray[this.props.item.creatorId - 1]}</Text>
          <Text>Ngày lập: {date}</Text>
          <Text>Tổng tiền: {this.props.item.totalPayment}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Bill;
