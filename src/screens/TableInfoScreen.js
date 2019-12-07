import React, {Component} from 'react';
import {Text, View, ScrollView, Alert, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import axios from 'axios';
import Modal from 'react-native-modal';
import styles from './screenstyle/TableInfoScreen.style';
class TableInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      food: [],
      modalVisible: false,
    };
  }
  componentDidMount() {
    let urlGetOrder =
      'http://restaurantappapi.azurewebsites.net/api/Orders/GetOrdersByTableId?tableId=' +
      JSON.stringify(this.props.navigation.getParam('tableName', 0));
    let urlGetFood = 'http://restaurantappapi.azurewebsites.net/api/Foods';
    axios
      .all([axios.get(urlGetOrder), axios.get(urlGetFood)])
      .then(
        axios.spread((getOrderRes, getFoodRes) => {
          if (getOrderRes.status === 200) {
            this.setState({
              data: getOrderRes.data,
            });
          }
          if (getFoodRes.status === 200) {
            this.setState({
              food: getFoodRes.data,
            });
          }
        }),
      )
      .catch(error => {
        console.log(error);
      });
  }

  setModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  componentWillUnmount() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  payment = () => {
    let url =
      'http://restaurantappapi.azurewebsites.net/api/Tables/' +
      this.props.navigation.getParam('tableName', 0) +
      '/GetBilling';
    axios
      .post(url)
      .then(response => {
        if (response.status === 200) {
          Alert.alert('Thông báo', 'Bạn đã thanh toán thành công', [
            {
              text: 'Đồng ý',
              onPress: () => {
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({routeName: 'TableScreen'}),
                    ],
                  }),
                );
              },
            },
          ]);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  renderAlertSuccess = () => {
    Alert.alert('Thông báo', 'Bạn đã thanh toán thành công', [
      {text: 'Đồng ý', onPress: this.props.navigation.navigate('TableScreen')},
    ]);
  };

  renderTableInfo = () => {
    if (this.state.data.length !== 0) {
      return this.state.data.map(item => {
        let food = this.state.food.find(x => x.id === item.foodId);
        if (food !== undefined) {
          return (
            <View
              style={{borderWidth: 1, borderColor: 'purple'}}
              key={item.foodId}>
              <Text>Món: {food.name}</Text>
              <Text>Đơn giá: {food.price}</Text>
              <Text>Số lượng: {item.quantity}</Text>
              <Text>Thành tiền: {item.paymentAmount}</Text>
            </View>
          );
        }
      });
    } else {
      return (
        <View>
          <Text>Bàn trống</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>{this.renderTableInfo()}</ScrollView>
        <TouchableOpacity onPress={this.setModalVisible}>
          <View
            style={
              this.state.data.length !== 0
                ? styles.btn_payment
                : styles.btn_payment_d_none
            }>
            <Text>Nut thanh toan</Text>
          </View>
        </TouchableOpacity>
        <Modal
          onBackButtonPress={this.setModalVisible}
          isVisible={this.state.modalVisible}
          transparent={true}>
          <View style={styles.modal_alert_payment}>
            <Text>Bạn có chắc chắn muốn thanh toán ?</Text>
            <Button onPress={this.payment} title="Ok!!" />
            <Button onPress={this.setModalVisible} title="Hủy" />
          </View>
        </Modal>
      </View>
    );
  }
}

export default TableInfoScreen;
