import React, {Component} from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import axios from 'axios';
import Modal from 'react-native-modal';
import styles from './screenstyle/TableInfoScreen.style';
import {Icon} from 'react-native-elements';
import CardView from 'react-native-cardview';
import ActionButton from 'react-native-action-button';
import FloatingActionButton from 'react-native-floating-action-button';
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
            <CardView
              style={styles.cardview}
              cardElevation={15}
              cardMaxElevation={5}
              cornerRadius={5}
              key={item.foodId}>
              <Text>Món: {food.name}</Text>
              <Text>Đơn giá: {food.price}</Text>
              <Text>Số lượng: {item.quantity}</Text>
              <Text>Thành tiền: {item.paymentAmount}</Text>
            </CardView>
          );
        }
      });
    } else {
      return (
        <View style={styles.empty}>
          <Text style={styles.empty_text}>Bàn trống</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.food_table}>
        <ScrollView>{this.renderTableInfo()}</ScrollView>
        {/* <TouchableOpacity onPress={this.setModalVisible}>
          <View
            style={
              this.state.data.length !== 0
                ? styles.btn_payment
                : styles.btn_payment_d_none
            }>

          </View>
        </TouchableOpacity> */}
        <ActionButton
          buttonColor="#f1f8e9"
          onPress={this.setModalVisible}
          //tiểu xảo
          size={this.state.data.length !== 0 ? 60 : 0}
          renderIcon={active =>
            active ? (
              <Icon size={50} name="cash" type="material-community" />
            ) : (
              <Icon size={50} name="cash" type="material-community" />
            )
          }
        />
        <Modal
          onBackButtonPress={this.setModalVisible}
          isVisible={this.state.modalVisible}
          transparent={true}>
          <View style={styles.modal_alert_payment}>
            <Text style={styles.textAlert}>
              Bạn có chắc chắn muốn thanh toán ?
            </Text>
            <View style={styles.modal_alert_payment_btn}>
              <TouchableOpacity style={styles.btn} onPress={this.payment}>
                <Text style={{color: 'rgba(255,234,0 ,1)'}}>OK</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={this.setModalVisible}>
                <Text style={{color: 'rgba(255,234,0 ,1)'}}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default TableInfoScreen;
