import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';

class BillInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      billInfo: {},
      name: '',
      date: '',
      food: [],
    };
  }
  componentDidMount() {
    let urlGetOrder = 'http://restaurantappapi.azurewebsites.net/api/Orders';
    let urlGetFood = 'http://restaurantappapi.azurewebsites.net/api/Foods';
    axios
      .all([axios.get(urlGetOrder), axios.get(urlGetFood)])
      .then(
        axios.spread((getOrderRes, getFoodRes) => {
          if (getOrderRes.status === 200) {
            this.setState({
              data: getOrderRes.data,
              billInfo: this.props.navigation.getParam('billItem', {}),
              date: this.props.navigation.getParam('date', ''),
              name: this.props.navigation.getParam('name', ''),
            });
          }
          if (getFoodRes.status === 200) {
            this.setState({
              food: getFoodRes.data,
            });
          }
        }),
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  renderBillInfo = () => {
    if (this.state.data) {
      return this.state.data.map(item => {
        let food = this.state.food.find(x => x.id === item.foodId);
        console.log(this.state.food.find(x => x.id === item.foodId));
        if (
          food !== undefined &&
          item.billId === this.props.navigation.getParam('billId', 0)
        ) {
          return (
            <View
              key={item.foodId}
              style={{borderColor: 'red', borderWidth: 1}}>
              <Text>Tên món: {food.name}</Text>
              <Text>Giá: {food.price}</Text>
              <Text>Số lượng: {item.quantity}</Text>
              <Text>Thành tiền: {item.paymentAmount}</Text>
            </View>
          );
        }
      });
    }
  };
  render() {
    return (
      <View>
        <Text>Mã hóa đơn: {this.state.billInfo.id}</Text>
        <Text>Người lập: {this.state.date}</Text>
        <Text>Ngày lập: {this.state.name}</Text>
        <ScrollView>{this.renderBillInfo()}</ScrollView>
        <Text style={{color: 'red', fontSize: 50}}>
          Tổng tiền: {this.state.billInfo.totalPayment}
        </Text>
      </View>
    );
  }
}

export default BillInfoScreen;
