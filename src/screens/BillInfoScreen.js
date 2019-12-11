import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import styles from './screenstyle/BillInfoScreen.style';
import {Icon} from 'react-native-elements';

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
              style={styles.food}
              cardElevation={20}
              cardMaxElevation={5}
              cornerRadius={5}
              key={item.foodId}>
              <Text style={styles.food_quantity}>{item.quantity} X </Text>
              <Text style={styles.food_name}>{food.name}</Text>
              <Text style={styles.food_total}>{item.paymentAmount}</Text>
            </View>
          );
        }
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bill_info_top}>
          <Text style={styles.bill_info_top_left}>
            {'  '}
            Mã hóa đơn {this.state.billInfo.id}
          </Text>
          <Text style={styles.bill_info_top_right}>
            Ngày lập: {this.state.date}
          </Text>
        </View>
        <View style={styles.text_in_food}>
          <Text>{'  '}Tóm tắt đơn hàng</Text>
          <Icon
            style={styles.icon_text_right}
            size={18}
            name="information-variant"
            type="material-community"
          />
        </View>
        <ScrollView>{this.renderBillInfo()}</ScrollView>
        <View style={styles.text_in_total}>
          <Text style={styles.text_in_total_a}>Tổng cộng</Text>
          <Text style={styles.text_in_total_b}>
            {this.state.billInfo.totalPayment}{'\u20AB'}
          </Text>
        </View>
      </View>
    );
  }
}

export default BillInfoScreen;
